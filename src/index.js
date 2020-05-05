import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink, Observable } from 'apollo-link'
import { ApolloProvider } from '@apollo/react-hooks'

import { StateProvider } from './Context'
import { App } from './App'

const token = window.sessionStorage.getItem('token')

const cache = new InMemoryCache()
const request = async (operation) => {
  const token = await window.sessionStorage.getItem('token')
  const authorization = token ? `Bearer ${token}` : ''
  operation.setContext({
    headers: {
      authorization
    }
  })
}
const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle
      Promise.resolve(operation)
        .then((oper) => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          })
        })
        .catch(observer.error.bind(observer))

      return () => {
        if (handle) handle.unsubscribe()
      }
    })
)

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        )
      }
      if (networkError && networkError.result === 'invalid_token') {
        window.sessionStorage.removeItem('token')
        window.location.href = '/'
      }
    }),
    requestLink,
    new HttpLink({
      uri: 'https://the-petgram-server.now.sh/graphql',
      crendentials: 'include'
    })
  ]),
  cache
})

const InitialState = {
  isAuth: token,
  sectionLogin: true,
  email: '',
  password: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'UpdateUserLogin':
      return { ...state, isAuth: action.payload }
    case 'sectionLogin':
      return { ...state, sectionLogin: action.payload }
    case 'Email':
      return { ...state, email: action.payload }
    case 'Password':
      return { ...state, password: action.payload }

    default:
      return state
  }
}

ReactDOM.render(
  <StateProvider initialState={InitialState} reducer={reducer}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StateProvider>,
  document.getElementById('app')
)

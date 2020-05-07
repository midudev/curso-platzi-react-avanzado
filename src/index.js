import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import { StateProvider } from './Context'
import { App } from './App'

const token = window.sessionStorage.getItem('token')

const client = new ApolloClient({
  uri: 'https://the-petgram-server.now.sh/graphql',
  request: async (operation) => {
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
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

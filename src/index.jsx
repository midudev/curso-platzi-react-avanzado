import ReactDOM from 'react-dom'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import App from './App'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:3500/graphql',
  // uri: 'https://petgram-api.midudev.now.sh/graphql',
  request: operation => {
    const token = window.localStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: ({ networkError }) => {
    if (networkError.result.code === 'invalid_token') {
      window.localStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)

import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider

} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://petgram-api-duraznodev22.vercel.app/graphql',
  cache: new InMemoryCache()

})
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'))

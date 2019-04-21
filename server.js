import fetch from 'node-fetch'
import React from 'react'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import Express from 'express'
import { ServerLocation } from '@reach/router'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ReactDOMServer from 'react-dom/server'

import fs from 'fs'
import path from 'path'

import ClientApp from './src/App'

import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

const app = new Express()
const sheet = new ServerStyleSheet()

const indexFile = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
app.get('/app.bundle.js', Express.static('dist'))

const createHTML = ({ content, styleTags, initialState }) => {
  return indexFile
    .replace('<!-- content -->', content)
    .replace('<!-- styleTags -->', styleTags)
    .replace(
      '<!-- initialState -->',
      `<script>window.__APOLLO_STATE__=${JSON.stringify(initialState).replace(/</g, '\\u003c')}</script>`
    )
}

app.use((req, res) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      fetch,
      uri: 'http://localhost:3500/graphql',
      credentials: 'same-origin',
      headers: {
        cookie: req.header('Cookie')
      }
    }),
    cache: new InMemoryCache()
  })

  const context = {}

  // The client-side App will instead use <BrowserRouter>
  const App = (
    <ApolloProvider client={client}>
      <StyleSheetManager sheet={sheet.instance}>
        <ServerLocation url={req.url} context={context}>
          <ClientApp />
        </ServerLocation>
      </StyleSheetManager>
    </ApolloProvider>
  )

  getDataFromTree(App).then(() => {
    const styleTags = sheet.getStyleTags()
    const initialState = client.extract()
    const content = ReactDOMServer.renderToString(App)

    const html = createHTML({ content, initialState, styleTags })

    res.status(200)
    res.type('html')
    res.send(html)
  })
})

app.listen('1234', () => console.log(
  `app Server is now running on http://localhost:1234`
))

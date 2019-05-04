const express = require('express')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const { resolvers, typeDefs } = require('./schema')
const jwt = require('express-jwt')
const { JWT_SECRET } = require('./env')

// initialize db
require('./adapter')

const app = express()
const { categories } = require('./db.json')

app.use(cors())

// auth middleware
const auth = jwt({
  secret: JWT_SECRET,
  credentialsRequired: false
})

const server = new ApolloServer({
  introspection: true,
  playground: true, // do this only for dev purposes
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const { id, email } = req.user || {}
    return { id, email }
  }
})

app.use(auth)

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }

  // if (err.code === 'invalid_token') return next()

  const { status } = err
  res.status(status).json(err)
}
app.use(errorHandler)
server.applyMiddleware({ app, path: '/graphql' })

app.get('/categories', function (req, res) {
  res.send(categories)
})

if (!process.env.NOW_REGION) {
  const PORT = process.env.PORT || 3500
  app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}/graphql`)
  )
}

module.exports = app

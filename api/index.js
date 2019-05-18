const express = require('express')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const { resolvers, typeDefs } = require('./schema')
const jwt = require('express-jwt')

require('dotenv').config()

const PORT = process.env.PORT || 3500
const app = express()
const { categories } = require('./db.json')

app.use(cors())

// auth middleware
const auth = jwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false
})

require('./adapter')

const server = new ApolloServer({
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
  const { status } = err
  res.status(status).json(err)
}
app.use(errorHandler)
server.applyMiddleware({ app, path: '/graphql' })

app.get('/categories', function (req, res) {
  res.send(categories)
})

app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}/graphql`)
)

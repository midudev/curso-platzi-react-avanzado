const express = require("express")
const { ApolloServer } = require("apollo-server-express")
const { resolvers, typeDefs } = require("./schema")
const jwt = require("express-jwt")

require("dotenv").config()

const PORT = process.env.PORT || 3500
const app = express()
const { categories } = require('./db.json')

// auth middleware
const auth = jwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false
})

const db = require("./adapter")

const server = new ApolloServer({
  cors: false, // do this only for dev purposes
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
server.applyMiddleware({ app, path: '/graphql', cors: false })

app.get('/categories', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.send(categories)
})

app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}/graphql`)
)

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { resolvers, typeDefs } = require("./schema");
const jwt = require("express-jwt");
require("dotenv").config();

const PORT = process.env.PORT || 3500;
const app = express();

// auth middleware
const auth = jwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false
})

const db = require("./adapter");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  context: ({ req }) => {
    const { id, email } = req.user || {}
    return { id, email }
  }
})

app.use(auth)
server.applyMiddleware({ app, path: '/graphql' });

app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}/graphql`)
);

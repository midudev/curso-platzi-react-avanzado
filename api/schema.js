const userModel = require('./models/userModel')
const categoriesModel = require('./models/categoriesModel')
const photosModel = require('./models/photosModel')
const { gql } = require('apollo-server-express')
const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    isPremium: Boolean
  }

  type Photo {
    id: ID
    categoryId: Int
    src: String
    likes: Int
    userId: ID
  }

  type Category {
    id: ID
    cover: String
    name: String
    emoji: String
    path: String
  }

  type Query {
    favs: [Photo]
    categories: [Category]
    photos: [Photo]
  }

  input LikePhoto {
    photoId: Int!
  }

  input UserCredentials {
    email: String!
    password: String!
  }

  type Mutation {
    likePhoto (input: LikePhoto!): Photo
    signup (input: UserCredentials!): String
    login (input: UserCredentials!): String
  }
`

const resolvers = {
  Mutation: {
    likePhoto: (_, { input }, context) => {
      const {email, id} = context
      // check if the user is logged
      if (!id) throw new Error('you must be logged in to query this schema');
      // find the user and check if it exists
      const user = userModel.find({email})
      if (!user) throw new Error('user does not exist')

      // find the photo by id and throw an error if it doesn't exist
      const {photoId} = input
      const photo = photosModel.find({ id: photoId })
      if (!photo) {
        throw new Error(`Couldn't find photo with id ${photoId}`)
      }

      // put a like to the photo and add the like to the user database
      photosModel.like({ id: photoId })
      userModel.addFav({ id, photoId, })

      return photo
    },
    // Handle user signup
    async signup (_, { input }) {
      const {email, password} = input
      const user = await userModel.create({
        email,
        password
      })

      // return json web token
      return jsonwebtoken.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1y' }
      )
    },

    // Handles user login
    async login (_, { input }) {
      const { email, password} = input
      const user = await userModel.find({ email })

      if (!user) {
        throw new Error('No user with that email')
      }

      const valid = await bcrypt.compare(password, user.password)

      if (!valid) {
        throw new Error('Incorrect password')
      }

      // return json web token
      return jsonwebtoken.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      )
    }
  },
  Query: {
    favs() {
      const favs = userModel.find()
    },
    categories() {
      return categoriesModel.list()
    },

    photos() {
      return photosModel.list()
    }
  }
}

module.exports = { typeDefs, resolvers }
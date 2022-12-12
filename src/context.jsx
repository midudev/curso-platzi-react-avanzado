import React, { createContext, useState } from 'react'
import { navigate } from '@reach/router'

const Context = createContext()

export const Provider = ({ children }) => {
  const initialAuth = Boolean(window.localStorage.getItem('token'))
  const [isAuth, setIsAuth] = useState(initialAuth)

  const value = {
    isAuth,
    activateAuth: (token) => {
      window.localStorage.setItem('token', token)
      setIsAuth(true)
      navigate('/')
    },
    disableAuth: () => {
      window.localStorage.removeItem('token')
      setIsAuth(false)
      navigate('/')
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default Context

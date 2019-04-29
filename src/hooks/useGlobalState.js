import { useContext } from 'react'
import Context from '../context'

export const useGlobalState = () => {
  const context = useContext(Context)
  return context
}

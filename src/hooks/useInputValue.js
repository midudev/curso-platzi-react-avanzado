import { useState } from 'react'
import { useStateValue } from '../Context'

export const useInputValue = (initialValue, type) => {
  const [value, setValue] = useState(initialValue)
  const [, dispatch] = useStateValue()
  const onChange = (e) => {
    const key = e.target.value
    setValue(key)
    dispatch({
      type,
      payload: key
    })
  }
  return { value, onChange }
}

import { useState, useCallback } from 'react'

export const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = useCallback(function (e) {
    setValue(e.currentTarget.value)
  }, [])

  return {
    value,
    onChange
  }
}

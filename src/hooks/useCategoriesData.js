import { useState, useEffect } from 'react'

export function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-api-duraznodev22.vercel.app/categories')
      .then(response => response.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

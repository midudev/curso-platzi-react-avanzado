import { useState, useEffect } from 'react'

export function useFetchData (url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await window.fetch(url)
        const data = await response.json()
        setData(data)
        setLoading(false)
      } catch (error) {
        setLoading(true)
        setError('Se presentó un error al obtener los datos, por favor intente nuevamente en unos minutos')
        console.error(error)
      }
    }
    fetchData()
  }, [])
  return [data, loading, error]
}

import { useEffect, useState, useRef } from 'react'

export const useNearScreen = () => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const loadPollyfill = async () => {
      try {
        await import('intersection-observer')
      } catch (error) {
        console.log(error)
      };
    }
    if (!window.IntersectionObserver) loadPollyfill()

    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])
  return [show, element]
}

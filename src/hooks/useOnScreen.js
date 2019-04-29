import { useEffect, useState } from 'react'

export const useOnScreen = (ref, rootMargin = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    let observer

    ;(window.IntersectionObserver
      ? Promise.resolve()
      : import('intersection-observer')
    ).then(() => {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting)
        },
        {
          rootMargin
        }
      )
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      observer.unobserve(ref.current)
    }
  }, []) // cDM

  return isIntersecting
}

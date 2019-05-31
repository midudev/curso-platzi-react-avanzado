import { useState, useRef, useEffect } from 'react'

export const useNearScreen = ({ rootMargin = '0px' } = {}) => {
  const [isNear, setIsNear] = useState(false)
  const el = useRef(null)

  useEffect(
    function () {
      if (typeof el.current === 'undefined') return

      let observer

      const onIntersect = (entries, observer) => {
        const { isIntersecting } = entries[0]

        if (isIntersecting) {
          setIsNear(true)
          observer.disconnect()
        }
      }

      observer = new window.IntersectionObserver(onIntersect, { rootMargin })
      observer.observe(el.current)

      return () => observer && observer.disconnect()
    },
    [el, rootMargin]
  )

  return [isNear, el]
}

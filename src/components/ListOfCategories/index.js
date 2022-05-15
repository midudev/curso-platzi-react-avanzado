import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
import { useCategoriesData } from '../../hooks/useCategoriesData'

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 204
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed, loading) => (
    <List fixed={fixed}>
      {loading
        ? [1, 2, 3, 4, 5, 6].map((category, i) =>
          <Item key={i}>
            <Category {...category} />
          </Item>)
        : categories?.map((category, i) =>
          <Item key={category.id || i}>
            <Category {...category} />
          </Item>)}
    </List>
  )

  return (
    <>
      {renderList(false, loading)}
      {showFixed && renderList(true, loading)}
    </>
  )
}

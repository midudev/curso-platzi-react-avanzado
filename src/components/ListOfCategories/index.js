import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { CategorySkeleton } from '../CategorySkeleton'

import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)
      const response = await window.fetch('https://the-petgram-server.now.sh/categories')
      const data = await response.json()
      setCategories(data)
      setLoading(false)
    }
    fetchCategories()
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading
        ? [1, 2, 3, 4, 5, 6].map((item) => (
          <Item key={item}>
            <CategorySkeleton />
          </Item>
        ))
        : categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

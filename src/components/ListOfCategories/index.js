import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { CategorySkeleton } from '../CategorySkeleton'

import { useFetchData } from '../../hooks/useFetchData'

import { List, Item } from './styles'
import { Error } from '../../styles/Error'

const ListOfCategoriesComponent = () => {
  const [categories, loading, error] = useFetchData('https:/the-petgram-server.now.sh/categories')
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
      {error ? (
        <Error>
          <p>{error}</p>
        </Error>
      ) : loading ? (
        [1, 2, 3, 4, 5, 6].map((item) => (
          <Item key={item}>
            <CategorySkeleton />
          </Item>
        ))
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)

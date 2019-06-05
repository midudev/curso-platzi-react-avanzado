import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { useCategoriesData } from '../../hooks/useCategoriesData'

const ListOfCategoriesComponent = () => {
  const { loading, categories } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed) => {
    return (
      <Fragment>
        <List className={fixed ? 'fixed' : ''}>
          {
            loading
              ? <Item key='loading'><Category /></Item>
              : categories.map(category =>
                <Item key={category.id}>
                  <Category {...category} path={`/pet/${category.id}`} />
                </Item>
              )
          }
        </List>
      </Fragment>
    )
  }

  return (
    <React.Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </React.Fragment>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)

import React from 'react'

import { useGetCategories } from '../../hooks/useGetCategories'

import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const { categories } = useGetCategories()

  return (
    <List>
      {categories.map(category => (
        <Item key={category.id}>
          <Category
            {...category}
          />
        </Item>
      ))}
    </List>
  )
}

export const ListOfCategoriesPlaceholder = () => (
  <List>
    <Item><Category /></Item>
    <Item><Category /></Item>
    <Item><Category /></Item>
    <Item><Category /></Item>
  </List>
)

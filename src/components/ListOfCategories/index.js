import React from 'react'

import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = ({ categories } = {}) => {
  return (
    <List>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} />
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

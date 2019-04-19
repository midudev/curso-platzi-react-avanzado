import React from 'react'

import Category from '../Category'
import { categories as categoriesData } from '../../mock-data'
import { List, Item } from './styles'

export default function ListOfCategories ({ categories = categoriesData } = {}) {
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

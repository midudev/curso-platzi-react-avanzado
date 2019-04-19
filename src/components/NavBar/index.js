import React from 'react'
import { MdHome, MdSearch, MdFavoriteBorder } from 'react-icons/md'

import { Button, Nav } from './styles'

const ICON_SIZE = '32px'

export default function NavBar () {
  return (
    <Nav>
      <Button active><MdHome size={ICON_SIZE} /></Button>
      <Button><MdSearch size={ICON_SIZE} /></Button>
      <Button><MdFavoriteBorder size={ICON_SIZE} /></Button>
    </Nav>
  )
}

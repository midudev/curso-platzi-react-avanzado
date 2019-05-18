import React from 'react'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

import { Button, Nav } from './styles'

const ICON_SIZE = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Button to='/'><MdHome size={ICON_SIZE} /></Button>
      <Button to='/favs'><MdFavoriteBorder size={ICON_SIZE} /></Button>
      <Button to='/user'><MdPersonOutline size={ICON_SIZE} /></Button>
    </Nav>
  )
}

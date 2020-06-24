import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { Menu as MUIMenu, MenuItem, IconButton, Badge } from '@material-ui/core'
import { Notifications, Menu as MenuIcon } from '@material-ui/icons'
import Search from 'src/components/Search/Search'
import { Routes } from 'src/core/Routes'

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${p => p.theme.space()};
`

const AppBar: FC = props => {
  const [ anchorEl, setAnchorEl ] = useState(null)
  const isMenuOpen = !!anchorEl
  
  const handleProfileMenuOpen = (e: any) => {
    setAnchorEl(e.currentTarget)
  }
  
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  
  return (
    <Toolbar {...props}>
      <Search />
      <div>
        <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton color='inherit' onClick={handleProfileMenuOpen}>
          <MenuIcon />
        </IconButton>
        <MUIMenu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          <MenuItem><Link to={Routes.AUTH}>Logout</Link></MenuItem>
        </MUIMenu>
      </div>
    </Toolbar>
  )
}

export default AppBar

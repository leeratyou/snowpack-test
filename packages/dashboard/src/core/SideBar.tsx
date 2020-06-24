import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Equalizer, Inbox, Drafts } from '@material-ui/icons'

import logo from 'src/assets/logo.png'
import { Routes } from 'src/core/Routes'

const Logo = styled.img`

`

const LogoText = styled.p`
  font-size: 1.2rem;
  font-weight: lighter;
`

const SideBarContainer = styled.div`
  width: 12vw;
  min-width: 200px;
`

const SideBar: FunctionComponent = () => {
  const history = useHistory()
  const handle = (page: Routes) => () => history.push(page)
  
  return (
    <SideBarContainer>
      <List>
        <ListItem><Logo src={logo} width={50} /><LogoText>Fintech</LogoText></ListItem>
        <ListItem button onClick={handle(Routes.DASH)}><ListItemIcon><Equalizer /></ListItemIcon><ListItemText>Dashboard</ListItemText></ListItem>
        <ListItem button onClick={handle(Routes.NOTI)}><ListItemIcon><Inbox /></ListItemIcon><ListItemText>Notifications</ListItemText></ListItem>
        <ListItem button onClick={handle(Routes.MSGS)}><ListItemIcon><Drafts /></ListItemIcon><ListItemText>Messages</ListItemText></ListItem>
      </List>
    </SideBarContainer>
  )
}

export default SideBar

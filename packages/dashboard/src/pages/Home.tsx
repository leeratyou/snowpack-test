import React, { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Routes } from 'src/core/Routes'
import Layout from 'src/core/Layout'

import Dashboard from 'src/pages/Dashboard'
import Notifications from 'src/pages/Notifications'
import Messages from 'src/pages/Messges'

const Home: FC = () => (
  <Layout>
    <Switch>
      <Route path={Routes.DASH} component={Dashboard} />
      <Route path={Routes.NOTI} component={Notifications} />
      <Route path={Routes.MSGS} component={Messages} />
      <Redirect exact from='/' to={Routes.DASH} />
    </Switch>
  </Layout>
)

export default Home

import React, { FC } from 'react'
import { Switch, Redirect, Route as DOMRoute, BrowserRouter } from 'react-router-dom'

import Home from 'src/pages/Home'
import Auth from 'src/pages/Auth'

export enum Routes {
  BASE = '/',
  NOT_FOUND = '/404',
  AUTH = '/auth',
  DASH = '/dashboard',
  NOTI = '/notifications',
  MSGS = '/messages'
}

// export const PrivateRoute: FunctionComponent<PrivateRouteProps> = inject('userStore')(observer(({ userStore, ...rest }) => (
//   (userStore!.isAuthenticated || userStore!.isLoading)
//     ? <Route {...rest} />
//     : <Redirect to={BrowserRoutes.LOGIN} />
// )))
//
//
// export const AuthedRoute: FunctionComponent<PrivateRouteProps> = inject('userStore')(observer(({ userStore, children, ...rest }) => (
//   userStore!.isAuthenticated
//     ? <Redirect to={BrowserRoutes.HOME} />
//     : <Route {...rest} />
// )))

const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      <DOMRoute path={Routes.AUTH} component={Auth} />
      <DOMRoute path={Routes.BASE} component={Home} />
      <Redirect to={Routes.NOT_FOUND} />
    </Switch>
  </BrowserRouter>
)

export default Router

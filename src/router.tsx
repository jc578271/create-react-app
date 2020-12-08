import React from 'react'
import Layout from './Hoc/Layout'
import Auth from './Hoc/Auth'
import { Router, Switch, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import Home from './components/home'
import SignIn from './components/sign-in'

const history = createHistory()

const Routes = () => {
    return (
        <Layout>
            <Router history={history}>
                <Switch>
                    <Route exact component={Auth(Home, null)} path="/"/>
                    <Route exact component={Auth(Home, true)} path="/admin"/>
                    <Route exact component={Auth(SignIn, true)} path="/sign_in"/>
                </Switch>
            </Router>
        </Layout>
        
    )
}

export default Routes

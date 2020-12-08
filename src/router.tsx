import React from 'react'
import Layout from './Hoc/Layout'
import Auth from './Hoc/Auth'
import { Switch, Route } from 'react-router-dom'

import Home from './components/home'

const Routes = (props: any) => {
    return (
        <Layout>
            <Switch>
                <Route exact component={Auth(Home, null)} path="/"/>
                <Route exact component={Auth(Home, true)} path="/admin"/>
                <Route exact component={Auth(Home, false)} path="/sign_in"/>
            </Switch>
        </Layout>
        
    )
}

export default Routes

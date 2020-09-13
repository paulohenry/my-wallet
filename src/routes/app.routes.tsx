import React from 'react'
import {Switch, Route,BrowserRouter} from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import List from '../pages/list'

import Layout from '../components/layout'

const AppRoutes  = ()=>{
  return(
    <BrowserRouter>
      <Switch >
        <Layout>
          <Route exact path="/dashboard"  component={Dashboard}/>
          <Route exact path="/list/:type"  component={List}/>
        </Layout>
      </Switch>
    </BrowserRouter>

  )
}

export default AppRoutes;

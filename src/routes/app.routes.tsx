import React from 'react'
import {Switch, Route,BrowserRouter} from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import Saida from '../pages/saida'
import Entrada from '../pages/entrada'
import Layout from '../components/layout'

const AppRoutes:React.FC = ()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/dashboard"  component={Dashboard}/>
          <Route exact path="/entry"  component={Entrada}/>
          <Route exact path="/exit"  component={Saida}/>
        </Layout>
      </Switch>
    </BrowserRouter>

  )
}

export default AppRoutes;

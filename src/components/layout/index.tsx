import React from 'react'
import {Grid} from './styles'

import Aside from '../aside'
import Content from '../content'
import MainHeader from '../mainheader'


const Layout:React.FC = ()=>
 {
  return (
    <Grid>
        <Aside/>
        <Content/>
        <MainHeader/>
    </Grid>
  )
}

export default Layout;

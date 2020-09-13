import React from 'react';
import {ThemeProvider} from 'styled-components'

import Routes from './routes/index'

import GlobalStyles from './styles/globalstyles'
import dark from './styles/themes/dark'
// import light from './styles/themes/light'

const App = ()=>{
  return (
     <ThemeProvider theme={dark} >
      <GlobalStyles/>
      <Routes/>
     </ThemeProvider>
  )
}
export default App;

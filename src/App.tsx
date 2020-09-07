import React from 'react';
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './styles/globalstyles'
import Layout from './components/layout'
import dark from './styles/themes/dark'
import light from './styles/themes/light'

const App:React.FC = ()=>{
  return (
     <ThemeProvider theme={dark} >
      <GlobalStyles/>
      <Layout/>
     </ThemeProvider>
  )
}
export default App;

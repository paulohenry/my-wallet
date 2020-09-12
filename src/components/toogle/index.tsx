import React from 'react'
import {SwitchComponent,Container,SwitchLabel} from './styles'



 const Toogle:React.FC =()=>{
 return(
   <Container>
    <SwitchLabel>Dark</SwitchLabel>
     <SwitchComponent
           checked
           uncheckedIcon={false}
           checkedIcon={false}
           onChange={()=>console.log('ok')}
     />
     <SwitchLabel>Light</SwitchLabel>
   </Container>
 )
}
export default Toogle;

import React from 'react'
import {Container,Select} from './styles'

interface ISelectInputProps{
    options?:{
      value:string|number;
      label:string|number;
    }[]
}


const SelectInput:React.FC<ISelectInputProps> = ({options})=> {
  return (
    <Container>
      <Select>
       {options && options.map((o,i)=>{
         return(
         <option
          key={i}
          value={o.value}>{o.label}</option>
         )
       })}
      </Select>
    </Container>
  )
}

export default SelectInput

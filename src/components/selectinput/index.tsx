import React from 'react'
import {Container,Select} from './styles'

interface ISelectInputProps{
    options?:{
      value:string|number;
      label:string|number;
    }[]
    defaultValue?:string;
}


const SelectInput:React.FC<ISelectInputProps> = ({
  options,defaultValue})=> {
  return (
    <Container>
      <Select defaultValue={defaultValue}>
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

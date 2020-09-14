import React from 'react'
import {Container,Select} from './styles'

interface ISelectInputProps{
    options?:{
      value:string|number;
      label:string|number;
    }[],
    onChange:(event:React.ChangeEvent<HTMLSelectElement>)=>void | undefined;
    defaultValue:string;
}


const SelectInput:React.FC<ISelectInputProps> = ({
  options, onChange, defaultValue})=> {
  return (
    <Container>
      <Select
      defaultValue={defaultValue}
      onChange={onChange}>
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

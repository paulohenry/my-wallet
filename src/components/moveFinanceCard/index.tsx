import React from 'react'

import {Container, Tag} from './styles'

interface IMoveFinanceCard{

  tagColor?:string;
  title?:string;
  subtitle?:string;
  amount?:string;

}



const MoveFinanceCard:React.FC<IMoveFinanceCard> = ({
  tagColor,title,subtitle,amount
})=>{


  return (
    <Container >
        <Tag color={tagColor}/>
        <div>
          <span>{title}</span>
          <small>{subtitle}</small>
        </div>
        <h3>{amount}</h3>
    </Container>
  )
}

export default MoveFinanceCard

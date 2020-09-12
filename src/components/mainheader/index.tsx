import React,{useMemo} from 'react'

import emojis from '../../utils/emojis'
import {
  Container,
  Profile,
  UserName,
  Welcome,
} from './styles'

import Toogle from '../toogle'

const MainHeadert:React.FC = ()=>{


  const emoji = useMemo(()=>{
    const index_emoji = Math.floor(Math.random() * emojis.length)
    return emojis[index_emoji]
},[])

  return (
    <Container>
        <Toogle/>
        <Profile>
          <Welcome>Olá, {emoji} </Welcome>
          <UserName>Paulo roberto</UserName>
        </Profile>
    </Container>
  )
}

export default MainHeadert;

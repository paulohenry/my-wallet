import React from 'react'
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
    } from 'react-icons/md'
import {
    Container,
    Header,
    LogImg,
    MenuContainer,
    MenuItemLink,
    Title} from './styles'

import logo from '../../assets/logo.svg'

const Aside:React.FC = ()=>
 {
  return (
    <Container>
        <Header>
          <LogImg src={logo} alt="logotipo"/>
          <Title>Minha Carteira</Title>
        </Header>
        <MenuContainer>

          <MenuItemLink
            to="/dashboard">
              <MdDashboard/>
            Dashboard
          </MenuItemLink>

          <MenuItemLink
            to="/list/entry">
              <MdArrowDownward/>
            Entrada
          </MenuItemLink>

          <MenuItemLink
            to="/list/exit">
              <MdArrowUpward/>
            Saída
          </MenuItemLink>

          <MenuItemLink
            to="/">
              <MdExitToApp/>
            Sair
          </MenuItemLink>

        </MenuContainer>
    </Container>
  )
}

export default Aside;

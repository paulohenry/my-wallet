import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Container = styled.div`
      grid-area:AS;
      background-color:${props=> props.theme.colors.secondary};
      border-right:1px solid ${props=> props.theme.colors.gray};
      color:${props=>props.theme.colors.white};
`;

export const Header = styled.header`
    display:flex;
    align-items:center;
    margin-bottom:20px;
    height:70px;
`
export const LogImg = styled.img`
  margin:10px 0 0 20px;
  height:40px;
  width:40px;
`
export const Title = styled.h3`
  color:${props=>props.theme.colors.white};
  margin-left:10px;
`
export const MenuContainer = styled.nav`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
`

export const MenuItemLink = styled(Link)`
    color:${props=>props.theme.colors.info};
    text-decoration:none;
    margin-left:40px;
    display:flex;
    align-items:center;
    margin-bottom:20px;
    transition: opacity .3s;

    &:hover{
      opacity:.7;
    }
    > svg{
      margin-right:4px;
      font-size:24px;
    }
`

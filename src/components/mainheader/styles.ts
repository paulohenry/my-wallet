import styled from 'styled-components';

export const Container = styled.div`
      grid-area:MH;
      background-color:${props=> props.theme.colors.secondary};
      border-bottom:1px solid ${props=> props.theme.colors.gray};
      color:${props=>props.theme.colors.white};
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding: 0 20px;

`;

export const Profile = styled.div`
    display:flex;
    flex-direction:column;

`
export const UserName = styled.h3``
export const Welcome = styled.span``

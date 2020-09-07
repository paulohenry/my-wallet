import styled from 'styled-components';

export const Container = styled.div`
      grid-area:MH;
      background-color:${props=> props.theme.colors.secondary};
      border-bottom:1px solid ${props=> props.theme.colors.gray};
      color:${props=>props.theme.colors.white};
`;

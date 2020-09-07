import styled from 'styled-components';

export const Grid = styled.div`
    display:grid;
    grid-template-columns: 20vw auto;
    grid-template-rows: 10vh auto;
    grid-template-areas:
       "AS MH"
       "AS CT";
    border:1px solid red;
    height:100vh;
`;

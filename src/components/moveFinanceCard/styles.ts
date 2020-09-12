import styled from 'styled-components';


interface ITagProps{
  color?:string;
}

export const Container = styled.div`
    position:relative;
    height:62px;
    border-radius:8px;
    margin-bottom:12px;
    display:flex;
    align-items:center;
    background-color:${props=>props.theme.colors.tertiary};
    transition: all 0.3s;
    justify-content:space-between;
    padding: 0 24px;
    cursor:pointer;
    &:hover{
      opacity:0.7;
      transform:translateX(15px);
    }

    > div {
        display:flex;
        flex-direction:column;

        > span{
          font-size:16px;
          font-weight:bold;
          color:${props=>props.theme.colors.white}
        }
        >small{
          color:${props=>props.theme.colors.white}

        }
    }
    >h3{
      color:${props=>props.theme.colors.white}
    }

`;
export const Tag = styled.div<ITagProps>`
    position:absolute;
    left:0;
    width:15px;
    border-top-right-radius: 8px;
    border-bottom-right-radius:8px;
    height:60%;
    background-color:${props=>props.color};
`;

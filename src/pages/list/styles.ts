import styled from 'styled-components';
export const Container = styled.div`

`;

export const Content = styled.div`
`

export const Filters = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    padding:10px 0 30px 0;
    .btn{
      background:none;
      border:none;
      font-size:18px;
      font-weight:bold;
      margin:0 20px;
      color:${props=>props.theme.colors.white};
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      transition:all .1s;
      :hover{
        opacity:.7;
      }

    }
    .rec{
      ::after{
          content:'';
          display:block;
          width:70px;
          height:10px;
          background-color:${props=>props.theme.colors.success};
      }
    }
    .even{
      ::after{
          content:'';
          display:block;
          width:70px;
          height:10px;
          margin: 0 auto;
          background-color:${props=> props.theme.colors.warning};
      }
    }
`

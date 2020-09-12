import React from 'react'


import {
    Container,
    TitleContainer,
    Controllers
  } from './styles'


interface IContentHeader{
  title?:string;
  lineColor?:string;
  children?:React.ReactNode;
}

const ContentHeader:React.FC<IContentHeader> = ({
  title,lineColor, children})=>{
  return (
    <Container>
        <TitleContainer lineColor={lineColor}>
           <h1>{title && title}</h1>
        </TitleContainer>
        <Controllers>
            {children}
        </Controllers>
    </Container>
  )
}

export default ContentHeader;

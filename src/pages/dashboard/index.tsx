import React from 'react'
import {Container} from './styles'
import ContentHeader from '../../components/contentheader'
import Select from '../../components/selectinput'
import datas from '../../mockdatas/options'

const Dashboard:React.FC = ()=>
 {
  return (
    <Container>
        <ContentHeader
          lineColor={'#F7931B'}
          title="Dashboard">
            <Select options={datas.months}/>
            <Select options={datas.years}/>
        </ContentHeader>

    </Container>
  )
}

export default Dashboard;

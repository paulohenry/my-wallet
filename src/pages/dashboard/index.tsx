import React,{useState} from 'react'
import {Container} from './styles'
import ContentHeader from '../../components/contentheader'
import Select from '../../components/selectinput'
import datas from '../../mockdatas/options'

const Dashboard:React.FC = ()=>
 {

 const [months, setMonth]=useState(String(new Date().getMonth() + 1))
 const [years, setYears] = useState(String(new Date().getFullYear()))

 return (
    <Container>
        <ContentHeader
          lineColor={'#F7931B'}
          title="Dashboard">
            <Select
              options={datas.months}
              defaultValue={months}
              onChange={(e)=>{setMonth(e.target.value)}}/>
            <Select
              options={datas.years}
              defaultValue={years}
              onChange={(e)=>{setYears(e.target.value)}}
              />
        </ContentHeader>

    </Container>
  )
}

export default Dashboard;

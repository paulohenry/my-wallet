import React,{useMemo,useEffect,useState, useCallback}  from 'react'

import {Container,Content,Filters} from './styles'
import ContentHeader from '../../components/contentheader'
import Select from '../../components/selectinput'
import json_datas from '../../mockdatas/options'
import MoveFinanceCard from '../../components/moveFinanceCard/index'
import jsons_release_entry_data from '../../mockdatas/entry_datas'
import jsons_release_exit_data from '../../mockdatas/exit_datas'

import formattedCurrency from '../../utils/mountFormatted'
import formattedDate from '../../utils/dataFormatted'
import getMonthFunc from '../../utils/getMonthFunc'
import getYearFunc from '../../utils/getYearFunc'
interface IRouteProps{
  match:{
    params:{
      type:string;

    }
  }
}

interface IDatas{
  months:{
      value:number;
      label:string;
  }[],
  years:{
    value:number;
    label:number;
  }[]
}

interface IDatasRelease{
    tagColor:string,
    title:string,
    subtitle:string,
    amount:number
}


const Saida:React.FC<IRouteProps> = ({match})=> {
  const {type} = match.params
  const [months, setMonth]=useState(String(new Date().getMonth() + 1))
  const [years, setYears] = useState(String(new Date().getFullYear()))
  const [releaseDatas, setReleaseDatas]=useState<IDatasRelease[]>([])

  const datas:IDatas = {
    months:json_datas.months,
    years:json_datas.years
  }

  const datasMemo = useMemo(()=>{
      if(type==='entry'){
        return {
            title:'Entrada',
            lineColor:'#4E41F0',
            load:'entry'
        }
      }else if(type==='exit'){
        return {
          title:'Saida',
          lineColor:'#E44C4E',
          load:'exit'
      }
      }
  },[type])


const handleFrequencyClick = (frequency:string):void=>{


  if(frequency==='recorrente'){

  }
  if(frequency==='eventual'){

  }

}

  const filterDatasFunc = useCallback((data:IDatasRelease[])=>{
     let filteredMonths:IDatasRelease[]  = data.filter((d) =>{
        const currentMonth = getMonthFunc(d.subtitle)
        const currentYear = getYearFunc(d.subtitle)
        return currentMonth===months && currentYear===years
      })
      setReleaseDatas(filteredMonths)
  },[months,years])

  useEffect(()=>{
    if(datasMemo && (datasMemo.load==='entry')){
      filterDatasFunc(jsons_release_entry_data)
      }else if(datasMemo && (datasMemo.load==='exit')){
      filterDatasFunc(jsons_release_exit_data)
      }
  },[datasMemo,filterDatasFunc])

   return (
    <Container>
       <ContentHeader
          lineColor={datasMemo?.lineColor}
          title={datasMemo?.title}>
            <Select
              options={datas.months}
              onChange={(e)=>{
                console.log(e.target.value)
                setMonth(e.target.value)
              }}
              defaultValue={months}/>
            <Select
              options={datas.years}
              onChange={(e)=>{
                console.log(e.target.value)
                setYears(e.target.value)
              }}
              defaultValue={years}
              />
        </ContentHeader>

        <Filters>
            <button
              type="button"
              className="btn rec"
              onClick={()=>handleFrequencyClick('recorrente')}
              >Recorrentes
            </button>
            <button
              type="button"
              className="btn even"
              onClick={()=>handleFrequencyClick('eventual')}
              >Eventuais
            </button>
        </Filters>

        <Content>
          {releaseDatas.map((r,i)=>{
            return(
              <MoveFinanceCard
                key={i}
                amount={formattedCurrency(r.amount)}
                tagColor={r.tagColor}
                title={r.title}
                subtitle={formattedDate(r.subtitle)}
              />
            )
          })}
        </Content>
    </Container>
  );
}

export default Saida;

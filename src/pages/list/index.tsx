import React,{useMemo,useEffect,useState}  from 'react'

import {Container,Content,Filters} from './styles'
import ContentHeader from '../../components/contentheader'
import Select from '../../components/selectinput'
import jsons_datas from '../../mockdatas/options'
import MoveFinanceCard from '../../components/moveFinanceCard/index'
import jsons_release_entry_data from '../../mockdatas/entry_datas'
import jsons_release_exit_data from '../../mockdatas/exit_datas'

import formattedCurrency from '../../utils/mountFormatted'
import formattedDate from '../../utils/dataFormatted'

interface IRouteProps{
  match:{
    params:{
      type:string;

    }
  }
}

interface IDatas {
  months:{
      value:number;
      label:string;
    }[]
  ,
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
  const [datas, setDatas]=useState<IDatas>()
  const [releaseDatas, setReleaseDatas]=useState<IDatasRelease[]>([])


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

  useEffect(()=>{
      setDatas(jsons_datas)
      if(datasMemo && (datasMemo.load==='entry')){
        setReleaseDatas(jsons_release_entry_data)
      }else if(datasMemo && (datasMemo.load==='exit')){
        setReleaseDatas(jsons_release_exit_data)
      }
  },[datasMemo])



   return (
    <Container>
       <ContentHeader
          lineColor={datasMemo?.lineColor}
          title={datasMemo?.title}>
            <Select
              options={datas?.months}
              defaultValue={String(new Date().getMonth() + 1)}/>
            <Select
              options={datas?.years}
              defaultValue={String(new Date().getFullYear())}/>
        </ContentHeader>

        <Filters>
            <button
              type="button"
              className="btn rec"
              >Recorrentes
            </button>
            <button
              type="button"
              className="btn even"
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

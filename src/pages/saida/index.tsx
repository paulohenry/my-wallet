import React  from 'react'

import {Container,Content,Filters} from './styles'
import ContentHeader from '../../components/contentheader'
import Select from '../../components/selectinput'
import datas from '../../mockdatas/options'
import MoveFinanceCard from '../../components/moveFinanceCard/index'
import releaseDatas from '../../mockdatas/releasesCardDatas'


const Saida:React.FC= ()=> {

   return (
    <Container>
       <ContentHeader
          lineColor='#E44C4E'
          title='Saídas'>
            <Select options={datas.months}/>
            <Select options={datas.years}/>
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
                amount={r.amount}
                tagColor={r.tagColor}
                title={r.title}
                subtitle={r.subtitle}
              />
            )
          })}
        </Content>
    </Container>
  );
}

export default Saida;

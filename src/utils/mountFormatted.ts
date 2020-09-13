const mountFormatted = (currency:number):string =>{
  return currency.toLocaleString('pt-br',{
    style:'currency',
    currency:'BRL'
  })


}
export default mountFormatted

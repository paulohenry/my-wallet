const getYearFunc = (date:string)=>{
  const formattedDate = new Date(date)
  return (String(formattedDate.getFullYear()))
}

export default getYearFunc

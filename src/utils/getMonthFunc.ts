const getmonth = (date:string)=>{
    const formattedDate = new Date(date)
    return (String(formattedDate.getMonth()+1))
}

export default getmonth

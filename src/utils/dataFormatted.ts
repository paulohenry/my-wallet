const dataFormatted = (date:string)=>{
    const formattedDate = new Date(date)

    const day = formattedDate.getDay()
    const month = formattedDate.getMonth() + 1;
    const year = formattedDate.getFullYear();

    const formatedDay = day < 10 ? `0${day}`:day
    const formatedMonth = month < 10 ? `0${month}`:month

    return `${formatedDay}/${formatedMonth}/${year}`

}
export default dataFormatted

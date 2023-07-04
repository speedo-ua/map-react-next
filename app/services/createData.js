
export const createData = async (params) =>{

 
    
    const TRANSPORT_TYPE = `transport-type=${params.transportType}`
    const TRANSPORT_VALUE = `transport-value=${params.transportValue}`

    const response = await fetch(`/api/getdata?${TRANSPORT_TYPE}&${TRANSPORT_VALUE}`)
    const data = await response.json()
    // console.log(data)
    return data
}
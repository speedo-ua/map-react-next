import { NextResponse } from "next/server"

export const GET = async (req) => {
 
    const URL_MUNICIPAL =  process.env.URL_MUNICIPAL;
    const URL_BUS = process.env.URL_BUS;
    let urlFetch;

    const {searchParams} = new URL(req.url);
    const transportType = searchParams.get('transport-type');
    const transportValue = searchParams.get('transport-value');

    transportType === 'bus' ? urlFetch = URL_BUS : urlFetch = URL_MUNICIPAL; 
    
    const response = await fetch(urlFetch);
    const data = await response.json();

    const amountReducer = (transport) =>{
            const result = transport.reduce((groupTransport, current)=>{
              const num = current.number;
              if (groupTransport[num] == null) groupTransport[num]=0
              groupTransport[num] += 1
              return groupTransport
            }, {})
            const arrResult = Object.entries(result)
            return NextResponse.json(arrResult)
    }

    const filteredTransValue = (data, value) => {
            const res = data.filter(elem => elem.number === value)
            return NextResponse.json(res)
    }
    
    if (transportType !== 'bus') {
          const municipalFilteredArr = data.positions.filter(elem => elem.type === transportType)
          if (transportValue !=='All'){
            return filteredTransValue(municipalFilteredArr, transportValue) 
          }
          if (transportValue ==='All') return amountReducer(municipalFilteredArr);
    }
    if (transportType === 'bus') {
          if (transportValue !=='All'){
            return filteredTransValue(data.positions, transportValue) 
          } 
          if (transportValue ==='All') return amountReducer(data.positions);
    }
}

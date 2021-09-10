import React, { useEffect ,useState } from 'react';
import axios from 'axios';
import Card from './Card';


const CountriesData = (props) => {
  // console.log(props)
  const [countryData, setCountryData] = useState([]);
  useEffect(()=>{
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountryData(response.data)
      })
      .catch(error => {
        console.log(error);
      })

  }, [])
  
  return (
    <div>
      {
        countryData.map( country => {
          return (
            <div>
              <Card {...country}/>
            </div>
            )
        })
      }
    </div>
  )
}

export default CountriesData;


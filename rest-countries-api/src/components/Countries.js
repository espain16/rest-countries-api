import React, { useEffect ,useState } from 'react';
import axios from 'axios';


const CountriesData = () => {

  const [countryData, setCountryData] = useState([]);
  useEffect(()=>{
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response);
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
              <h4 key={country.id}>{country.name}</h4> 
            
            )
        })
      }
    </div>
  )
}

export default CountriesData;

// useEffect(() => {
//   fetch('https://restcountries.eu/rest/v2/all')
//     .then(response => {
//       if(response.ok) {
//         return response.json()
//       }
//       throw response;
//     })
//     .then(data => {
//       setData(data);
//       console.log(data);
//     })
//     .catch(err => {
//       console.log(err);
//     })
    
// }, [])
//countries I need to set up my call to the api here
// for each country I want to display the
  // flag
  // name of country
  // population
  // region
  // capital 
// each country should displayed in a card format 

// https://restcountries.eu/rest/v2/all'
import React from 'react';



const Card = (props) => {
  return(
    <div className="card-container">
      <img className="card-flag" src={props.flag}/>
      <h4 className="card-title">{props.name}</h4>
      <p className="card-population">{props.population}</p>
      <p className="card-region">{props.region}</p>
      <p className="card-capital">{props.capital}</p>
    </div>
  )
}
export default Card;
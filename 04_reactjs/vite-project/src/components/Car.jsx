import React from 'react'

const Car = ({make,model,year,price}) =>{
  return (
    <li>
      <p>make:{make}</p>
      <p>model:{model}</p>
      <p>year:{year}</p>
      <p>price:{price}</p>
    </li>
  )
}

export default Car
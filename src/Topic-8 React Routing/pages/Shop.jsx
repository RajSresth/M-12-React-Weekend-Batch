import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Shop = () => {
  const {city,state,address} = useLoaderData()

  return (
    <div>
      <h1>Shop Page</h1>
      <h3>City: {city}</h3>
      <h3>State: {state}</h3>
      <h3>Address: {address}</h3>
    </div>
  )
}

export default Shop
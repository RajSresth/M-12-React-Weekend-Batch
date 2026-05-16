import React from 'react'
import { useLocation } from 'react-router-dom'

const Order = () => {
  const location = useLocation()

  console.log(location?.state?.user);
  return (
    <div>
      <h1>Welcome to Order Page</h1>
    </div>
  )
}

export default Order

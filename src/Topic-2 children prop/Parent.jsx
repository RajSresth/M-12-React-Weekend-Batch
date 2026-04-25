import React from 'react'
import Child from "./Child"

const Parent = () => {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child>
        <h3>Hello Amit</h3>
        <h3>How are you?</h3>
      </Child>
    </div>
  )
}

export default Parent
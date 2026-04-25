import React from 'react'

const Child = (props) => {
  console.log("props:",props);
  return (
    <div>
      <h2>Child Component</h2>
      {
        props.children
      }
    </div>
  )
}

export default Child
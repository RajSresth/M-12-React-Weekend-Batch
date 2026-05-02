import React from 'react'

const Card = ({category,title,oldPrice,price,image}) => {

    const customizeTitle = title.length > 8 ? title.split(" ").slice(0,8).join(" ") + "...": title;
  return (
    <div className="card">
        <div className="product-image">
            <img src={image[0]} alt="" />
        </div>
        <div className='info'>
            <p className='category'>{category}</p>
            <div className="product-title">{customizeTitle}</div>
            <p><del>{oldPrice}</del> <b>{price}/-</b> </p>
        </div>
    </div>
  )
}

export default Card
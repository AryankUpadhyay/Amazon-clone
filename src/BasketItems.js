import React from 'react'
import "./BasketItems.css"

function BasketItems({id, title, image,price, rating}) {
  return (
    <div className="Product">
      <div className="Product_INFO">
        <p>{title}</p>
        <p className="Prdouct_Price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="Product_Rating">
           {Array(rating).fill()
           .map((_, i)=>
           (<p>⭐</p>)
           )} 
        </div>
      </div>
      <img src={image} alt=""/>
    </div>
  )
}

export default BasketItems

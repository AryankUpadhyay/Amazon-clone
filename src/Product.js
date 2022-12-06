import React from 'react'
import "./Product.css"

function product({id, title , image,prices, rating}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{prices}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill()
          .map((_,i)=>
          (<p>⭐</p>)
          )
          }
        </div>
      </div>
      <img src={image}
      alt=""
      />
      <button>Add to Basket</button>

    </div>
  )
}

export default product

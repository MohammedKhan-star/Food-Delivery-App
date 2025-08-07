import React from 'react'

const Food_Item = ({id,name,price,description,image}) => {
  return (
     <div className='food-item'>
          <div className="food-item-img-container">
              
              <img className='food-item-image' src={image} alt="" />
              


          </div>
          <div className="food-item-name-rating">
              <p className="">{name}</p>
              
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">${ price}</p>
    </div>
  )
}

export default Food_Item

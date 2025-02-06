import React from 'react'

const MenuSectionItems = (props) => {
    const {item} = props;
    const{name, defaultPrice, finalPrice} = item?.card?.info;
    
  return (
    <div className='dish-container'>
    <div className='dish-details'>
       <p>{name}</p> 
       {finalPrice ? (
        <p><span className='old-price'>₹{defaultPrice/100}</span> ₹{finalPrice/100}</p>
       ):(<p>₹{defaultPrice/100}</p>)}
        
    </div>
    <button className='dish-add-btn'>ADD</button>
    </div>
  )
}

export default MenuSectionItems
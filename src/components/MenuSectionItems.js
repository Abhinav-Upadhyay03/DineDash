import React from 'react'

const MenuSectionItems = (props) => {
    const {item} = props;
    const{name, price, finalPrice} = item?.card?.info;
    console.log(item);
    
  return (
    <div className='dish-container'>
    <div className='dish-details'>
       <p>{name}</p> 
       {finalPrice ? (
        <p><span className='old-price'>₹{price/100}</span> ₹{finalPrice/100}</p>
       ):(<p>₹{price/100}</p>)}
        
    </div>
    <button className='dish-add-btn'>ADD</button>
    </div>
  )
}

export default MenuSectionItems
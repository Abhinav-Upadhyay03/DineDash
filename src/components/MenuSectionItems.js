import React from 'react'

const MenuSectionItems = (props) => {
    const {item} = props;
    const{name, price, isVeg, category} = item?.card?.info;
    
  return (
    <div className='dish-container'>
    <div className='dish-details'>
       <p>{name}</p> 
        <p>₹{price/100}</p>
    
    </div>
    <button className='dish-add-btn'>ADD</button>
    </div>
  )
}

export default MenuSectionItems
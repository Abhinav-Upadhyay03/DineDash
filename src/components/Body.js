import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { API_RESTAURANT } from '../utils/constants';

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const fetchData = async () => {
        const data = await fetch(API_RESTAURANT);
        const json = await data.json();
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);    
    }
    useEffect(() => {
        fetchData();
    }, [])
    

  return (
    <div className='body-container'>
      <div className='search-bar-container'>
        <input className='search-bar' type="text" placeholder='Search Restaurant' onChange={(e) => {
            const value = e.target.value;
            setSearchValue(value);
            setFilteredList(restaurantList.filter(res => (res.info.name.toLowerCase()).includes(value.toLowerCase())))
        }}/>
      </div>
      <div className='body-cards'>
        {filteredList.map(restaurant => (<RestaurantCard key={restaurant.info.id} resData = {restaurant} />))}
      </div>
    </div>
  )
}

export default Body

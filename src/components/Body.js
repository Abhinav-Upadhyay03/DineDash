import React, { useEffect, useState } from 'react'
import RestaurantCard, { vegRestaurantCard } from './RestaurantCard'
import { API_RESTAURANT } from '../utils/constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const RestaurantCardVeg = vegRestaurantCardRestaurantCard(RestaurantCard);

    const fetchData = async () => {
        const data = await fetch(API_RESTAURANT);
        const json = await data.json();
        setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);    
    }
    useEffect(() => {
        fetchData();
    }, [])

    const onlineStatus = useOnlineStatus();
    if(!onlineStatus){
      return (<h1>Looks like you're offline. <br /> Please check your internet connection.</h1>)
    }
    console.log(filteredList);
    
    

  return (restaurantList.length === 0) ? <Shimmer /> : (
    <div className='body-container'>
      <div className='search-bar-container'>
        <input className='search-bar' type="text" placeholder='Search Restaurant' onChange={(e) => {
            const value = e.target.value;
            
            setFilteredList(restaurantList.filter(res => (res.info.name.toLowerCase()).includes(value.toLowerCase())))
        }}/>
      </div>
      <div className='body-cards'>
        {filteredList.map(restaurant => (<Link to={"./restaurant/"+restaurant?.info?.id} key={restaurant?.info?.id}>
        {
          restaurant?.info?.veg ? (<RestaurantCardVeg resData = {restaurant}/>) : (<RestaurantCard resData = {restaurant} />)
        }
        
        </Link>))
        }
      </div>
    </div>
  )
}

export default Body

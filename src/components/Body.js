import React, { useEffect, useState } from "react";
import RestaurantCard, { vegRestaurantCard } from "./RestaurantCard";
import { API_RESTAURANT } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const RestaurantCardVeg = vegRestaurantCard(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(API_RESTAURANT);
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <div className="error-page">
        <h1>Looks like you're offline</h1>
        <p>Please check your internet connection and try again.</p>
      </div>
    );
  }

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setFilteredList(
      restaurantList.filter((res) =>
        res.info.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-bar-container">
        <div className="search-input-wrapper">
          <i className="ri-search-line search-icon"></i>
          <input
            className="search-bar"
            type="text"
            placeholder="Search for restaurants and food..."
            value={searchQuery}
            onChange={handleSearch}
          />
          {searchQuery && (
            <button
              className="clear-search-btn"
              onClick={() => {
                setSearchQuery("");
                setFilteredList(restaurantList);
              }}
            >
              <i className="ri-close-line"></i>
            </button>
          )}
        </div>
      </div>

      {filteredList.length === 0 && searchQuery ? (
        <div className="no-results">
          <i className="ri-search-line"></i>
          <h3>No restaurants found</h3>
          <p>Try searching with a different keyword</p>
        </div>
      ) : (
        <div className="body-cards">
          {filteredList.map((restaurant) => (
            <Link
              to={"./restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              {restaurant?.info?.veg ? (
                <RestaurantCardVeg resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;

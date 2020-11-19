import React from 'react';
import './restaurantContainer.css';
import { SearchForm } from '../../components/SearchFrom/searchForm';
import { RestaurantCard } from '../../components/RestaurantCard/restaurantCard';
import { apiKey } from '../../apiKey';

interface IndividualRestaurantData {
  name: string,
  city: string,
  state: string,
  telephone: string,
  genre: string,
}

interface RestaurantContainerProps {
  restaurants: Array<IndividualRestaurantData> 
}

export const RestaurantContainer: React.FC<RestaurantContainerProps> = (props) => {
  
  const alphabatizeRestaurants = (restaurantsToSort:Array<IndividualRestaurantData> ) => {
    return restaurantsToSort.sort((a:any, b:any) => a.name > b.name ? 1 : -1);
  }


  const displayRestaurants = () => {
    const sortedRestaurants = alphabatizeRestaurants(props.restaurants)
    return sortedRestaurants.map((restaurant:any) => {
      return(
        <RestaurantCard 
          name={restaurant.name}
          city={restaurant.city}
          state={restaurant.state}
          telephone={restaurant.telephone}
          genre={restaurant.genre}
        />
      )
    })
  }

    return(
      <div>
        <SearchForm />
        {displayRestaurants()}
      </div>
    )
}


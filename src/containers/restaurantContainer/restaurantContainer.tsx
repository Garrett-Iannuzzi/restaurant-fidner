import React, { useState } from 'react';
import './restaurantContainer.css';
import { SearchForm } from '../../components/SearchFrom/searchForm';
import { RestaurantCard } from '../../components/RestaurantCard/restaurantCard';
import { apiKey } from '../../apiKey';

interface IndividualRestaurantData {
  id: string,
  name: string,
  city: string,
  state: string,
  telephone: string,
  genre: string,
}

interface RestaurantContainerProps {
  allRestaurants: Array<IndividualRestaurantData> 
}

export const RestaurantContainer: React.FC<RestaurantContainerProps> = ({ allRestaurants }) => {

  const [ selectedRestaurants, selectRestaurants ] = useState([]);
  const [ selectedPage, selectPage ] = useState(1);



  const alphabatizeRestaurants = (restaurantsToSort:Array<IndividualRestaurantData>) => {
    return restaurantsToSort.sort((a:any, b:any) => a.name > b.name ? 1 : -1);
  };

  const paginateRestaurants = (selectedRestaurants:Array<IndividualRestaurantData>) => {
    const startingPage = selectedPage * 10;
    const endingPage = startingPage + 10;
    
    return selectedRestaurants.slice(startingPage, endingPage)
  }

  const filterByState = (stateSelection:string) => {
    if (!selectedRestaurants) {
      return allRestaurants.filter((resturant:any) => {
        return resturant.state === stateSelection
      })
    } else {
      return selectedRestaurants.filter((resturant:any) => {
        return resturant.state === stateSelection
      })
    }
  }


  const displayRestaurants = (restaurantsToSort:Array<IndividualRestaurantData>) => {
    const sortedRestaurants = alphabatizeRestaurants(restaurantsToSort)
    // const sortedRestaurantsByPage = paginateRestaurants(restaurantsToSort)

    return sortedRestaurants.map((restaurant:any) => {
      return(
        <RestaurantCard
          key={restaurant.id} 
          name={restaurant.name}
          city={restaurant.city}
          state={restaurant.state}
          telephone={restaurant.telephone}
          genre={restaurant.genre}
        />
      )
    })
  };

    return(
      <div className="restaurant-container">
        <SearchForm
          allRestaurants={allRestaurants}
        />
        {console.log(selectedPage)}
        <div className="restaurant-cards-div">
          { !selectedRestaurants ? displayRestaurants(selectedRestaurants) : displayRestaurants(allRestaurants) }
        </div>
      </div>
    )
}


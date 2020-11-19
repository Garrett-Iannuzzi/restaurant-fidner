import React from 'react';
import './searchForm.css';
import { RestaurantCard } from '../RestaurantCard/restaurantCard';


interface IndividualRestaurantData {
  id: string,
  name: string,
  city: string,
  state: string,
  telephone: string,
  genre: string,
}

interface SearchFormProps {
  allRestaurants: Array<IndividualRestaurantData>
}

export const SearchForm: React.FC<SearchFormProps> = ({ allRestaurants }) => {

  const displayStateSelections = () => {
    return allRestaurants.map((restaurant: any) => {
      return (
        <label>
          <input type="radio" value={restaurant.state} checked={false} />
          {restaurant.state}
        </label>
      )
    })
  }


return (
  <form className="search-form">
    <label>Search by state:</label>
    <div className="state-radio-button-list">
      {displayStateSelections()}
    </div>
    <button>Filter Search</button>
  </form>
)
}
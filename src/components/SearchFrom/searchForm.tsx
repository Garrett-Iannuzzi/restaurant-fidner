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

  const displayStateSelectionOptions = () => {
    return allRestaurants.map((restaurant: any) => {
      return (
        <label>
          <input type="radio" value={restaurant.state} checked={false} />
          {restaurant.state}
        </label>
      )
    })
  }

  const getGenreSelectionOptions = () => {
    const allGenreTypes:Array<string> = [];
    const sortedGenreTypes:Array<string> = [];

    allRestaurants.map((resturant:any) => {
      allGenreTypes.push(resturant.genre.split(','))
    })

    allGenreTypes.flat().map((restaurant:any) => {
      if (sortedGenreTypes.includes(restaurant)) {
        return
      }
      sortedGenreTypes.push(restaurant)
    })
    return sortedGenreTypes
  }

  const displayGenreTypes = () => {
    const genreList = getGenreSelectionOptions()
    return genreList.map((genre:any) => {
      return(
        <label>
          <input type="radio" value={genre.genre} checked={false} />
          {genre}
        </label>
      )
    })
  }


return (
  <form className="search-form">
    <label>Search by state:</label>
    <div className="state-radio-button-list">
      {displayStateSelectionOptions()}
    </div>
    <label>Search by genre:</label>
    <div className="state-radio-button-list">
      {displayGenreTypes()}
    </div>
    <button>Filter Search</button>
  </form>
)
}
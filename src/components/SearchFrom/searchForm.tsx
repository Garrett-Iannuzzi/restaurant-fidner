import React, { useState } from 'react';
import './searchForm.css';

interface IndividualRestaurantData {
  id: string,
  name: string,
  city: string,
  state: string,
  telephone: string,
  genre: string,
}

interface SearchFormProps {
  allRestaurants: Array<IndividualRestaurantData>,
  filterByLocation: (arg0: string) => void,
}

export const SearchForm: React.FC<SearchFormProps> = ({ allRestaurants, filterByLocation }) => {
  const [selectedLocation, selectLocation] = useState('')
  const [selectedGenre, selectGenre] = useState('')


  const handleLocationChange = (e: any) => {
    console.log(e.target.value)
    filterByLocation(e.target.value)
    selectLocation(e.target.value)
  }

  // const handleGenreChange = (e: any) => {
  //   console.log(e.target.value)
  //   filterByLocation(e.target.value)
  //   selectLocation(e.target.value)
  // }

  const displayStateSelectionOptions = () => {
    const statesToDisplay:Array<string> = []
    const sortedSelectionss = allRestaurants.sort((a: any, b: any) => a.state > b.state ? 1 : -1)
    const removeRepeatStates = sortedSelectionss.filter((resturant:any) => {
      if (statesToDisplay.includes(resturant.state)) {
        return
      } else {
        return statesToDisplay.push(resturant.state)
      }
    })
    return removeRepeatStates.map((restaurant: any) => {
      return (
        <label>
          <input
            key={restaurant.state}
            type="radio"
            value={restaurant.state}
            onChange={handleLocationChange}
            checked={selectedLocation === restaurant.state ? true : false}
          />
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
    return sortedGenreTypes.sort()
  }

  const displayGenreTypes = () => {
    const genreList = getGenreSelectionOptions()
    return genreList.map((genre:any) => {
      return(
        <label>
          <input 
            type="radio" 
            value={genre.genre} 
            checked={false} 
          />
          {genre}
        </label>
      )
    })
  }


  return (
    <form className="search-form">
      <label>Search our resturants by state:</label>
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
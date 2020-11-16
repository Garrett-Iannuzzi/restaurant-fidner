import React, { useEffect, useState } from 'react';
import './App.css';
import { apiKey } from '../../apiKey';
import RestaurantContainer from '../../containers/restaurantContainer/restaurantContainer';
import { SearchForm } from '../SearchFrom/searchForm';
 

const requestHeader: any = {
  "Content-Type": "application/json",
  "Authorization": apiKey
}

const App: React.FC = () => {
  const [ restaurants, getRestaurants ] = useState<any>([]);

  useEffect(() => {
    fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
      headers: requestHeader
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(data => getRestaurants(data))
  })

  return (
    <div className="App">
      <h1>Restaurant Finder</h1>
      <SearchForm />
      <RestaurantContainer />
    </div>
  );
}

export default App;

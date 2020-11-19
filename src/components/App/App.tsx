import React, { useEffect, useState } from 'react';
import './App.css';
import { apiKey } from '../../apiKey';
import { RestaurantContainer } from '../../containers/restaurantContainer/restaurantContainer';

const requestHeader: any = {
  "Content-Type": "application/json",
  "Authorization": apiKey
}

const App: React.FC = () => {
  const [restaurants, getRestaurants] = useState([]);
  
  useEffect(() => {
    fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
      headers: requestHeader
    })
    .then(response => response.json())
    .then(data => getRestaurants(data))
  }, [])

  return (
    <div className="App">
      <h1>Restaurant Finder</h1>
      <RestaurantContainer
        allRestaurants={restaurants}
      />
    </div>
  );
}

export default App;

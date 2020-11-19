import React from 'react';
import './restaurantCard.css';

interface RestaurantCardProps {
  name: string,
  city: string,
  state: string,
  telephone: string,
  genre: string,
}

export const RestaurantCard: React.FC<RestaurantCardProps> = (props) => {
  return (
    <div className="restaurant-card">
      <h2>{props.name}</h2>
      <h3>{props.city}, {props.state}</h3>
      <h4>{props.telephone}</h4>
      <h4>Genre:</h4>
      <ul>
        <li>{props.genre}</li>
      </ul>
    </div>
  )
}
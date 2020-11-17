import React from 'react'
import './restaurantContainer.css'

interface RestaurantContainerProps {
  restaurants: Array<object>
}

export const RestaurantContainer: React.FC<RestaurantContainerProps> = (props) => {
  console.log(props.restaurants)
    return(
      <div>
        restaurantContainer
      </div>
    )
}


import React from 'react';
import './searchForm.css';

export const SearchForm: React.FC = () => {
  return(
    <form>
      <input type="text"/>
      <input type="text"/>
      <button>Filter Search</button>
    </form>
  )
}
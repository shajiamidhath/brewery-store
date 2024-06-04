import React, { useState, useContext } from 'react';
import { BreweryContext } from '../context/BreweryContext';
import BreweryList from './BreweryList';

const Search = () => {
  const { searchBreweries, breweries } = useContext(BreweryContext);
  const [query, setQuery] = useState({ by_city: '', by_name: '', by_type: '' });

  const onChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchBreweries(new URLSearchParams(query).toString());
  };

  return (
    <div>
      <h2>Search Breweries</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="by_city" placeholder="City" onChange={onChange} />
        <input type="text" name="by_name" placeholder="Name" onChange={onChange} />
        <input type="text" name="by_type" placeholder="Type" onChange={onChange} />
        <button type="submit">Search</button>
      </form>
      <BreweryList breweries={breweries} />
    </div>
  );
};

export default Search;

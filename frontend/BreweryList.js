import React from 'react';
import { Link } from 'react-router-dom';

const BreweryList = ({ breweries }) => {
  return (
    <div>
      {breweries.map((brewery) => (
        <div key={brewery.id}>
          <h3><Link to={`/brewery/${brewery.id}`}>{brewery.name}</Link></h3>
          <p>{brewery.city}, {brewery.state}</p>
          <p>{brewery.phone}</p>
          <p><a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a></p>
        </div>
      ))}
    </div>
  );
};

export default BreweryList;

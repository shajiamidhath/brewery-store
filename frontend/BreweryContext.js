import { createContext, useState } from 'react';
import axios from 'axios';

const BreweryContext = createContext();

const BreweryProvider = ({ children }) => {
  const [breweries, setBreweries] = useState([]);
  const [brewery, setBrewery] = useState(null);
  const [reviews, setReviews] = useState([]);

  const searchBreweries = async (query) => {
    const res = await axios.get(`/api/breweries/search?${query}`);
    setBreweries(res.data);
  };

  const getBreweryDetails = async (id) => {
    const res = await axios.get(`/api/breweries/${id}`);
    setBrewery(res.data);
  };

  const getReviews = async (breweryId) => {
    const res = await axios.get(`/api/reviews/${breweryId}`);
    setReviews(res.data);
  };

  const addReview = async (reviewData) => {
    const res = await axios.post('/api/reviews', reviewData, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    });
    setReviews([...reviews, res.data]);
  };

  return (
    <BreweryContext.Provider value={{ breweries, brewery, reviews, searchBreweries, getBreweryDetails, getReviews, addReview }}>
      {children}
    </BreweryContext.Provider>
  );
};

export { BreweryContext, BreweryProvider };

import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BreweryContext } from '../context/BreweryContext';
import { AuthContext } from '../context/AuthContext';

const BreweryDetails = () => {
  const { id } = useParams();
  const { brewery, getBreweryDetails, reviews, getReviews, addReview } = useContext(BreweryContext);
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  useEffect(() => {
    getBreweryDetails(id);
    getReviews(id);
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    addReview({ breweryId: id, rating, description });
  };

  return (
    <div>
      {brewery && (
        <div>
          <h2>{brewery.name}</h2>
          <p>{brewery.city}, {brewery.state}</p>
          <p>{brewery.phone}</p>
          <p><a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a></p>
        </div>
      )}
      <div>
        <h3>Reviews</h3>
        {reviews.map((review) => (
          <div key={review._id}>
            <p>{review.userId.name}: {review.rating}/5</p>
            <p>{review.description}</p>
          </div>
        ))}
      </div>
      {user && (
        <div>
          <h3>Add Review</h3>
          <form onSubmit={onSubmit}>
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="0">Select Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BreweryDetails;

import React from 'react';
import '../../styles/reviews/star-rating.css';

export default function StarRating({ stars }) {
  const emptyStars = [];
  const fullStars = [];
 
  const createFullStars = (stars) => {
    for (let i = 0; i < stars; i++) {
      fullStars.push(i);
    }
  };

  const createEmptyStars = (stars) => {
    let emptyCount = 5 - stars;
    if (!emptyCount) return;
    for (let j = 0; j < emptyCount; j++) {
      emptyStars.push(j);
    }
  };

  createFullStars(stars);
  createEmptyStars(stars);

  return (
  <div className='star-rating-container'>
    {fullStars.map(star => <i className="las la-star" key={star}></i>)}
    {emptyStars.map(star => <i className="lar la-star" key={fullStars.length + star}></i>)} 
  </div>
  );
}

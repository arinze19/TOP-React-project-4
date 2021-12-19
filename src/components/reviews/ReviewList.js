import React from 'react';
import ReviewItem from './ReviewItem';
import '../../styles/reviews/review-list.css';

export default function ReviewList({ comments }) {
  return (
    <>
      <h2 style={{textAlign: 'center', margin: '2rem'}}>Here's what some our enantiomers have to say</h2>
      <br />
      <br />
      <ul className='review-list-container'>
        {comments.map((comment, index) => (
          <ReviewItem key={index} comment={comment} />
        ))}
      </ul>
    </>
  );
}

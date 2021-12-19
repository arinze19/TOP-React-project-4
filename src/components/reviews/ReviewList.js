import React from 'react';
import ReviewItem from './ReviewItem';
import '../../styles/reviews/review-list.css';

export default function ReviewList({ comments }) {
  return (
    <ul className='review-list-container'>
      {comments.map((comment, index) => (
        <ReviewItem key={index} comment={comment} />
      ))}
    </ul>
  );
}

import React from 'react';
import '../../styles/reviews/review-item.css';
import StarRating from '../reviews/StarRating';

export default function ReviewItem({ comment }) {
  return (
    <li className='review-item-container'>
      <p className='review-item__name'>
        <strong>{comment.user.name}</strong>
      </p>
      <div className='review-item__main'>
        <p className='review-item__main__remark'>
          <strong>{comment.remark}</strong>
        </p>
        <p className='review-item__main__comment'>
          {comment.comment}
        </p>
      </div>
      <StarRating stars={comment.star}/>
    </li>
  );
}

import React, { useContext } from "react";
import Rating from "../ratings/Rating";

export default function ChllengeListItem({ challenge, addRemoveRating }) {
  return (
    <div
      className='card p-5 my-2'
      style={{ overflow: "hidden" }}
      key={challenge.id}
    >
      <Rating
        rating={challenge.rating}
        addRemoveRating={addRemoveRating}
        id={challenge.id}
      ></Rating>
      <h6 className='text-muted'>
        {new Date(parseInt(challenge.registered)).toDateString()}
      </h6>
      <h3 className='card-title text-uppercase'>{challenge.title}</h3>
      <div>
        {challenge.tags.map((tag, index) => (
          <span
            key={index}
            className='badge rounded-pill text-bg-info mx-1 border-dark bg-opacity-50'
          >
            {tag}
          </span>
        ))}
      </div>
      <p className='card-text'>{challenge.description}</p>
    </div>
  );
}

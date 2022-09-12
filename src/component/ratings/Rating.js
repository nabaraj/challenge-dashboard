import React from "react";
import "./rating.scss";
export default function Rating({ rating, addRemoveRating, id }) {
  const ratingBg = rating > 0 ? "bg-info" : "bg-danger";
  return (
    <div
      className={`rating ${ratingBg} text-black position-absolute top-0 end-0 d-flex p-1 bg-opacity-50 shadow-sm`}
    >
      <button
        className='btn btn-sm btn-outline-dark'
        onClick={() => addRemoveRating("up", id)}
      >
        <i className='bi bi-hand-thumbs-up'></i>
      </button>
      <span className='align-middle fs-5 px-2 fw-bold'>
        {rating ? rating : 0}
      </span>

      <button
        className='btn btn-sm btn-outline-dark'
        onClick={() => addRemoveRating("down", id)}
      >
        <i className='bi bi-hand-thumbs-down' />
      </button>
    </div>
  );
}

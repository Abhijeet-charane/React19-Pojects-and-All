
import styled from "styled-components"

// import React from 'react';

export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;
  
  // Define dynamic styles based on rating
  // const btn_style = {
    const ButtonThapa = styled.button ({
      padding: "1.2rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: rating >= 8.5 ?  "#7dcea0" : "#f7dc6f", // Background color logic based on rating
    color: "var(--btn-hover-bg-color)",
    fontWeight: "bold",
    cursor: "pointer"

    });
    
  

  // Determine class for rating
  const ratingClass = rating >= 8.5 ? "super_hit" : "average";
  
  return (
    <li className="card">
      <div>
        <img src={img_url} width="40%" height="40%" alt={name} />
      </div>
      {/* <div className="card-content"> */}
      <div className="flex flex-col gap-6 py-6 px-6">
        <h2>Name: {name}</h2>
        <h3>
          Rating: <span className={`rating ${ratingClass}`}>{rating}</span>
        </h3>
        <p className="text-3xl font-bold underline">Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          {/* <button style={btn_style}>Watch Now</button> */}
          <ButtonThapa>Watch Now</ButtonThapa>
        </a>
      </div>
    </li>
  );
};

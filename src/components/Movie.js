import React from "react";

import { BASE_URL, W_500, APIKey } from "../store";
import "./css/Movie.css";

function Movie({ movie, setCurrentMovie }) {
  const handleClick = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${APIKey}&language=vi-VN`;
    const response = await fetch(apiUrl).then((res) => res.json());
    setCurrentMovie(response);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div title={movie.title} className="movie__card" onClick={handleClick}>
        <div className="poster__wrapper" data-date={movie.release_date}>
          <img
            src={
              movie.poster_path === null
                ? require("../assets/not_found_img.jpg")
                : `${BASE_URL}${W_500}${movie.poster_path}`
            }
            alt="Poster"
          />
          <div className="movie__title">
            <p>{movie.title}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;

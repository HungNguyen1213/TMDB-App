import React, { useState } from "react";

import MovieDetail from "./MovieDetail";
import ListMovies from "./ListMovies";

function SearchResult() {
  const [currentMovie, setCurrentMovie] = useState();

  return (
    <>
      <div className="container">
        {currentMovie && (
          <MovieDetail
            currentMovie={currentMovie}
            setCurrentMovie={setCurrentMovie}
          />
        )}
        <ListMovies setCurrentMovie={setCurrentMovie} />
      </div>
    </>
  );
}

export default SearchResult;

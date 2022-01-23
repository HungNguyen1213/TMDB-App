import React from "react";

import MovieDetail from "./MovieDetail";
import ListMovies from "./ListMovies";
import { useStore } from "../store";

function SearchResult() {
  const { currentMovie } = useStore();

  return (
    <>
      <div className="container">
        {currentMovie && <MovieDetail />}
        <ListMovies />
      </div>
    </>
  );
}

export default SearchResult;

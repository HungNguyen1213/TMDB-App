import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { useStore, APIKey } from "../store";
import Movie from "./Movie";
import "./css/ListMovies.css";

function ListMovies() {
  const params = new URLSearchParams(useLocation().search);
  const keySearch = params.get("key");
  const {
    movies,
    setMovies,
    totalPages,
    setTotalPages,
    setCurrentPage,
    currentPage,
    setCurrentMovie,
  } = useStore();
  const listMovieElement = useRef();

  useEffect(() => {
    const searchMovies = async () => {
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=vi-VN&query=${keySearch}&page=${currentPage}&include_adult=false`;
      const response = await fetch(apiUrl).then((res) => res.json());
      setMovies(response.results);
      setTotalPages(response.total_pages);
    };
    searchMovies();
  }, [keySearch, currentPage, setMovies, setTotalPages]);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
    setCurrentMovie(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
    setCurrentMovie(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const isRenderPagination = () => {
    return totalPages >= 1;
  };

  return (
    <>
      <div ref={listMovieElement} className="list_movies">
        {movies &&
          movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>
      {isRenderPagination() && (
        <div className="pagination">
          <ul>
            <li>
              <button
                className={currentPage === 1 ? "disable" : ""}
                disabled={currentPage === 1}
                type="button"
                onClick={handlePrevPage}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
            </li>
            <li>
              <button className="disable" type="button" disabled>
                {currentPage}
              </button>
            </li>
            <li>
              <button
                className={currentPage === totalPages ? "disable" : ""}
                disabled={currentPage === totalPages}
                type="button"
                onClick={handleNextPage}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </li>
          </ul>
        </div>
      )}
      {totalPages === 0 && <p>Không tìm thấy...</p>}
    </>
  );
}

export default ListMovies;

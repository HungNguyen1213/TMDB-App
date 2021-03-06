import { createContext, useState } from "react";

export const Context = createContext();

const StoreProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMovie, setCurrentMovie] = useState();
  const state = {
    movies,
    totalPages,
    setMovies,
    setTotalPages,
    currentPage,
    setCurrentPage,
    currentMovie,
    setCurrentMovie,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};
export default StoreProvider;

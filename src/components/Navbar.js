import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useStore } from "../store";
import "./css/Navbar.css";

function Navbar() {
  const params = new URLSearchParams(useLocation().search);
  const [keySearch, setKeySearch] = useState(params.get("key") || "");
  const { setCurrentPage } = useStore();

  const handleClick = () => {
    setCurrentPage(1);
    window.scroll(0, 0);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo">
            <img src="/images/logo.png" alt="Logo" />
            <p>TMDB</p>
          </div>
          <div className="navbar__control">
            <input
              value={keySearch}
              type="text"
              placeholder="Nhập tên phim"
              onChange={(e) => setKeySearch(e.target.value)}
            />
            <Link onClick={handleClick} to={`search?key=${keySearch}`}>
              <i className="fas fa-search"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

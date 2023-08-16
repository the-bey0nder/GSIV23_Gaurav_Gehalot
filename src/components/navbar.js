import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../store/actions/searchActions";
import { Link } from "react-router-dom";


//navbar 
const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const handleHome = () => {
    window.location.reload()
  };

  const handleSearch = () => {
    dispatch(setSearchValue(searchInput));
  };

  return (
    <nav>
      <div className="navbar">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <span className="material-icons search-icon">search</span>
        </div>
        <Link to="/" onClick={handleHome}>
          <span className="material-icons">home</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

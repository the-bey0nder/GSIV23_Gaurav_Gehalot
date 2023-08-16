import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchValue } from "../store/actions/searchActions";

//movie details are displayed when a card is clicked
const MovieDetails = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("key")));
  const [imgUrl, setImgUrl] = useState("");
  const dispatch = useDispatch();
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const getDate = () => {
    const dateString = data.release_date;
    const date = new Date(dateString);
    const year = date.getFullYear();
    return year;
  };

  const handleHome = () => {
    dispatch(setSearchValue(""));
  };

  useEffect(() => {
    setImgUrl(IMG_URL + data.poster_path);
  }, [data]);

  return (
    <>
      {" "}
      <nav>
        <div className="navbar">
          <span className="nav-span">
            <Link to="/">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <strong>Movie Details</strong>
          </span>

          <Link to="/" onClick={handleHome}>
            <span className="material-icons">home</span>
          </Link>
        </div>
      </nav>
      {data ? (
        <div className="container">
          <div className="horizontal-movie-card">
            <div className="horizontal-movie-image">
              <img src={imgUrl} alt={data.title} />
            </div>
            <div className="horizontal-movie-details">
              <div className="horizontal-movie-title">
                {data.title}{" "}
                <span className="horizontal-movie-rating">
                  ({data.vote_average})
                </span>
              </div>
              <div className="horizontal-movie-production">
                {getDate()} | Length | Director
              </div>
              <div className="horizontal-movie-cast">
                Cast : Actor 1, Actor 2, ...
              </div>
              <div className="horizontal-movie-description">
                Description: {data.overview}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Sorry the requested details cannot be loaded</h2>
        </div>
      )}
    </>
  );
};

export default MovieDetails;

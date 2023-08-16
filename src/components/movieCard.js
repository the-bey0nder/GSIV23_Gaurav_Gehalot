import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//card component
const MovieCard = (props) => {
  const [data, setData] = useState(props.data);
  const [imgUrl, setImgUrl] = useState("");
  const [showFullDescription, setShowFullDescription] = useState(false);

  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const sayHello = () => {
    localStorage.setItem("key", JSON.stringify(data));
  };

  const handleError = (e) => {
    if (data.backdrop_path) e.target.src = IMG_URL + data.backdrop_path;
  };

  useEffect(() => {
    if (data.poster_path) setImgUrl(IMG_URL + data.poster_path);
  }, []);

  return (
    <div className="movie-card">
      <Link to="/movieDetails" onClick={sayHello}>
        <img
          className="movie-image"
          src={imgUrl}
          alt={data.title}
          onError={handleError}
        />
      </Link>
      <div className="movie-details">
        <div className="movie-title">{data.title}</div>
        <div className="movie-rating">{data.vote_average}</div>
      </div>
      <div className="movie-description">
        {showFullDescription ? (
          <p>{data.overview}</p>
        ) : (
          <p>{data.overview.slice(0, 70)}...</p>
        )}
        <span className="show-more-link" onClick={toggleDescription}>
          {showFullDescription ? "Show Less" : "Show More"}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;

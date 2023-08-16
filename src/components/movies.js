import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import MovieList from "./movieList";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";

//main component responsible for fetching the movies
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const searchValue = useSelector((state) => state.search.searchValue);
  const API_KEY = "acb1af9f8d5d6102bc35d838ac27127f";

  const check = () => {
    if (movies.length <= 100) {
      return true;
    } else {
      return false;
    }
  };

  const setDefault = () => {
    try {
      axios
        .get(`https://api.themoviedb.org/3/movie/upcoming?page=${page}`, {
          params: {
            api_key: API_KEY,
          },
        })
        .then((res) => res.data)
        .then((data) => {
          setMovies((prev) => [...prev, ...data.results]);
          setPage((prev) => prev + 1);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const setSearched = () => {
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`,
          {
            params: {
              api_key: API_KEY,
            },
          }
        )
        .then((res) => res.data)
        .then((data) => {
          setMovies(data.results);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (searchValue !== "") {
      setSearched();
    } else {
      setDefault();
    }
  }, [searchValue]);
  return (
    <div>
      <Navbar />
      <div className="content">
        <InfiniteScroll
          dataLength={movies.length}
          next={searchValue !== "" ? setSearched : setDefault}
          hasMore={check()}
          loader={<p className="message">Loading...</p>}
          endMessage={<p className="message">No more data to load.</p>}
        >
          <MovieList movies={movies} />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Movies;

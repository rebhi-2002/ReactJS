import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination";

import { useSelector, useDispatch } from "react-redux";
import { getAllMovie } from "../redux/actions/movieAction";

const MoviesList = (/* { movies, getPage, pageCount } */) => {
  const [movies, setMovies] = useState([]);

  // 5. Change Data In Reducer With Dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovie());
  }, []);

  // 4. Access Data From Store Reducer With useSelector
  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <Row className="mt-3">
      {/*
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      */}

      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })
      ) : (
        <h2 className="text-center p-5 font">لا يوجد أفلام...</h2> // Make Component: NoFoundData.js <NoFoundData />
      )}

      {movies.length >= 1 ? (
        <PaginationComponent /* getPage={getPage} pageCount={pageCount} */ />
      ) : null}
    </Row>
  );
};

export default MoviesList;

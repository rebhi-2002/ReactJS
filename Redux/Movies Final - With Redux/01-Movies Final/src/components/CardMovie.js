import React from "react";
import { Col, Button } from "react-bootstrap";

import { Link } from "react-router-dom"; // Anchors in HTML: <a href=""></a>

const CardMovie = ({ movie }) => {
  return (
    /* // ** Static Data **
      <Col xs="6" sm="6" md="4" lg="3" className="my-1">
        <div className="card">
          <img src="man.jpeg" className="card-image" alt="man-img" />
          <div className="card-overlay">
            <div className="overlay-text text-center w-100 p-2">
              <p>اسم الفيلم: cast away</p>
              <p>تاريخ الاصدار: 10-2-1995</p>
              <p>النوع: انيمشن</p>
              <p>التقييم: 8.2</p>
            </div>
          </div>
        </div>
      </Col>
    */

    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${movie.id}`}>
        <div className="card">
          <img
            // src={movie.poster_path}
            src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
            // src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            className="card-image"
            alt="poster_movie"
          />
          <div className="card-overlay">
            <div className="overlay-text text-center w-100 p-2">
              <p>اسم الفيلم: {movie.title}</p>
              <p>اسم الفيلم الأصلي: {movie.original_title}</p>
              <p>تاريخ الاصدار: {movie.release_date}</p>
              <p>عدد المقيمين: {movie.vote_count}</p>
              <p>التقييم: {movie.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovie;

import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

// useParams: react-router-dom موجودة في مكتبة [Hook <= use أي حاجة بتبدأ ب] Hook عبارة عن
// **useParams**: URL الموجودة في عنوان ال parameters بتخليني أقدر آخذ ال

import axios from "axios";

const MovieDetails = () => {
  const param = useParams(); // useParams
  // هينا url مبعوت إلي في ال parameters بيخزن أي

  console.log(param); // [http://localhost:3000/movie/******] => [{id: '******'}] => [\src\App.js: <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />]
  console.log(param.id); // ******

  const [movie, setMovie] = useState([]); // useState

  // Get Movie By Details
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`
    ); // * https://api.themoviedb.org/3/movie/{movie_id}?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US
    setMovie(res.data); // useEffect إنشائه ف هستخدم ال component عاوز أنفذها من أول ما يتم ال
    // console.log(res.data.results);
  };

  useEffect(() => {
    getMovieDetails();
  }, []); // []: عاوزه يتنفذ أول مرة فقط

  return (
    <div className="pb-4">
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-detalis d-flex align-items-center">
            <img
              className="img-movie"
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt="poster_image"
            />
            <div className="justify-content-center text-center mx-auto">
              <p className="card-text-details border-bottom">
                إسم الفيلم: <span className="fw-normal">{movie.title}</span>
                <br />
                إسم الفيلم الأصلي:{" "}
                <span className="fw-normal">{movie.original_title}</span>
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الفيلم:{" "}
                <span className="fw-normal">{movie.release_date}</span>
              </p>
              <p className="card-text-details border-bottom">
                عدد المقيمين:{" "}
                <span className="fw-normal">{movie.vote_count}</span>
              </p>
              <p className="card-text-details border-bottom">
                التقييم: <span className="fw-normal">{movie.vote_average}</span>
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom">القصة:</p>
            </div>
            <div className="text-end px-2">
              {/* <p className="card-text-story">قصة الفيلم</p> */}
              <p className="card-text-story">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center"
        >
          <Link to="/">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2 my-3 px-4 py-2 fs-5 rounded-3 custom-btn"
            >
              عودة للرئيسية
            </button>
          </Link>

          {/* <Link to={movie.homepage}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2 my-3 px-4 py-2 fs-5 rounded-3 custom-btn"
            >
              مشاهدة الفيلم
            </button>
          </Link> */}

          <a href={movie.homepage} target="_blank" rel="noreferrer">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2 my-3 px-4 py-2 fs-5 rounded-3 custom-btn"
            >
              مشاهدة الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;

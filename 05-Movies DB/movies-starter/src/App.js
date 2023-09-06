import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";

import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom"; // Switch => Routes

import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  // Get All Movies by Axios
  const getAllMovies = async () => {
    // React\01-FirstProject\firsttest\src\component\FetchAxios.js
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar" // &page=1
    ); // * EN: "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US&page=1"

    console.log(response); // {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}
    // - [status: 200,] => success يعني => https://developer.themoviedb.org/docs/errors
    // - results: (20) [{...}, {...}, ... {...}] => هيجيب لي الأفلام كلها data.results ف أنا هقله results كبيرة، دي بقى الأفلام بتاعتي ال array عبارة عن
    // - يعني عدد الصفحات كلها [total_pages: 500] وعندي ال
    // data.pages ف أنا لو عايز رقم الصفحة بقله
    // - يعني عدد الأفلام كلها [total_results: 1000] وعندي ال
    // ** كل صفحة فيها 20 فيلم وعدد الصفحات عندي 500 يعني 20*500=1000 فيلم **

    // console.log(response.data.results);
    setMovies(response.data.results);
    // console.log(movies); // إنحطت في مكانها state على شان تكون ال getAllMovies(); هتكون فاضية على شان المفروض أحطها بعد إستدعاء الدالة

    // setPageCount(response.data.total_pages);

    // "total_pages": 39876, "total_results": 797516
    // {"errors":["page must be less than or equal to 500"],"success":false}

    setPageCount(500);
  };

  // Get Current Page
  const getPage = async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`
    );
    setMovies(response.data.results);
    // setPageCount(response.data.total_pages);
    setPageCount(500);
  };

  useEffect(() => {
    getAllMovies();
    // console.log(movies);
  }, []); // يشتغل component على شان بدي الدالة تتنفذ أول ما ال

  // To Search in API
  //* https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=String&language=en-US&page=1&include_adult=false
  const search = async (word) => {
    if (word === "") {
      getAllMovies(); //* لو الكلمة يلي المستخدم ببحث عنها فاضية، بمعنى كدا عاوز يجيب كل الأفلام ال 20 ، ف بستدعي الدالة يلي بتجيب لي كل الأفلام
    } else {
      //* عندي query لو مش فاضية، هروح أعمل
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
      );
      setMovies(response.data.results);
      setPageCount(response.data.total_pages);
    }
  };

  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  pageCount={pageCount}
                />
              }
            />
            <Route
              path="/movie/:id" // uniqueID
              // [\src\components\CardMovie.js] في ال [<Link to={`/movie/${movie.id}`}>] لازم يكون نفس [path="/movie/:id"]
              element={<MovieDetails movies={movies} />}
            />
            {/* :id متغير يعني مرة 1 ومرة 10 ومرة... ف أنا عاوزه يبقى متغير، ف لازم أحط قبله نقطتين id ال */}
            {/* "/movie/:id" إنو ده متغير هيجيلي بعدين routing على شان أعرف المنظومة بتاعت ال */}
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

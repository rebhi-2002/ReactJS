import { AllMOVIES, MovieAPI } from "../types/moviesType";

import axios from "axios";

// ================================================================

// export const getAllMovie = async () => {
//   const response = await axios.get(MovieAPI);

//   return {
//     type: AllMOVIES,
//     data: response.data.results, // data: [1, 2, 3, 10],
//     pages: response.data.total_pages, // pages: 0,
//   };
// };

// ================================================================

// export const getAllMovie = () => {
//   const response = axios.get(MovieAPI);
//   console.log(response.data);

//   return {
//     type: AllMOVIES,
//     data: response.data.results,
//     pages: response.data.total_pages,
//   };
// };

// ================================================================

// ** Higher-order function **
export const getAllMovie = () => {
  return async (dispatch) => {
    const response = await axios.get(MovieAPI);
    console.log(response.data);
    dispatch({
      type: AllMOVIES,
      data: response.data.results,
      pages: 500, // pages: response.data.total_pages,
    });
  };
};

export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
    ); // api_key=355f3cc55c1a5f8fb6f7b79d7541faea
    dispatch({
      type: AllMOVIES,
      data: response.data.results,
      pages: response.data.total_pages,
    });
  };
};

export const getPage = (page) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`
    ); // api_key=355f3cc55c1a5f8fb6f7b79d7541faea
    dispatch({
      type: AllMOVIES,
      data: response.data.results,
      pages: response.data.total_pages,
    });
  };
};

// export const getMovies = (url) => {
//   return async (dispatch) => {
//     const response = await axios.get(url);
//     dispatch({
//       type: AllMOVIES,
//       data: response.data.results,
//       pages: response.data.total_pages,
//     });
//   };
// };

// ================================================================

// * ERROR: Actions must be plain objects. Use custom middleware for async actions.
// * Middleware | Redux: https://redux.js.org/understanding/history-and-design/middleware

//* -----
// ،عادية Array وتبعتها كأنها ،API بتاعتك من ال data عاوز تجيب ال action وجاي بداخل ال ،API لما يكون عندك مشروع فيه
// ،قبلها عادي [1, 2, 3, 10] فيها array شفت لما أنا بعت
// مش هتفرق، ما قبلهاش، طيب ليه ؟ Fetch أو من Axios من API جاي إلي من ال Array طيب لما أجيت أبعتله
// بتاعتي، ما بتتنفذش في لحظتها API تيجي إلي من ال data على شان تتنفذ بتاخذ ممكن ثانية أو ثانيتين، لحد ما ال axios إحنا عارفين إنو ال
// [ProjectFolder\React\01-FirstProject\firsttest\src\component\FetchAxios.js] => {state.length > 0 ? state[0].title : "Loading..."}
// دي await axios.get(MovieAPI); <= async await ما بقبلش حته ال redux ف ال
// Reducer يروح لل Action ف بحطه قبل ما ال ،middleware ف هم عملو حل بديل إسمه
//* -----

//*                     How it Work with Middleware
//
//                                                 handle the action
//                                                 and change state
//         Action------- - - Middleware - - - -------➡ Reducer
//           ⬆                                             |
//           |                                             |
// dispatch  |                                             |
//           |                                             | store state
//           |                                             ⬇
//         View ⬅-------------------------------------- Store
//                      pass state to subscribed
//                             components
//

// async await دي هي عبارة عن حاجة فيها action ال Action أنا بنفذ View لما بضغط على ال
// cycle ويكمل بقية ال reducer ويروح بقى لل ،back-end في النص يستنى، يجيب إلي الداتا بتاعتي من ال middleware ف بروح أحط ال
//* -----
// async await يتعامل مع حته ال Redux على شان نخلي ال Middleware يعني كل الحكاية إنو أنا بحط حاجة في النص إسمها
// async بتاعتي ما ينفعش تكون action دي، يعني ال async await لكن لو أنا ببعت داتا تانية لو بزود واحد +1 ، بنقص واحد -1 ، بعمل أي حاجة غير ال

// * Action: [src\redux\actions\movieAction.js]
// * Middleware: [].
// * Reducer: [src\redux\reducer\movieReducer.js]

// PS D:\مجلد جديد\React\Redux\Movies Final> npm i redux-thunk

// * redux-thunk: async await بتخليني أعمل،أحط بديل لل
// - Middleware إنو أنا بستخدم ال redux على شان يفهم ال
// - ،action في ال api بإختصار شديد: معناه إنو أنا بدخل middleware ال
// - middleware بتاعتي يلي هي أنا بجيب الأفلام، بحط أفلام المهم إني بعمل action ال

// import { legacy_createStore as createStore, applyMiddleware } from "redux"; [src\redux\store\store.js]

// 1️⃣. npm i redux-thunk <= redux-thunk ف أول حاجة بعملها بروح أنزل ال
// 2️⃣. applyMiddleware وأقله import { legacy_createStore as createStore } from "redux"; بتاعي عند ال store: [src\redux\store\store.js] ثاني حاجة بروح عند ال
// 3️⃣. يلي عملته thunk أبعتلها ال export const store = createStore(moviesReducer, applyMiddleware()); دي applyMiddleware() وال

// * ده إزاي ؟ thunk طيب أجيب ال: => import thunk from "redux-thunk";

// - ،تغير error طبعا ال
// - ،راحت redux والأدوات بتاعت ال
// - مش وقتها دي الوقتي ،composeWithDevTools() لل remove لأنو أنا عملت

/*
 * ERROR:
  - Actions must be plain objects. Instead, the actual type was: 'Promise'. You may need to add
  - middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle
  - dispatching functions.See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and
  - https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.
*/

//* async await بعد حذف:

/*
 * ERROR:
  - Cannot read properties of undefined (reading 'results')
  - TypeError: Cannot read properties of undefined (reading 'results')
*/

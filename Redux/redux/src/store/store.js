// import { createStore } from "redux";
import { legacy_createStore as createStore } from "redux";

//* 2. create reducer to set state and change it
// const reducerCounter = (state, action) => {}

import { reducerCounter } from "../reducer/reducerCounter";

import { rootReducer } from "../reducer/rootReducer";

import { composeWithDevTools } from "redux-devtools-extension";

//* 1. create store

// export const storeCounter = createStore(reducerCounter);

export const storeCounter = createStore(rootReducer, composeWithDevTools());

/* // composeWithDevTools() => Extensions in Google Chrome:
 * ،دي ما بتفيدش المستخدم في حاجة
 * ،على شان أقدر أشوفه بعيني ،Browser بتاعي يتشاف على ال redux ولكن بتفيدني أنا كمبرمج إنو أنا بخلي ال
 * .بشيلها خالص، على شان محدش من الناس يشوفها Application بعملها وأنا ببرمج ولما أجي أطلع ال
 */

// -----

/* * import { createStore } from "redux";
 *
 * 'createStore' is deprecated.ts(6385)
 * index.d.ts(375, 4): The declaration was marked as deprecated here.
 * (alias) function createStore<S, A extends Action<any>, Ext, StateExt>(reducer: Reducer<S, A>, enhancer?: StoreEnhancer<Ext, StateExt>): Store<S & StateExt, A> & Ext (+1 overload)
 * import createStore

 * @deprecated
 * We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.

 * Redux Toolkit is our recommended approach for writing Redux logic today, including store setup, reducers, data fetching, and more.

 * For more details, please read this Redux docs page: https://redux.js.org/introduction/why-rtk-is-redux-today

 * configureStore from Redux Toolkit is an improved version of createStore that simplifies setup and helps avoid common bugs.

 * You should not be using the redux core package by itself today, except for learning purposes. The createStore method from the core redux package will not be removed, but we encourage all users to migrate to using Redux Toolkit for all Redux code.

 * If you want to use createStore without this visual deprecation warning, use the legacy_createStore import instead:

 * import { legacy_createStore as createStore} from 'redux'

 * No quick fixes available
 */

import { applyMiddleware, createStore, compose } from "redux";
import { save, load } from "redux-localstorage-simple";
import reducers from "../reducers";
import defaultState from "../defaultState";

if (localStorage.getItem("redux_localstorage_simple") === null) {
  localStorage.setItem(
    "redux_localstorage_simple",
    JSON.stringify(defaultState)
  );
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  load(),
  composeEnhancers(applyMiddleware(save()))
);

export default store;

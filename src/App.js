import React, { useReducer } from "react";
import "./App.scss";
import Search from "./components/Search";
import SingleQuery from "./components/SingleQuery";
import Find from "./components/Find";
const initialState = {
  loading: false,
  queries: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_QUERIES_FETCH":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_QUERIES_SUCCESS":
      return {
        ...state,
        loading: false,
        queries: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const search = searchValue => {
    dispatch({
      type: "SEARCH_QUERIES_FETCH"
    });
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${searchValue}&srlimit=10&origin=*`
    )
      .then(response => response.json())
      .then(response => {
        if (response.query.search) {
          dispatch({
            type: "SEARCH_QUERIES_SUCCESS",
            payload: response.query.search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: response.Error
          });
        }
      });
  };

  const { queries, loading, errorMessage } = state;
  return (
    <div className="App">
      <div className="Header">
        <img className="wikiLogo" src="wiki-logo.png" alt="wikipedia logo" />
        <h1>XTM WIKIQUERY APP</h1>
      </div>
      <Search search={search} />
      <Find />
      <div className="Results" id="results">
        {loading && !errorMessage ? (
          <div className="wait">Please wait !</div>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          queries.map((query, index) => (
            <SingleQuery key={`${index}-${query.pageid}`} query={query} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;

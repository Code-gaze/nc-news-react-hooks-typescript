// import {  IComment } from '../types/index';
import React from "react";

// interface CommentsLoading {
//     status: "loading";
// }
// interface CommentsLoaded {
//     status: "loaded";
//     payload: IComment[];
// }
// interface CommentsError {
//     status: "error";
//     error: Error;
// }

// type Comments = CommentsLoading | CommentsLoaded | CommentsError;

export const Store = React.createContext(null);

const initialState = { status: "loading" };

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_COMMENTS":
      return { ...state, ...action.payload };
    case "DELETE_COMMENT":
      return { ...state, ...action.payload };
    case "ADD_COMMENT":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

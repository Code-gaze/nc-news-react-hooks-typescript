import { IComment } from "../types/index";
import React from "react";

interface CommentsLoading {
  status: "loading";
}
interface CommentsLoaded {
  status: "loaded";
  payload: IComment[];
}
interface CommentsError {
  status: "error";
  error: Error;
}

interface IAction {
  type: string;
  payload: Comments;
}

type Comments = CommentsLoading | CommentsLoaded | CommentsError;

export const Store = React.createContext<Partial<ContextProps>>({});

const initialState: Comments = { status: "loading" };

function reducer(state: Comments, action: IAction) {
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

type ContextProps = {
  state:Comments,
  dispatch: React.Dispatch<IAction>
};

export function StoreProvider(props: { children: React.ReactNode; }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
}

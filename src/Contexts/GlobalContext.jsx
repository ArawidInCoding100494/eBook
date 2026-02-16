import { createContext, useReducer } from "react";

export const GlobalContext = createContext();




const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return { ...state, user: payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_READY":
      return { ...state, authReady: true };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, {
    user: JSON.parse(localStorage.getItem("user")) || null,      
    authReady: true,
  });

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};





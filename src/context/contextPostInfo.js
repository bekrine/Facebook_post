import React, { useState, createContext, useContext } from "react";
//import { createContext, useContext } from "react/cjs/react.production.min";

const PostInfoContext = createContext("");

export const usepostInfoContext = () => {
  let context = useContext(PostInfoContext);
  if (context === undefined) {
    throw new Error("postInfoContext was used outside of its Provider");
  }
  return context;
};

export const PostInfoProvider = ({ children }) => {
  const [nrbLike, setNbrLike] = useState(0);
  return (
    <PostInfoContext.Provider value={{ nrbLike, setNbrLike }}>
      {children}
    </PostInfoContext.Provider>
  );
};

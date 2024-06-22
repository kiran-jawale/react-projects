import React, { createContext, useState, useContext } from "react";

const DomContext = createContext();

export const DomProvider = ({ children }) => {
  const [docs, setDocs] = useState([]);
  const [editable, setEditable] = useState(true);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [isRightDivVisible, setRightDivVisible] = useState(false);
  const [isLeftDivVisible, setLeftDivVisible] = useState(false);
  const [isUpsideWindowVisible, setUpsideWindowVisible] = useState(false);

  const toggleEditable = () => {
    setEditable(!editable);
  };

  const toggleRightDiv = () => {
    setRightDivVisible(!isRightDivVisible);
  };

   const toggleLeftDiv = () => {
    setLeftDivVisible(!isLeftDivVisible);
  };

  const toggleUpsideWindow = () => {
    setUpsideWindowVisible(!isUpsideWindowVisible);
  };

  
  return (
    <DomContext.Provider
      value={{
        docs,
        setDocs,
        editable,
        toggleEditable,
        selectedDoc,
        setSelectedDoc,
        isRightDivVisible,
        toggleLeftDiv,
        toggleUpsideWindow,
        toggleRightDiv,
        isLeftDivVisible,
        setLeftDivVisible,
        isUpsideWindowVisible,
        setUpsideWindowVisible,
      }}
    >
      {children}
    </DomContext.Provider>
  );
};

export const useDom = () => useContext(DomContext);

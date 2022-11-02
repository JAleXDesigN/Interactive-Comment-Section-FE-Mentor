import React, { createContext, useState, useEffect } from "react";

export const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [index, setIndex] = useState(null);
  const [mode, setMode] = useState("");
  const [commId, setCommId] = useState("");
  const [neweditcomm, setNewEditComm] = useState("");
  const [neweditreply, setNewEditReply] = useState("");

  return (
    <CrudContext.Provider
      value={{
        index,
        mode,
        commId,
        neweditcomm,
        neweditreply,
        setIndex,
        setMode,
        setCommId,
        setNewEditComm,
        setNewEditReply
      }}
    >
      {children}
    </CrudContext.Provider>
  );
};

export default CrudProvider;

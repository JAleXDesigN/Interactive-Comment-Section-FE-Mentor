import React, { createContext, useState, useEffect } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [modemodal, setModeModal] = useState("");

  return (
    <ModalContext.Provider
      value={{
        open,
        modemodal,
        setOpen,
        setModeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

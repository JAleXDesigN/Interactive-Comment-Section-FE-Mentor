import React, { useState } from "react";
import { ButtonOpt, CtnLoginOpt, stylesModalForm } from "./auth.styled";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

import Login from "./Login";
import Register from "./Register";

const CtnLoginOptions = () => {
  const [ open, setOpen ] = useState(false);
  const [ modemodal, setModeModal ] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CtnLoginOpt>
        <h2>Sign in or create an account to start commenting</h2>
        <ul>
          <li>
            <ButtonOpt 
              type="button" 
              blue={"true"}
              onClick={() => {
                setModeModal('login');
                handleOpen();
              }}
            >
              Login
            </ButtonOpt>
          </li>
          <li>
            <ButtonOpt 
              type="button" 
              blue={"false"}
              onClick={() => {
                setModeModal('register');
                handleOpen();
              }}
            >
              Register
            </ButtonOpt>
          </li>
        </ul>
      </CtnLoginOpt>
      {modemodal === 'register' && <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <Box sx={stylesModalForm}>
            <Register/>
          </Box>
        </Fade>
      </Modal>}
      {modemodal === 'login' && <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <Box sx={stylesModalForm}>
            <Login/>
          </Box>
        </Fade>
      </Modal>}
    </>
  );
};

export default CtnLoginOptions;

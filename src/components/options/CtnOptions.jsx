import React, { useState } from "react";
import { FaPlus, FaSignOutAlt, FaAngleDoubleUp, FaMinus, FaSun, FaMoon } from "react-icons/fa";

import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";

import { useTheme } from '../../theme/ThemeContext'
import { 
  BtnArrow, 
  BtnExpand, 
  BtnMode, 
  BtnSignOut, 
  TooltipArrow, 
  TooltipMode, 
  TooltipOpt, 
  TooltipSignOut 
} from "./options.styled";


const CtnOptions = () => {
  const [open, setOpen] = useState(false);
  const themeState = useTheme();

  const signOutUser = () => {
    signOut(auth);
  };

  return (
    <>
      <TooltipSignOut 
        title='Sign Out' 
        placement="left">
        <BtnSignOut 
          aria-label="sign out"
          open={open}
          dark={themeState.dark.toString()}
          onClick={signOutUser}
        >
          <FaSignOutAlt/>
        </BtnSignOut>
      </TooltipSignOut>

      <TooltipMode 
        title={themeState.dark 
          ? 'Set Light Mode' 
          : 'Set Dark Mode'} 
        placement="left"
      >
        <BtnMode 
          aria-label="mode"
          dark={themeState.dark.toString()}
          open={open}
          onClick={() => themeState.toggle()}
        >
          {themeState.dark ? <FaSun/> : <FaMoon/>}
        </BtnMode>
      </TooltipMode>

      <TooltipArrow 
        title="Back to Top" 
        placement="left"
      >
        <BtnArrow
          aria-label="back to top"
          open={open}
          dark={themeState.dark.toString()}
          onClick={() => {
            window.scroll({
              top: 0,
              behavior: 'smooth'
            })
          }}
        >
          <FaAngleDoubleUp/>
        </BtnArrow>
      </TooltipArrow>

      <TooltipOpt 
        title="Options" 
        placement="left"
      >
        <BtnExpand 
          aria-label="option"
          onClick={() => setOpen(!open)} 
        >
          {open ? <FaMinus /> : <FaPlus />}
        </BtnExpand>
      </TooltipOpt>
    </>
  );
};

export default CtnOptions;

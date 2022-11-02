import React, { useContext } from "react";
import { FaPen, FaReply, FaTrash } from "react-icons/fa";
import { BtnActions } from "./cards.styled";
import { CrudContext } from "../../context/CrudContext";
import { ModalContext } from "../../context/ModalContext";

const ActionsBtn = ({user, idx, id, message, isMobile}) => {
  const {setIndex, setMode, setNewEditComm} = useContext(CrudContext);
  const {setOpen, setModeModal} = useContext(ModalContext);

  return (
    <BtnActions mobile={isMobile}>
      {user && id === user.uid && (
        <>
          <li className="btnRed">
            <button
              type="button"
              onClick={() => {
                setMode(''); 
                setModeModal("dltcomment");
                setIndex(idx);
                setOpen(true);
              }}
            >
              <FaTrash /> Delete
            </button>
          </li>
          <li className="btnBlue">
            <label
              htmlFor="editComment"
              onClick={() => {
                setMode("edit");
                setIndex(idx);
                setNewEditComm(message);
              }}
            >
              <FaPen /> Edit
            </label>
          </li>
        </>
      )}
      {user && id !== user.uid && (
        <li className="btnBlue">
          <label 
            htmlFor="replyComment" 
            onClick={() => {
              setMode("reply");
              setIndex(idx);
              setNewEditComm("");
            }}
          >
            <FaReply /> Reply
          </label>
        </li>
      )}
    </BtnActions>
  );
};

export default ActionsBtn;

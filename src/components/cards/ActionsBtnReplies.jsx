import React, { useContext } from "react";
import { FaPen, FaReply, FaTrash } from "react-icons/fa";
import { CrudContext } from "../../context/CrudContext";
import { ModalContext } from "../../context/ModalContext";
import { BtnActions } from "./cards.styled";

const ActionsBtnReplies = ({user, idx, id, commentId, message, isMobile}) => {
  const {setIndex, setMode, setCommId, setNewEditReply} = useContext(CrudContext);
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
                setModeModal("dltreply");
                setIndex(idx);
                setOpen(true);
              }}
            >
              <FaTrash /> Delete
            </button>
          </li>
          <li className="btnBlue">
            <label
              htmlFor="editReply"
              onClick={() => {
                setMode("editReply");
                setIndex(idx);
                setCommId(commentId);
                setNewEditReply(message);
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
              setNewEditReply("");
              setCommId(commentId);
              setMode("replyToReply");
              setIndex(idx);
            }}
          >
            <FaReply /> Reply
          </label>
        </li>
      )}
    </BtnActions>
  );
};

export default ActionsBtnReplies;

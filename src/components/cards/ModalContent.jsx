import React, { useContext } from "react";
import { ModalInfo } from "./cards.styled";
import { deleteAsoc, deleteField } from "../../utils/functionsCrud";
import { CrudContext } from "../../context/CrudContext";
import { ModalContext } from "../../context/ModalContext";

const ModalContent = ({type, collection, id, docId, user}) => {
  const { setOpen, setModeModal } = useContext(ModalContext);
  const { setIndex } = useContext(CrudContext);
  return (
    <ModalInfo>
      <h1>Delete {type}</h1>
      <p>
        Are you sure you want to delete this {type}? This will remove the {type} and can&#180;t be undone.
      </p>
      <div>
        <button type="button" onClick={() => {
          setOpen(false)
          setModeModal("");
          setIndex(null);
        }}>
          No, Cancel
        </button>
        <button
          type="button"
          onClick={() => {
            deleteField(collection, id, docId, user);
            deleteAsoc(docId);
            setModeModal("");
            setOpen(false);
            setIndex(null);
          }}
        >
          Yes, delete
        </button>
      </div>
    </ModalInfo>
  );
};

export default ModalContent;

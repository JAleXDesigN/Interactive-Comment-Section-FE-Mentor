import React, { useContext, useEffect, useRef } from "react";
import { CrudContext } from "../../context/CrudContext";
import { updateField } from "../../utils/functionsCrud";

const FormEdit = ({ user, collection, comment, modeForLabel }) => {
  const {
    mode,
    neweditcomm,
    neweditreply,
    setIndex,
    setMode,
    setNewEditComm,
    setNewEditReply
  } = useContext(CrudContext);
  const { docId, createdBy } = comment;
  let id;
  createdBy ? (id = createdBy.id) : (id = comment.id);

  const ref = useRef(null);
  const resizeTextArea = () => {
    ref.current.style.height = "auto";
    ref.current.style.height = ref.current.scrollHeight + "px";
  };

  const newedit = () => {
    if (mode === "edit") {
      return neweditcomm;
    } else {
      return neweditreply;
    }
  };

  useEffect(() => {
    if (newedit !== "") {
      resizeTextArea();
    }
  }, [newedit]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateField(collection, id, docId, newedit(), user);
        setIndex(null);
        setMode("");
        mode === "edit" ? setNewEditComm("") : setNewEditReply("");
      }}
    >
      <textarea
        id={modeForLabel === "editComm" ? "editComment" : "editReply"}
        rows={1}
        value={mode === "edit" ? neweditcomm : neweditreply}
        ref={ref}
        onFocus={(e) =>
          (e.target.selectionStart = e.target.selectionEnd =
            e.target.value.length)
        }
        onChange={(e) => {
          mode === "edit"
            ? setNewEditComm(e.target.value)
            : setNewEditReply(e.target.value);
        }}
      ></textarea>
      <div>
        <button type="button" onClick={() => {
          setMode("");
          setIndex(null);
          setNewEditComm("");
        }}>
          Cancel
        </button>
        <button type="submit"> Update </button>
      </div>
    </form>
  );
};

export default FormEdit;

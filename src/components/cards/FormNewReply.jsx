import React, { useContext, useState } from "react";

import {
  ButtonSend,
  CtnActionsMb,
  CtnCard,
  CtnCardLeftDt,
  FormToSend,
} from "./cards.styled";

import FirebaseContext from "../../services/FirebaseContext";
import { addReplies } from "../../utils/functionsCrud";
import { CrudContext } from "../../context/CrudContext";

const FormNewReply = ({comment}) => {
  const [ reply, setReply ] = useState('');

  const { user } = useContext(FirebaseContext);
  const {setIndex, setMode} = useContext(CrudContext)
  const { photoURL, displayName } = user;
  const { docId, createdBy: {name} } = comment;

  const valueEmpty = e => {
    if (e.target.value.trim().length === 0) {
      setIndex(null)
      setMode('')
    }
  }
  return (
    <CtnCard cardtype={'reply'}>
      <CtnCardLeftDt mobile={'false'} votes={'false'}>
        <ul>
          <li className="img">
            <img src={photoURL} alt={`Image of user ${displayName}`}></img>
          </li>
        </ul>
      </CtnCardLeftDt>
      <FormToSend onSubmit={e => {
        e.preventDefault();
        addReplies(docId, name, reply, user);
        setIndex(null);
        setMode('');
      }}>
        <textarea
          rows="1"
          placeholder="Add a reply.."
          id="replyComment"
          value={reply}
          onChange={(e) => {
            setReply(e.target.value);
            e.target.style.height = "inherit";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          onBlur={e => valueEmpty(e)}
        ></textarea>
        <ButtonSend 
          mobile={'false'} 
          type="submit"
        >
          Reply
        </ButtonSend>
        
        <CtnActionsMb>
          <CtnCardLeftDt mobile={'true'} votes={'false'}>
            <ul>
              <li className="img">
                <img src={photoURL} alt={`Image of user ${displayName}`} ></img>
              </li>
            </ul>
          </CtnCardLeftDt>
          <ButtonSend 
            mobile={'true'} 
            type="submit"
          >
            Reply
          </ButtonSend>
        </CtnActionsMb>
      </FormToSend>
    </CtnCard>
  );
};

export default FormNewReply;

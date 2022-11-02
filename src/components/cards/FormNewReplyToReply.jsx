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

const FormNewReplyToReply = ({reply}) => {
  const [ replytoreply, setReplyToReply ] = useState('');

  const { user } = useContext(FirebaseContext);
  const {setIndex, setMode} = useContext(CrudContext);
  const { photoURL, displayName } = user;
  const { belongingToComm, username } = reply;

  const valueEmpty = e => {
    if (e.target.value.trim().length === 0) {
      setIndex(null)
      setMode('')
    }
  }
  return (
    <CtnCard 
      cardtype={'replyToReply'}
    >
      <CtnCardLeftDt mobile={'false'} votes={'false'}>
        <ul>
          <li className="img">
            <img src={photoURL} alt={`Image of user ${displayName}`}></img>
          </li>
        </ul>
      </CtnCardLeftDt>
      <FormToSend onSubmit={e => {
        e.preventDefault();
        addReplies(belongingToComm, username, replytoreply, user);
        setIndex(null);
        setMode('');
      }}>
        <textarea
          id='reply'
          rows="2"
          placeholder="Add a reply.."
          onChange={(e) => {
            setReplyToReply(e.target.value);
            e.target.style.height = "inherit";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          onBlur={e => valueEmpty(e)}
        ></textarea>
        <ButtonSend 
          mobile={'false'} 
          type="submit"
        >
          Send
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
            Send
          </ButtonSend>
        </CtnActionsMb>
      </FormToSend>
    </CtnCard>
  );
};

export default FormNewReplyToReply;

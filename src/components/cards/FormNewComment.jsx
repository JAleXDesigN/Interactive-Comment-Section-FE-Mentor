import React, { useContext, useState } from "react";

import {
  ButtonSend,
  CtnActionsMb,
  CtnCard,
  CtnCardLeftDt,
  FormToSend,
} from "./cards.styled";

import FirebaseContext from "../../services/FirebaseContext";
import { sendComment } from "../../utils/functionsCrud";
import { useTheme } from "../../theme/ThemeContext";

const FormNewComment = () => {
  const themeState = useTheme();
  const { user } = useContext(FirebaseContext);
  const { photoURL, displayName } = user;

  const [comment, setComment] = useState("");

  return (
    <CtnCard> 
      <CtnCardLeftDt mobile={'false'} votes={'false'}>
        <ul>
          <li className="img">
            <img 
              src={photoURL 
                ? photoURL 
                : themeState.dark 
                  ? './user-red.svg' 
                  : './user-blue.svg'} 
              alt={`Image of user ${displayName}`}
              />
          </li>
        </ul>
      </CtnCardLeftDt>
      <FormToSend onSubmit={e => {
        sendComment(e, comment, user)
        setComment('')
      }}>
        <textarea
          rows="2"
          placeholder="Add a comment.."
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            e.target.style.height = "inherit";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
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
                <img 
                  src={photoURL 
                    ? photoURL 
                    : themeState.dark 
                      ? './user-red.svg' 
                      : './user-blue.svg'} 
                  alt={`Image of user ${displayName}`}
                />
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

export default FormNewComment;

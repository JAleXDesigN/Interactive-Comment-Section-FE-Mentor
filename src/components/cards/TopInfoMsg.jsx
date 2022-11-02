import React from "react";
import { Info } from "./cards.styled";
import { getUsername } from "../../utils/functionsCrud";
import moment from "moment";

const TopInfoMsg = ({user, userImage, displayName, name, id, create}) => {
  return (
    <Info>
      <li className="img">
        <img src={userImage} alt={`Image of user ${displayName}`} />
      </li>
      <li className="name">
        <h1>@{getUsername(name)}</h1>
      </li>
      {user && id === user.uid && (
        <li className="isCreator">
          <p>you</p>
        </li>
      )}
      <li className="created">
        <p>{moment(create).fromNow()}</p>
      </li>
    </Info>
  );
};

export default TopInfoMsg;

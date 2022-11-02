import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { addNegativeVote, addPositiveVote } from "../../utils/functionsCrud";

const Votes = ({user, collection, positiveVotes, negativeVotes, votes, docId}) => {
  return (
    <ul>
      <li className="plus">
        <FaPlus
          onClick={() =>
            addPositiveVote(
              user,
              collection,
              positiveVotes,
              negativeVotes,
              votes,
              docId
            )
          }
        />
      </li>
      <li className="vote"> {votes} </li>
      <li className="minus">
        <FaMinus
          onClick={() =>
            addNegativeVote(
              user,
              collection,
              positiveVotes,
              negativeVotes,
              votes,
              docId
            )
          }
        />
      </li>
    </ul>
  );
};

export default Votes;

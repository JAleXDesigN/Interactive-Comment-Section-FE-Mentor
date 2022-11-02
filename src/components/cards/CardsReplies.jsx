import React, { Fragment, useContext } from "react";

import {
  CtnActionsMb,
  CtnCard,
  CtnInfo,
  CtnTextMessage,
  CtnCardLeftDt,
  TopInfo,
  CtnReplies,
  stylesModal,
} from "./cards.styled";
import Votes from "./Votes";
import TopInfoMsg from "./TopInfoMsg";
import ModalContent from "./ModalContent";
import FormEdit from "./FormEdit";
import FormNewReplyToReply from "./FormNewReplyToReply";

import { motion } from "framer-motion";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

import { RepliesContext } from "../../context/RepliesContext";
import FirebaseContext from "../../services/FirebaseContext";

import { getUsername, filterReplies } from "../../utils/functionsCrud";
import { CrudContext } from "../../context/CrudContext";
import { ModalContext } from "../../context/ModalContext";
import ActionsBtnReplies from "./ActionsBtnReplies";
import { FcApproval } from "react-icons/fc";

const CardsReplies = ({ commentId, getRole }) => {
  const { replies } = useContext(RepliesContext);
  const { user } = useContext(FirebaseContext);
  const { index, mode, commId, setIndex, setMode } = useContext(CrudContext);
  const { open, modemodal, setOpen, setModeModal } = useContext(ModalContext);

  return (
    filterReplies(replies, commentId).length > 0 && (
      <CtnReplies>
        {filterReplies(replies, commentId).map((reply, idx) => {
          const {
            docId,
            id,
            message,
            createAt,
            displayName,
            username,
            userImage,
            to,
            positiveVotes,
            negativeVotes,
            votes,
            belongingToComm,
          } = reply;
          return (
            <Fragment key={`${docId}.${idx}`}>
              <CtnCard
                cardtype={"replyCont"}
                as={motion.div}
                initial={{ y: 72, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
                transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
              >
                <CtnCardLeftDt mobile={'false'} votes={'true'}>
                  <Votes
                    user={user}
                    collection={"repliesComments"}
                    positiveVotes={positiveVotes}
                    negativeVotes={negativeVotes}
                    votes={votes}
                    docId={docId}
                  />
                </CtnCardLeftDt>
                <CtnInfo>
                  <TopInfo>
                    <TopInfoMsg
                      user={user}
                      userImage={userImage}
                      displayName={displayName}
                      name={username}
                      id={id}
                      create={createAt}
                    />
                    <ActionsBtnReplies
                      user={user}
                      idx={idx}
                      commentId={commentId}
                      id={id}
                      message={message}
                      isMobile={false}
                    />
                  </TopInfo>
                  <CtnTextMessage>
                    {mode === "editReply" &&
                    commId === belongingToComm &&
                    index === idx ? (
                      <FormEdit
                        user={user}
                        collection={"repliesComments"}
                        comment={reply}
                        modeForLabel={"editReply"}
                      />
                    ) : (
                      <p>
                        {getRole(id) && (
                          <span className="admin">
                            <FcApproval/> {getRole(id)}
                          </span>
                        )}
                        <span>@{getUsername(to)}</span> 
                        {message}
                      </p>
                    )}
                  </CtnTextMessage>
                  <CtnActionsMb>
                    <CtnCardLeftDt mobile={'true'} votes={'true'}>
                      <Votes
                        user={user}
                        collection={"repliesComments"}
                        positiveVotes={positiveVotes}
                        negativeVotes={negativeVotes}
                        votes={votes}
                        docId={docId}
                      />
                    </CtnCardLeftDt>
                    <ActionsBtnReplies
                      user={user}
                      idx={idx}
                      commentId={commentId}
                      id={id}
                      message={message}
                      isMobile={true}
                    />
                  </CtnActionsMb>
                  {modemodal === "dltreply" && index === idx && (
                    <Modal
                      open={open}
                      onClose={() => {
                        setOpen(false);
                        setModeModal("");
                        setMode("");
                        setIndex(null);
                      }}
                    >
                      <Fade in={open}>
                        <Box sx={stylesModal}>
                          <ModalContent
                            type={"reply"}
                            collection={"repliesComments"}
                            id={id}
                            docId={docId}
                            user={user}
                          />
                        </Box>
                      </Fade>
                    </Modal>
                  )}
                </CtnInfo>
              </CtnCard>
              {mode === "replyToReply" &&
                commId === belongingToComm &&
                index == idx && (
                  <FormNewReplyToReply
                    reply={reply}
                  />
                )}
            </Fragment>
          );
        })}
      </CtnReplies>
    )
  );
};

export default CardsReplies;

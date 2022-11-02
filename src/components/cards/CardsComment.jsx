import React, { Fragment, useContext } from "react";

import {
  CtnActionsMb,
  CtnCard,
  CtnCardLeftDt,
  CtnInfo,
  CtnMain,
  CtnTextMessage,
  Spinner,
  TopInfo,
  stylesModal
} from "./cards.styled";
import Votes from "./Votes";
import TopInfoMsg from "./TopInfoMsg";
import ModalContent from "./ModalContent";
import CardsReplies from "./CardsReplies";
import FormNewReply from "./FormNewReply";
import FormEdit from "./FormEdit";

import { FcApproval } from "react-icons/fc";

import { AnimatePresence, motion } from "framer-motion";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

import FirebaseContext from "../../services/FirebaseContext";
import { CommentsContext } from "../../context/CommentsContext";
import { CrudContext } from "../../context/CrudContext";
import { ModalContext } from "../../context/ModalContext";
import ActionsBtn from "./ActionsBtn";

const CardsComments = () => {
  const { index, mode } = useContext(CrudContext);
  const { open, modemodal, setOpen, setModeModal } = useContext(ModalContext)

  const { user } = useContext(FirebaseContext);
  const { comments, role } = useContext(CommentsContext);

  const getRole = (id) => {
    if (role.length > 0 && role[0].admin.includes(id)) {
      return 'admin';
    }
  }

  return comments.length > 0 ? (
    <CtnMain>
      <AnimatePresence mode="popLayout" >
        {comments.map((comment, idx) => {
          const {
            docId,
            create,
            createdBy: { id, displayName, name, userImage },
            message,
            negativeVotes,
            positiveVotes,
            votes,
          } = comment;
          return (
            <Fragment key={docId}>
              <CtnCard
                cardtype={"comment"}
                as={motion.div}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
                initial={{ y: 72, opacity: 0 }}
                exit={{ x: -100, opacity: 0, transition: { delay: 0.1 } }}
                transition={{ duration: 0.2, ease: [0.3, 0.05, -0.01, 0.4] }}
              >
                <CtnCardLeftDt 
                  mobile={'false'} 
                  votes={'true'}
                >
                  <Votes
                    user={user}
                    collection={"comments"}
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
                      name={name}
                      id={id}
                      create={create}
                    />
                    <ActionsBtn
                      user={user}
                      idx={idx}
                      id={id}
                      message={message}
                      isMobile={false}
                    />
                  </TopInfo>
                  <CtnTextMessage>
                    {user && mode === "edit" && index === idx ? (
                      <FormEdit
                        user={user}
                        collection={'comments'}
                        comment={comment}
                        modeForLabel={'editComm'}
                      />
                    ) : (
                      <p>
                        {getRole(id) && (
                          <span className="admin">
                            <FcApproval/> {getRole(id)}
                          </span>
                        )}
                        {message}
                      </p>
                    )}
                  </CtnTextMessage>
                  <CtnActionsMb>
                    <CtnCardLeftDt mobile={'true'} votes={'true'}>
                      <Votes
                        user={user}
                        collection={"comments"}
                        positiveVotes={positiveVotes}
                        negativeVotes={negativeVotes}
                        votes={votes}
                        docId={docId}
                      />
                    </CtnCardLeftDt>
                    <ActionsBtn
                      user={user}
                      idx={idx}
                      id={id}
                      message={message}
                      isMobile={true}
                    />
                  </CtnActionsMb>
                  {modemodal === "dltcomment" && index === idx && (
                    <Modal open={open} onClose={() => {
                      setOpen(false)
                      setModeModal('')
                    }}>
                      <Fade in={open}>
                        <Box sx={stylesModal}>
                          <ModalContent
                            type={"comment"}
                            collection={"comments"}
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
              {mode === "reply" && index == idx && (
                <FormNewReply
                  comment={comment}
                />
              )}
              <CardsReplies
                key={`${docId}-${idx}`}
                commentId={docId}
                getRole={getRole}
              />
            </Fragment>
          );
        })}
      </AnimatePresence>
    </CtnMain>
  ) : (
    <Spinner>
      <div className="cssload-loading">
        <i></i>
        <i></i>
      </div>
    </Spinner>
  );
};

export default CardsComments;
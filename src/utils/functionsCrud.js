import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

export const sendComment = (e, message, user) => {
  e.preventDefault();
  if (message.trim().length === 0) return;
  const send = async () => {
    try {
      let commentData = {
        message: message,
        createdBy: {
          id: user.uid,
          displayName: user.displayName,
          name: user.email,
          userImage: user.photoURL,
        },
        create: Date.now(),
        votes: 0,
        positiveVotes: [],
        negativeVotes: [],
      };

      await addDoc(collection(db, "comments"), commentData);
    } catch (err) {}
  };
  send();
};

export const addReplies = async (id, creador, message, user) => {
  if (message.trim().length === 0) return;
  try {
    let replyData = {
      belongingToComm: id,
      message: message,
      createAt: Date.now(),
      id: user.uid,
      displayName: user.displayName ? user.displayName : getUsername(user.email),
      username: user.email,
      userImage: user.photoURL,
      to: creador,
      votes: 0,
      positiveVotes: [],
      negativeVotes: []
    };
    await addDoc(collection(db, "repliesComments"), replyData);
  } catch (err) {}
};

export const getUsername = (name) => {
  const userName = /^([^]+)@(\w+).(\w+)$/.exec(name);
  const [, getUser] = userName;

  return getUser;
};

export const filterReplies = (replies, commentId) => {
  const repliesFilter = replies.filter(
    (reply) => reply.belongingToComm === commentId
  );
  return repliesFilter;
};

export const updateField = async (nameCol, creadorId, id, message, user) => {
  if (message.trim().length === 0) return;
  if (creadorId === user.uid) {
    try {
      const docRef = doc(db, nameCol, id);
      await updateDoc(docRef, {
        message: message,
      });
    } catch (err) {}
  }
};

export const deleteField = async (nameCol, creadorId, id, user) => {
  if (creadorId === user.uid) {
    try {
      const docRef = doc(db, nameCol, id);
      await deleteDoc(docRef);
    } catch (error) {}
  }
};

export const deleteAsoc = async (id) => {
  try {
    if (id) {
      let docRef = collection(db, 'repliesComments');
      let q = query(docRef, where("belongingToComm", "==", id));
      let querySnapshot = await getDocs(q);
      querySnapshot.forEach((docQuery) => {
        docRef = doc(db, "repliesComments", docQuery.id);
        deleteDoc(docRef);
      });
    }
  } catch (err) {} 
}

export const addPositiveVote = (user, nameCol, hasVotedPos, hasVotedNeg, votes, id) => {
  if (!user) return;

  if (hasVotedPos.includes(user.uid)) return;

  const docRef = doc(db, nameCol, id);
  if (hasVotedNeg.includes(user.uid)) {
    const newUpdateHasVotedNegative = hasVotedPos.filter(
      (vote) => vote !== user.uid
    );
    const newTotal = votes + 1;
    updateDoc(docRef, {
      votes: newTotal,
      negativeVotes: newUpdateHasVotedNegative,
    });
  }

  if (
    !hasVotedPos.includes(user.uid) &&
    !hasVotedNeg.includes(user.uid)
  ) {
    const newUpdateHasVotedPositive = [...hasVotedPos, user.uid];
    const newTotal = votes + 1;
    updateDoc(docRef, {
      votes: newTotal,
      positiveVotes: newUpdateHasVotedPositive,
    });
  }
};

export const addNegativeVote = (user, nameCol, hasVotedPos, hasVotedNeg, votes, id) => {
  if (!user) return;
  if (hasVotedNeg.includes(user.uid)) return;

  const docRef = doc(db, nameCol, id);
  if (hasVotedPos.includes(user.uid)) {
    const newUpdateHasVotedPositive = hasVotedPos.filter(
      (vote) => vote !== user.uid
    );
    const newTotal = votes - 1;
    updateDoc(docRef, {
      votes: newTotal,
      positiveVotes: newUpdateHasVotedPositive,
    });
  }

  if (
    !hasVotedNeg.includes(user.uid) &&
    !hasVotedPos.includes(user.uid)
  ) {
    const newUpdateHasVotedNegative = [...hasVotedNeg, user.uid];
    const newTotal = votes - 1;

    updateDoc(docRef, {
      votes: newTotal,
      negativeVotes: newUpdateHasVotedNegative,
    });
  }
};
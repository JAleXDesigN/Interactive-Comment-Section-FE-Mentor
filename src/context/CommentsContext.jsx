import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { createContext, useState, useEffect } from "react";
import { db } from "../services/firebaseConfig";

export const CommentsContext = createContext();

const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [role, setRole] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("create", "asc"));
    onSnapshot(q, (querySnapshot) => {
      const commentsArray = [];
      querySnapshot.forEach((doc) => {
        commentsArray.push({ docId: doc.id, ...doc.data() });
      });
      setComments(commentsArray);
    });
  }, []);

  useEffect(() => {
    const getRole = async () => {
      let querySnapshot = await getDocs(collection(db, "admin"));
      let admin = [];
      querySnapshot.forEach((docQuery) => {
        admin.push({ ...docQuery.data() });
        setRole(admin);
      });
    };
    getRole();
  }, []);

  return (
    <CommentsContext.Provider
      value={{
        comments,
        role,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;

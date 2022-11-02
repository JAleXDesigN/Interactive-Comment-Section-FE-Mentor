import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { createContext, useState, useEffect } from 'react';
import { db } from '../services/firebaseConfig';

export const RepliesContext = createContext();

const RepliesProvider = ({children})=> {
    const [replies, setReplies] = useState([]);
    useEffect(() => {
        const q = query(collection(db, "repliesComments"), orderBy('createAt', 'asc'));
        onSnapshot(q, (querySnapshot) => {
          const repliesArray = [];
          querySnapshot.forEach((doc) => {
            repliesArray.push({docId: doc.id, ...doc.data()});
          });
          setReplies(repliesArray)
        });
      }, []);
    return (
        <RepliesContext.Provider
            value={{
                replies
            }}
        >
            {children}
        </RepliesContext.Provider>
    )
}

export default RepliesProvider;
import React from 'react';
import "./App.css";
import CommentsProvider from "./context/CommentsContext";
import RepliesProvider from "./context/RepliesContext";
import Home from "./components/Home";
import { useAuth } from "./services/useAuth";
import FirebaseContext from "./services/FirebaseContext";
import CrudProvider from './context/CrudContext';
import ModalProvider from './context/ModalContext';

const App = () => {
  const user = useAuth();
  return (  
    <FirebaseContext.Provider
      value={{
        user,
      }}
    >
      <CommentsProvider>
        <RepliesProvider>
          <CrudProvider>
            <ModalProvider>
              <Home/>
            </ModalProvider>
          </CrudProvider>
        </RepliesProvider>
      </CommentsProvider>
    </FirebaseContext.Provider>
  );
}
 
export default App;

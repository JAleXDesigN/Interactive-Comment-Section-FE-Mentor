import React, { useContext } from "react";
import FirebaseContext from "../services/FirebaseContext";
import { CtnMain, MainTag } from "./home.styled";
import CtnLoginOptions from "./auth/CtnLoginOptions";
import CtnOptions from "./options/CtnOptions";
import CardsComments from "./cards/CardsComment";
import FormNewComment from './cards/FormNewComment'
import { ToastContainer } from "react-toastify";

const Home = () => {
  const { user } = useContext(FirebaseContext);
  return (
    <MainTag>
      <CardsComments/>
      {user && (
        <CtnMain>
          <FormNewComment />
        </CtnMain>
      )}
      {user ? <CtnOptions/> : <CtnLoginOptions />}
      <ToastContainer />
    </MainTag>
  );
};

export default Home;

import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, signInGitHub, storage } from "../../services/firebaseConfig";
import { signInGoogle } from "../../services/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import { FcGoogle } from "react-icons/fc";
import { ImGithub, ImUpload } from "react-icons/im";

import {
  CtnFormAccess,
  FormAccess,
  BtnAccess,
  CtnBtnMoreOpt,
  BtnMoreOpt,
  CtnInputFile,
  MessageError,
  InputField,
  stylesToast
} from "./auth.styled";

import { useFormik } from "formik";
import { schemaRegister } from "../../utils/schemaValidation";

import { toast } from "react-toastify";
import { Spinner } from "../cards/cards.styled";
import { useTheme } from "../../theme/ThemeContext";
import { FaExclamationCircle } from "react-icons/fa";

const Register = () => {
  const [valueFile, setValueFile] = useState("Seleccione UserImage..");
  const [load, setLoad] = useState(false);
  const [spinnerReg, setSpinnerReg] = useState(false);
  const themeState = useTheme();

  const Formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      image: undefined,
    },
    validationSchema: schemaRegister,
    onSubmit: async (values) => {
      setSpinnerReg(true);
      const { username, email, password, image } = values;
      try {
        //Create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(
          storage,
          `user-comments-section/${username + date}`
        );

        await uploadBytesResumable(storageRef, image).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              const res = await createUserWithEmailAndPassword(auth, email, password);
              //Update profile
              updateProfile(res.user, {
                displayName: username,
                photoURL: downloadURL,
              });
              setSpinnerReg(true);
              toast.success('Logged successfully!!', 
              {...stylesToast, theme: themeState.dark ? 'dark' : 'light'})
            } catch (err) {
              toast.error('Internal error, please try again.', 
              {...stylesToast, theme: themeState.dark ? 'dark' : 'light'})
            }
          });
        });
      } catch (err) {
        const msg = err.message.toLowerCase();
        if (msg.includes("auth/email-already-in-use")) {
          return toast.error(
            "Email already in use, please log in.",
            {...stylesToast, theme: themeState.dark ? 'dark' : 'light'}
          );
        }
      }
    },
  });

  return (
      <CtnFormAccess>
        {load ? (
          <Spinner>
            <div className="cssload-loading">
              <i></i>
              <i></i>
            </div>
          </Spinner>
        ) : (
          <FormAccess onSubmit={Formik.handleSubmit}>
            <h1>Create an account</h1>

            <label htmlFor="username">Name</label>
            <InputField
              errorUsername={
                Formik.errors.username &&
                Formik.touched.username &&
                Formik.errors.username
              }
            >
              <input
                id="username"
                name="username"
                value={Formik.values.username}
                onBlur={Formik.handleBlur}
                onChange={Formik.handleChange}
                type="text"
                autoComplete="new-username"
                placeholder="Enter your name"
              />
            </InputField>
            {Formik.errors.username && Formik.touched.username && (
              <MessageError> <FaExclamationCircle/> {Formik.errors.username}</MessageError>
            )}

            <label htmlFor="email">Email</label>
            <InputField
              errorEmail={
                Formik.errors.email &&
                Formik.touched.email &&
                Formik.errors.email
              }
            >
              <input
                type="email"
                name="email"
                id="email"
                value={Formik.values.email}
                onBlur={Formik.handleBlur}
                onChange={Formik.handleChange}
                autoComplete="new-username"
                placeholder="Enter a email"
              />
            </InputField>
            {Formik.errors.email && Formik.touched.email && (
              <MessageError> <FaExclamationCircle/> {Formik.errors.email}</MessageError>
            )}

            <label htmlFor="password">Password</label>
            <InputField
              errorPassword={
                Formik.errors.password &&
                Formik.touched.password &&
                Formik.errors.password
              }
            >
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="current-password"
                value={Formik.values.password}
                onBlur={Formik.handleBlur}
                onChange={Formik.handleChange}
                placeholder="Enter a password"
              />
            </InputField>
            {Formik.errors.password && Formik.touched.password && (
              <MessageError> <FaExclamationCircle/> {Formik.errors.password}</MessageError>
            )}

            <input
              style={{ display: "none" }}
              name="image"
              type="file"
              id="image"
              onChange={(e) => {
                setValueFile(e.target.files[0].name);
                Formik.setFieldValue("image", e.currentTarget.files[0]);
              }}
            />
            <CtnInputFile>
              <label htmlFor="image">
                <ImUpload /> {valueFile}
              </label>
            </CtnInputFile>

            {Formik.errors.image && Formik.touched.image && (
              <MessageError center={true}> <FaExclamationCircle/> {Formik.errors.image}</MessageError>
            )}
            {spinnerReg && (
              <Spinner>
                <div className="cssload-loading">
                  <i></i>
                  <i></i>
                </div>
              </Spinner>
            )}
            <BtnAccess type="submit">Create Account</BtnAccess>
            <h2>Or register using:</h2>
            <CtnBtnMoreOpt>
              <BtnMoreOpt
                type="button"
                onClick={() => {
                  setLoad(true);
                  signInGoogle(setLoad);
                }}
                bg={false}
              >
                <FcGoogle /> Google
              </BtnMoreOpt>
              <BtnMoreOpt
                type="button"
                bg={true}
                onClick={() => {
                  setLoad(true);
                  signInGitHub(setLoad);
                }}
              >
                <ImGithub /> GitHub
              </BtnMoreOpt>
            </CtnBtnMoreOpt>
          </FormAccess>
        )}
      </CtnFormAccess>
  );
};

export default Register;

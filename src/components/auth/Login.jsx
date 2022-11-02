import React, { useState } from "react";
import { useFormik } from "formik";
import { auth, signInGitHub, signInGoogle } from "../../services/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { Spinner } from "../cards/cards.styled";
import {
  CtnFormAccess,
  FormAccess,
  BtnAccess,
  CtnBtnMoreOpt,
  BtnMoreOpt,
  InputField,
  MessageError,
  stylesToast
} from "./auth.styled";
import { schemaLogin } from "../../utils/schemaValidation";
import { toast } from "react-toastify";
import { FaExclamationCircle } from "react-icons/fa";
import { useTheme } from "../../theme/ThemeContext";

const Login = () => {
  const [load, setLoad] = useState(false);
  const themeState = useTheme();

  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schemaLogin,
    onSubmit: async (valores) => {
      const { email, password } = valores;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('You logged in successfully!', 
        {...stylesToast, theme: themeState.dark ? 'dark' : 'light'})
      } catch (error) {
        const msg = error.message.toLowerCase();
        if (msg.includes("auth/user-not-found")) {
          return toast.error(
            "Unregistered user, please create an account.",
            {...stylesToast, theme: themeState.dark ? 'dark' : 'light'}
          );
        }
        if (msg.includes("auth/wrong-password")) {
          return toast.error(
            "Wrong password, please enter a correct password.",
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
          <h1>Sign In</h1>

          <label htmlFor="email">Email</label>
          <InputField
            errorEmail={
              Formik.errors.email && Formik.touched.email && Formik.errors.email
            }
          >
            <input
              id="email"
              type="email"
              name="email"
              value={Formik.values.email}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              autoComplete="new-username"
              placeholder="Enter your email"
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
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              placeholder="Enter your password"
            />
          </InputField>
          {Formik.errors.password && Formik.touched.password && (
            <MessageError> <FaExclamationCircle/> {Formik.errors.password}</MessageError>
          )}

          {/* <ResetPassBtn to={"/"}>Forgot Password?</ResetPassBtn> */}
          <BtnAccess type="submit">Login</BtnAccess>
          <h2>Or login using:</h2>
          <CtnBtnMoreOpt>
            <BtnMoreOpt
              type="button"
              bg={false}
              mb={"not"}
              onClick={() => {
                setLoad(true);
                signInGoogle(setLoad);
              }}
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

export default Login;

import styled from "@emotion/styled";

export const CtnLoginOpt = styled.div`
  position: fixed;
  max-width: 30rem;
  width: 80%;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: var(--bgCard);
  right: 2rem;
  bottom: 2rem;
  box-shadow: var(--boxShadow) 0px 4px 12px;
  text-align: center;
  h2 {
    color: var(--text1);
  }
  ul {
    display: flex;
    justify-content: center;
    column-gap: 1.5rem;
    margin: 2rem 0 1rem;
  }
`;

export const ButtonOpt = styled.button`
  ${({ blue }) => blue === "true" && "background-color: var(--moderateBlue);"};
  ${({ blue }) => blue === "false" && "background-color: var(--softRed);"};
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: 0.7rem;
  &:hover {
    cursor: pointer;
    ${({ blue }) => blue === "true" && "background-color: var(--lightGBlue);"};
    ${({ blue }) => blue === "false" && "background-color: var(--paleRed);"};
  }
`;

export const MainTagLogin = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const CtnFormAccess = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparent;
  padding: 3.5rem;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

export const FormAccess = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  h1 {
    font-size: 3.2rem;
    text-align: center;
    color: var(--text1);
  }
  label {
    font-weight: 700;
    display: block;
    margin-top: 2rem;
    color: var(--text2);
  }
  h2 {
    text-align: center;
    margin: 2.5rem 0;
    color: var(--text1);
  }
`;

export const InputField = styled.div`
  width: 100%;
  input {
    width: inherit;
    padding: 0.8rem;
    border-radius: 0.7rem;
    border: 1px solid
      ${({ errorUsername, errorEmail, errorPassword }) =>
        errorUsername || errorEmail || errorPassword
          ? "var(--paleRed);"
          : "var(--lineReplies);"};
    background-color: transparent;
    outline: none;
    color: var(--text2);
    &:focus {
      border-color: ${({ errorUsername, errorEmail, errorPassword }) =>
        errorUsername || errorEmail || errorPassword
          ? "var(--softRed);"
          : "var(--btnBlue);"};
    }
    &::placeholder {
      color: var(--text2);
    }
  }
`;

export const BtnAccess = styled.button`
  align-self: center;
  min-width: 10.2rem;
  color: var(--white);
  background-color: var(--moderateBlue);
  text-transform: uppercase;
  border-radius: 0.7rem;
  padding: 1rem 2rem;
  height: auto;
  margin-top: 1.5rem;
  &:hover {
    background-color: var(--lightGBlue);
  }
`;

export const CtnBtnMoreOpt = styled.div`
  width: 100%;
  display: grid;
  row-gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
  }
`;

export const BtnMoreOpt = styled.button`
  color: ${({ bg }) => (bg ? "var(--white);" : "var(--text1);")};
  ${({ bg }) =>
    bg
      ? "background-color: var(--darkBlue);"
      : "box-shadow: var(--boxShadow) 0px 3px 8px;"};
  padding: 1rem 0;
  border-radius: 0.7rem;
  font-weight: 500;
  width: 100%;
  ${({ mtb }) => mtb === "true" && `margin: 1rem 0;`};
  &:hover {
    ${({ bg }) =>
      bg
        ? "background-color: var(--grayBlue);"
        : "box-shadow: rgba(139, 139, 139, 0.24) 0px 3px 8px;"};
  }
  svg {
    margin-bottom: -2px;
  }
`;

export const OptionLink = styled.span`
  display: block;
  text-align: center;
  margin-top: 2rem;
  a {
    color: var(--softRed);
    &:hover {
      color: var(--paleRed);
    }
  }
`;

export const CtnInputFile = styled.div`
  width: 100%;
  label {
    background-color: var(--softRed);
    border-radius: 1rem;
    text-align: center;
    padding: 0.5rem 0;
    color: var(--white);
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const MessageError = styled.p`
  font-weight: 500;
  color: var(--softRed);
  ${({ center }) =>
    center &&
    `
        text-align: center;
    `}
  svg {
    font-size: 1.3rem;
  }
`;

export const stylesModalForm = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  width: "90%",
  bgcolor: "var(--bgCard)",
  p: 0,
  borderRadius: 2,
  overflow: "hidden",
  border: "none",
  boxShadow: `var(--boxShadow) 0px 4px 12px`
};

export const stylesToast = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
};

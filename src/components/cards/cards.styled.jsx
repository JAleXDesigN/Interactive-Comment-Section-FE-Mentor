import styled from "@emotion/styled";

export const CtnMain = styled.div`
  max-width: 73rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CtnCard = styled.div`
  padding: 2.5rem;
  background-color: var(--bgCard);
  width: 100%;
  border-radius: 1rem;
  ${({ cardtype }) =>
    cardtype === "reply" && `
    margin-top: -1rem; 
    margin-bottom: 1.9rem;`};
  ${({ cardtype }) =>
    cardtype === "replyToReply" && `
    margin-top: -1rem;`};
  ${({ cardtype }) =>
    cardtype === "comment" && `
    margin-bottom: 1.9rem;`};
  ${({ cardtype }) =>
    cardtype === "replyCont" && `
    margin-bottom: 1.9rem;
    &:last-of-type {
        margin-bottom: 0;
    }`};
  @media (min-width: 768px) {
    display: flex;
    column-gap: 2.5rem;
  }
`;

export const CtnCardLeftDt = styled.div`
  flex: 0 0 3.9rem;
  height: ${({ mobile }) => 
    mobile === 'true' ? "auto;" : "10rem;"};
  display: flex;
  align-items: center;
  ul {
    width: ${({ mobile }) => 
      mobile === 'true' ? "9.8rem;" : "100%;"};
    height: ${({ mobile }) => 
      mobile === 'true' ? "auto;" : "100%;"};
    border-radius: 0.7rem;
    display: flex;
    flex-direction: ${({ mobile }) => 
      mobile === 'true' ? "row;" : "column;"};
    ${({ mobile, votes }) => 
      mobile === 'true' && votes === 'true' && `flex-direction: row-reverse;`};
    justify-content: ${({ votes }) => 
      votes === 'true' ? `center;` : `flex-start;`};
    align-items: center;
    background-color: ${({ votes }) =>
      votes === 'true' ? `var(--votes);` : `transparent;`};
    ${({ mobile }) => mobile === 'true' && "padding: .7rem 0;"};
    li.plus,
    li.minus {
      font-size: 1.3rem;
      color: var(--addVote);
      svg {
        ${({ mobile }) => mobile === 'true' && "margin-bottom: -2px;"};
      }
      &:hover {
        cursor: pointer;
        color: var(--addVoteHov);
      }
    }
    li.vote {
      font-size: 1.6rem;
      font-weight: 700;
      margin: ${({ mobile }) => 
        mobile === 'true' ? "0 1.2rem;" : ".5rem 0;"};
      color: var(--numVotes);
    }
    li.img img {
      width: 3.9rem;
      height: 3.9rem;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  @media (max-width: 767px) {
    display: ${({ mobile }) => 
      mobile === 'true' ? "flex;" : "none;"};
  }
`;

export const CtnInfo = styled.div`
  width: 100%;
`;

export const TopInfo = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 0.8rem;
  li {
    width: auto;
  }
  li.img img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  li.isCreator p {
    background-color: var(--moderateBlue);
    border-radius: 0.5rem;
    border: 1px solid var(--white);
    font-weight: 500;
    padding: 0 1rem;
    text-align: center;
    color: white;
  }
  li.created {
    margin: 0.5rem;
    color: var(--text2);
  }
  li.name {
    color: var(--text1);
  }
  @media (min-width: 562px) {
    column-gap: 1rem;
  }
`;

export const BtnActions = styled.ul`
  display: flex;
  justify-content: flex-end;
  ${({ mobile }) => mobile && "align-items: center;"};
  column-gap: 1rem;
  font-weight: 700;
  text-align: center;
  width: auto;
  button,
  label {
    display: inline-flex;
    padding: 0.5rem 1rem;
  }
  @media (min-width: 562px) {
    column-gap: 2rem;
  }
  @media (min-width: 768px) {
    column-gap: 1.2rem;
  }
  li.btnRed button {
    color: var(--btnRed);
    font-weight: 700;
    &:hover {
      cursor: pointer;
      color: var(--btnRedHov);
    }
  }
  li.darkBlue button {
    color: var(--btnBlue);
    font-weight: 700;
    &:hover {
      cursor: pointer;
      color: var(--btnBlueHov);
    }
  }
  li.btnBlue label {
    color: var(--btnBlue);
    &:hover {
      cursor: pointer;
      color: var(--btnBlueHov);
    }
  }
  li * svg {
    font-size: 1.4rem;
    margin-right: 0.3rem;
  }
  @media (max-width: 767px) {
    display: ${({ mobile }) => 
      mobile ? "flex;" : "none;"};
    flex-wrap: wrap;
  }
`;

export const CtnTextMessage = styled.div`
  padding: 1.2rem 0;
  width: 100%;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    textarea {
      width: inherit;
      border-radius: 0.8rem;
      background-color: transparent;
      padding: 1.8rem;
      outline: none;
      resize: none;
      border: 1px solid var(--textAreaBorder);
      color: var(--text1);
      &::placeholder {
        color: var(--text2);
      }
    }
    div {
      @media (max-width: 560px) {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      button {
        color: var(--white);
        text-transform: uppercase;
        margin-top: 1rem;
        border-radius: 0.7rem;
        padding: 1rem 2rem;
        &:nth-of-type(1) {
          margin-right: 1rem;
          background-color: var(--softRed);
          &:hover {
            background-color: var(--btnCancelHov);
          }
        }
        &:nth-of-type(2) {
          background-color: var(--moderateBlue);
          &:hover {
            background-color: var(--btnSubmitHov);
          }
        }
      }
    }
  }
  p {
    color: var(--text2);  
    white-space: normal;
    span {
      color: var(--btnBlue);
      font-weight: 700;
      margin-right: .5rem;
      &.admin {
        color: var(--text1);
        background-color: var(--adminTag);
        border: 1px solid var(--text1);
        font-weight: 700;
        font-size: 1.2rem;
        text-transform: uppercase;
        padding: .2rem .5rem;
        svg {
          font-size: 1.2rem;
          margin-bottom: -2px;
        }
      }
    }  
  }
  @media (min-width: 768px) {
    padding: 1.2rem 0 0;
  }
`;

export const CtnActionsMb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const FormToSend = styled.form`
  display: flex;
  column-gap: 1.5rem;
  width: 100%;
  flex-direction: column;
  color: var(--text2);
  font-weight: 500;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  textarea {
    width: inherit;
    resize: none;
    border-radius: 0.7rem;
    background-color: transparent;
    padding: 1.8rem;
    outline: none;
    border: 1px solid var(--textAreaBorder);
    color: var(--text1);
    &::placeholder {
      color: var(--text2);
    }
  }
`;

export const ButtonSend = styled.button`
  ${({ mobile }) => mobile === 'false' && `align-self: flex-start;`};
  min-width: 10.2rem;
  color: var(--white);
  background-color: var(--moderateBlue);
  text-transform: uppercase;
  border-radius: 0.7rem;
  padding: 1rem 2rem;
  height: auto;
  &:hover {
    background-color: var(--btnSubmitHov);
  }
  @media (max-width: 767px) {
    display: ${({ mobile }) => 
      mobile === 'true' ? "inline-block;" : "none;"};
  }
`;

export const CtnReplies = styled.div`
  width: 96%;
  background-color: transparent;
  position: relative;
  margin-bottom: 1.9rem;
  @media (min-width: 768px) {
    width: 88%;
  }
  &::after {
    content: "";
    width: 0;
    height: 100%;
    position: absolute;
    border: 1px solid var(--lineReplies);
    top: 0;
    left: -4.5%;
    @media (min-width: 768px) {
      left: -6.5%;
    }
  }
`;

export const Spinner = styled.div`
  display: block;
  margin: 49px auto;
  width: 97px;
  .cssload-loading i {
    width: 49px;
    height: 49px;
    display: inline-block;
    background: rgb(237, 100, 105);
    border-radius: 50%;
  }
  .cssload-loading i:nth-of-type(1) {
    animation: cssload-loading-ani1 1s ease-in-out infinite;
    -o-animation: cssload-loading-ani1 1s ease-in-out infinite;
    -ms-animation: cssload-loading-ani1 1s ease-in-out infinite;
    -webkit-animation: cssload-loading-ani1 1s ease-in-out infinite;
    -moz-animation: cssload-loading-ani1 1s ease-in-out infinite;
  }
  .cssload-loading i:nth-of-type(2) {
    background: rgb(84, 87, 182);
    margin-left: -10px;
    animation: cssload-loading-ani1 1s ease-in-out 0.5s infinite;
    -o-animation: cssload-loading-ani1 1s ease-in-out 0.5s infinite;
    -ms-animation: cssload-loading-ani1 1s ease-in-out 0.5s infinite;
    -webkit-animation: cssload-loading-ani1 1s ease-in-out 0.5s infinite;
    -moz-animation: cssload-loading-ani1 1s ease-in-out 0.5s infinite;
  }
  @keyframes cssload-loading-ani1 {
    70% {
      transform: scale(0.5);
    }
  }

  @-o-keyframes cssload-loading-ani1 {
    70% {
      -o-transform: scale(0.5);
    }
  }

  @-ms-keyframes cssload-loading-ani1 {
    70% {
      -ms-transform: scale(0.5);
    }
  }

  @-webkit-keyframes cssload-loading-ani1 {
    70% {
      -webkit-transform: scale(0.5);
    }
  }

  @-moz-keyframes cssload-loading-ani1 {
    70% {
      -moz-transform: scale(0.5);
    }
  }
`;

export const stylesModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 375,
  width: "90%",
  bgcolor: "var(--bgCard)",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  zIndex: 50
};

export const ModalInfo = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text1);
  }
  p {
    margin: 2rem 0;
    color: var(--text2);
  }
  div {
    display: grid;
    row-gap: 0.8rem;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
    button {
      color: var(--white);
      border-radius: 0.7rem;
      font-weight: 500;
      text-transform: uppercase;
      padding: 1rem 0;
    }
    button:nth-of-type(1) {
      background-color: var(--grayBlue);
      &:hover {
        background-color: var(--grayBlueLight);
      }
    }
    button:nth-of-type(2) {
      background-color: var(--softRed);
      &:hover {
        background-color: var(--paleRed);
      }
    }
  }
`;

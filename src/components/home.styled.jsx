import styled from "@emotion/styled";

export const MainTag = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 3.2rem 0;
  position: relative;
  background-color: var(--bg);
  @media (min-width: 982px) {
    padding: 6.4rem 0;
  }
`;

export const CtnMain = styled.div`
  max-width: 73rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
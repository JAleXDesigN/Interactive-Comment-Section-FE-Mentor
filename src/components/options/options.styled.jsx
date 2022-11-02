import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { IconButton, Tooltip } from "@mui/material";

const stylesShared = css`
  position: fixed;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 2.4rem;
  border-radius: 50%;
  transition: bottom .3s cubic-bezier(.84,.42,.57,.73);
`;

export const BtnExpand = styled(IconButton)`
  ${stylesShared}
  bottom: 2rem;
  right: 2rem;
  border: 2px solid var(--moderateBlue);
  color: var(--moderateBlue);
  background-color: var(--white);
  &:hover {
    background-color: var(--white)
  }
`;

export const BtnArrow = styled(IconButton)`
  ${stylesShared}
  bottom: ${({open}) => open ? '8rem;' : '2rem;'};;
  right: 2rem;
  background-color: var(--moderateBlue);
  border: 2px solid ${({dark}) => dark === 'true' ? 'var(--white);' : 'var(--moderateBlue);'};;
  color: var(--white);
  &:hover {
    background-color: var(--lightGBlue)
  }
`;

export const BtnMode = styled(IconButton)`
  ${stylesShared}
  bottom: ${({open}) => open ? '14rem;' : '2rem;'};
  right: 2rem;
  border: 2px solid ${({dark}) => dark === 'true' ? '#ffbb00;' : 'var(--grayBlue);'};
  color: ${({dark}) => dark === 'true' ? '#ffbb00;' : 'var(--darkBlue);'};
  background-color: var(--white);
  svg {
    transform: scale(1) rotate(0deg);
    transition: transform .3s ease;
  }  
  &:hover {
    background-color: var(--white);
    svg {
      transform: scale(1.2) ${({dark}) => dark === 'true' ? 'rotate(-360deg);' : 'rotate(-30deg);'};
      transition: transform .3s ease;
    }
  }
`;

export const BtnSignOut = styled(IconButton)`
  ${stylesShared}
  bottom: ${({open}) => open ? '20rem;' : '2rem;'};
  right: 2rem;
  background-color: var(--softRed);
  border: 2px solid ${({dark}) => dark === 'true' ? 'var(--white);' : 'var(--softRed);'};
  color: var(--white);
  &:hover {
    background-color: var(--paleRed)
  }
`;

export const TooltipOpt = styled(({ className, ...other }) => (
  <Tooltip classes={{ tooltip: className }} {...other} />
))`
  background-color: var(--white);
  font-size: 1.6rem;
  color: var(--moderateBlue);
  border: 1px solid var(--moderateBlue);
  font-weight: 700;
`;

export const TooltipArrow = styled(({ className, ...other }) => (
  <Tooltip classes={{ tooltip: className }} {...other} />
))`
  background-color: var(--moderateBlue);
  font-size: 1.6rem;
  color: var(--white);
  border: 1px solid var(--white);
  font-weight: 700;
`;

export const TooltipMode = styled(({ className, ...other }) => (
  <Tooltip classes={{ tooltip: className }} {...other} />
))`
  background-color: var(--darkBlue2);
  font-size: 1.6rem;
  color: var(--white);
  border: 1px solid var(--white);
  font-weight: 700;
`;
export const TooltipSignOut = styled(({ className, ...other }) => (
  <Tooltip classes={{ tooltip: className }} {...other} />
))`
  color: var(--white);
  background-color: var(--softRed);
  border: 1px solid  var(--white);   
  font-size: 1.6rem;
  font-weight: 700;
`;
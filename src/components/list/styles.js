import styled, { css, keyframes } from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const scaleDown = keyframes`
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.5);
    }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const scale = ({time = "1s", type = "ease"} = {}) => css`animation: ${time} ${scaleDown} ${type}`;

const Ul = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${props => props.fixed && css`
    background: #ffffff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 500px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20;
    transform: scale(0.5);
    ${scale}
    z-index: 1;
  `}
`;

const Li = styled.li`
  padding: 0 8px;
`;

const LoadingWrapper = styled.div`
  display: flex;
  overflow: scroll;
  width: 100%;
`;

const Loading = styled(AiOutlineLoading3Quarters)`
  color: #000;
  margin: 0 auto;
  animation: ${rotate} 2s linear infinite;
`;

export {
    Ul,
    Li,
    LoadingWrapper,
    Loading,
};

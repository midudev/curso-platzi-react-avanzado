import styled, { css, keyframes } from "styled-components";

const fadeInBlur = keyframes`
    from {
      filter: blur(5px);
      opacity: 0;
    }
    to {
      filter: blur(0);
      opacity: 1;
    }
`;

const fadeIn = ({time = "1s", type = "ease"} = {}) => css`animation: ${time} ${fadeInBlur} ${type}`;

const Image = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

const ImageWrapper = styled.div`
  display: block;
  height: 0;
  overflow:hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

const Wrapper = styled.article`
  border-radius: 10px;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
  margin-top: 16px;
  width: 100%;
  min-height: 250px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  height: 60px;
  & svg {
    margin-right: 4px;
  }
`;

export {
    Image,
    ImageWrapper,
    Button,
    Wrapper,
};

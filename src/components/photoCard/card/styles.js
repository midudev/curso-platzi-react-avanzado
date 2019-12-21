import styled from "styled-components";

const Image = styled.img`
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

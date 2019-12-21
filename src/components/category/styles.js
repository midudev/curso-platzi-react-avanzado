import styled from "styled-components";

const A = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

const Img = styled.img`
  text-decoration: none;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: 75px;
  overflow: hidden;
  object-fit: cover;
  width: 75px;
`;

export { A, Img };

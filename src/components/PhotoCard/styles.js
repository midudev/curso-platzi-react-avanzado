import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`
export const Img = styled.img`
  ${fadeIn()};
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.4rem;
  & svg {
    margin-right: 5px;
  }
`
export const Article = styled.article`
  min-height: 300px;
`

export const Item = styled.li`
  background-color: #fff;
  margin-top: 1rem;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  box-shadow: 0 5px 4px rgba(0,0,0,0.2);
  `

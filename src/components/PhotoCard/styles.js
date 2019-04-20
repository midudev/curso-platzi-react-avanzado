import styled from 'styled-components'

export const Article = styled.article``

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  box-shadow: 0px 10px 14px rgba(0,0,0,.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
`

export const Button = styled.button`
  align-items: center;
  display: inline-flex;
  & span {
    margin-left: 4px;
  }
`

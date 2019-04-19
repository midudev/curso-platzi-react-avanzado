import styled from 'styled-components'

export const Article = styled.article`
`

export const Img = styled.img`
  border-radius: 10px;
  box-shadow: 0px 10px 14px rgba(0,0,0,.2);
  object-fit: cover;
  overflow: hidden;
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

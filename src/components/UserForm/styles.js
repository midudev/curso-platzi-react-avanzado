import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
`

export const Paragraph = styled.p`
  font-size: 0.8em;
  text-align: center;
  margin: 20px 0;
`

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 8px 10px;
  display: block;
  width: 100%;

  &::placeholder {
    color: #e0e0e0;
  }
  &:focus {
    outline: none;
  }

  &[disabled] {
    opacity: 0.4;
  }
`

export const Button = styled.button`
  background: #2492f4;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  cursor: pointer;
  &[disabled] {
    cursor: wait;
    opacity: 0.4;
  }
`
export const Title = styled.h2`
  font: 16px;
  font-weight: 500;
  padding: 8px 0;
  text-align: center;
`
export const ButtomLink = styled.button`
  color: #2492f4;
  cursor: pointer;
`

import styled, { css } from 'styled-components'
import { skeletonStyle } from '../../styles/skeleton/styles'

export const ContainerCategorySkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CategoryImage = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  ${(props) => css`
    ${skeletonStyle(props.light)}
  `}
`

export const CategoryTitle = styled.div`
  width: 26px;
  height: 15px;
  margin-top: 8px;
  ${(props) => css`
    ${skeletonStyle(props.light)}
  `}
`

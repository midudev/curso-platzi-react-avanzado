import styled, { css } from 'styled-components'
import { skeletonStyle } from '../../styles/skeleton/styles'

export const FavContainerSkeleton = styled.div`
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  padding-top: 32px;
`

export const FavImage = styled.div`
  object-fit: cover;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 150px;
  ${(props) => css`
    ${skeletonStyle(props.light)}
  `}
`

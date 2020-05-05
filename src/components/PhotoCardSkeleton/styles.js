import styled, { css } from 'styled-components'
import { skeletonStyle } from '../../styles/skeleton/styles'

export const ContainerPhotoCardSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardImage = styled.div`
  width: 100%;
  height: 250px;
  ${(props) => css`
    ${skeletonStyle(props.light)}
  `}
`

export const CardLikes = styled.div`
  width: 40px;
  height: 25px;
  margin: 10px 95% 10px 5%;
  ${(props) => css`
    ${skeletonStyle(props.light)}
  `}
`

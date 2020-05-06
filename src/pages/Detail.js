import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { HelmetLayout } from '../components/Helmet'

export const Detail = ({ detailId }) => {
  return (
    <HelmetLayout title={`Fotografia ${detailId}`}>
      <PhotoCardWithQuery detailId={detailId} />
    </HelmetLayout>
  )
}

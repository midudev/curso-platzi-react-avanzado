import { ListOfPhotoCards } from '../../components/ListOfPhotoCards'
import { Logo } from '../../components/Logo'

import { ListOfCategories } from '../../components/ListOfCategories'
import { useQueryListOfPhotos } from '../../hooks/useQueryListOfPhotos.jsx'

export const Home = ({ id }) => {
  const { loading, photos, error } = useQueryListOfPhotos({ categoryId: id })

  return (
    <>
      <Logo />
      <ListOfCategories />
      {photos ? <ListOfPhotoCards photos={photos} /> : null}
      {loading ? <p>Loading photos...</p> : null}
      {error ? <p>Algo has hecho que lo has roto!</p> : null}
    </>
  )
}

import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'
import { withPhotos } from '../hoc/wihtPhotos'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)

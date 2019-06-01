import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'
import { withPhotos } from '../hocs/withPhotos'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)

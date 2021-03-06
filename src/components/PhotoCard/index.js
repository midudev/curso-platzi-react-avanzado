import React, { Fragment} from 'react';
import {Link} from '@reach/router';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation';

import { Article, ImgWrapper, Img } from './styles';

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id,liked, likes = 0, src = DEFAULT_IMAGE }) => {

    const [show, refElement] = useNearScreen();

    return (
        <Article ref={refElement}>
            {show &&
                <Fragment>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </Link>
                    <ToggleLikeMutation>
                        {
                            (toggleLike) => {
                                const handleFavClick = () => {
                                    toggleLike({variables: {
                                        input: {id}
                                    }})
                                }
                                return <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
                            }
                        }
                    </ToggleLikeMutation>
                </Fragment>
            }
        </Article>
    )
}
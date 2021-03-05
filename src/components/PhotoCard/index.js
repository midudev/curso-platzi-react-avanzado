import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation';

import { Article, ImgWrapper, Img } from './styles';

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {

    const [show, refElement] = useNearScreen();
    const key = `like-${id}`;
    const [liked, setLiked] = useLocalStorage(key, false);


    return (
        <Article ref={refElement}>
            {show &&
                <Fragment>
                    <a href={`/?detail=${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>
                    <ToggleLikeMutation>
                        {
                            (toggleLike) => {
                                const handleFavClick = () => {
                                    !liked && toggleLike({variables: {
                                        input: {id}
                                    }})
                                    setLiked(!liked)
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
import React, { Fragment, useEffect, useRef, useState } from 'react';
import {useLocalStorage} from '../../hooks/useLocalStorage';
import {useNearScreen} from '../../hooks/useNearScreen';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Article, ImgWrapper, Img, Likes } from './styles';

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
   
    const [show, refElement] = useNearScreen();
    const key = `like-${id}`;
    const [liked, setLiked] = useLocalStorage(key, false);
    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    return (
        <Article ref={refElement}>
            {show &&
                <Fragment>
                    <a href={`/details/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>
                    <Likes><button onClick={() => setLiked(!liked)}><Icon size="20px" color="#00bdff" /></button> {likes} Likes!</Likes>
                </Fragment>
            }
        </Article>
    )
}
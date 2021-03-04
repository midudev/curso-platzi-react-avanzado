import React, { Fragment, useEffect, useRef, useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Article, ImgWrapper, Img, Likes } from './styles';

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const refElement = useRef(null);
    const [show, setShow] = useState(false);
    const key = `like-${id}`;
    const [liked, setLiked] = useState(() =>{
        try {
            const like = window.localStorage.getItem(key);
            return JSON.parse(like);
        } catch (error) {
            console.error(error.message)
            return false;
        }
    });

    const setLocalStorage = (value) => {
        try{
            window.localStorage.setItem(key, value);
            setLiked(value)
        }catch(error){
            console.error(error.message);
        }
    }

    const Icon = liked? MdFavorite: MdFavoriteBorder;

    useEffect(() => {
        Promise.resolve(
            typeof window.IntersectionObserver !== 'undefined'
                ? window.IntersectionObserver : import('intersection-observer')
        ).then(() => {
            const observer = new window.IntersectionObserver((entries) => {
                const { isIntersecting } = entries[0];
                console.log(isIntersecting);
                if (isIntersecting) {
                    setShow(true)
                    observer.disconnect();
                }
            })
            observer.observe(refElement.current);
        })
    }, [refElement])

    return (
        <Article ref={refElement}>
            {show &&
                <Fragment>
                    <a href={`/details/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>
                    <Likes><button onClick={() => setLocalStorage(!liked)}><Icon size="20px" color="#00bdff" /></button> {likes} Likes!</Likes>
                </Fragment>
            }
        </Article>
    )
}
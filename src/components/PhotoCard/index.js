import React, { Fragment, useEffect, useRef, useState } from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { Article, ImgWrapper, Img, Button } from './styles';

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const refElement = useRef(null);
    const [show, setShow] = useState(false);
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
                    <Button><div><MdFavoriteBorder size="20px" color="#00bdff" /></div> {likes} Likes!</Button>
                </Fragment>
            }
        </Article>
    )
}
import React from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import {ImgWrapper, Img, Button} from './styles';

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"
export const PhotoCard = ({id, likes = 0, src=DEFAULT_IMAGE}) =>{
    return(
        <article>
            <a href={`/details/${id}`}>
                <ImgWrapper>
                    <Img src={src}/>
                </ImgWrapper>
            </a>
            <Button><div><MdFavoriteBorder size="20px" color="#00bdff"/></div> {likes} Likes!</Button>
        </article>
    )
}
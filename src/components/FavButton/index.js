import React from 'react';
import { Likes } from './styles';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
export const FavButton = ({ likes, liked, onClick }) => {
    const Icon = liked ? MdFavorite : MdFavoriteBorder;
    return (
        <Likes><button onClick={onClick}><Icon size="20px" color="#00bdff" /></button> {likes} Likes!</Likes>
    )
}
import React, { Fragment, useContext } from 'react';
import { Context } from '../../Context';
import { Likes } from './styles';
import PropTypes from 'prop-types';
import { ErrorMessage } from '../ErrorMessage';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
export const FavButton = ({ likes, liked, onClick }) => {
    const Icon = liked ? MdFavorite : MdFavoriteBorder;
    const { isAuth } = useContext(Context);
    console.log(isAuth);
    return (
        <Fragment>
            <Likes><button onClick={onClick}><Icon size="20px" color="#00bdff" /></button> {likes} Likes!</Likes>
            {!isAuth && < ErrorMessage message='You must be log in to like the photo' />}
        </Fragment>
    )
}

FavButton.propTypes = {
    liked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}
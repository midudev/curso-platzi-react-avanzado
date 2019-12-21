import PropTypes from "prop-types";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

import {
    Button,
    Image,
    ImageWrapper,
    Wrapper,
} from "./styles";

const Card = (props) => {
    const {
        id,
        likes,
        src,
    } = props;
    return (
        <Wrapper>
            <a href={`/detail/${id}`}>
                <ImageWrapper>
                    <Image src={src} alt={`Imagen número ${id}`} />
                </ImageWrapper>
            </a>
            <Button type="button">
                <FaRegHeart size="24" />{likes} likes.
            </Button>
        </Wrapper>
    );
};

Card.propTypes = {
    id: PropTypes.number,
    likes: PropTypes.number,
    src: PropTypes.string,
};

Card.defaultProps = {
    id: 0,
    likes: 0,
    src: "https://picsum.photos/500",
};

export default Card;

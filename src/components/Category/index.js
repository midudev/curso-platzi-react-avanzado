import React from 'react';
import { Link } from "@reach/router";
import { Anchor, Image } from './styles';
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

export const Category = ({ cover = DEFAULT_IMAGE, id, emoji = "?" }) => {
    return (
        <Anchor href={`/pet/${id}`}>
            <Image src={cover} alt="Category" />
            {emoji}
        </Anchor>
    )
}
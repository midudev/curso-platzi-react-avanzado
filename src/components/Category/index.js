import React from "react";
import {Anchor, Image } from './styles';

const DEFAULT_IMAGE = "https://imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => {
  return (

    <Anchor href={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  );
};
// export default index;

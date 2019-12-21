import PropTypes from "prop-types";
import React from "react";

import { A, Img } from "./styles";

const Category = props => {
    const { cover, emoji, path } = props;
    return (
        <A href={path}>
            <Img src={cover} alt="Category cover" />
            {emoji}
        </A>
    );
};

Category.propTypes = {
    cover: PropTypes.string,
    emoji: PropTypes.string,
    path: PropTypes.string,
};

Category.defaultProps = {
    cover: "https://picsum.photos/75",
    emoji: "?",
    path: "",
};

export default Category;

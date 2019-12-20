import React from "react";

import Category from "../category";

import { Ul, Li } from "./styles";

const List = () => {
    return (
        <Ul>
            {
                [1, 2, 3, 4, 5].map(category => <Li key={category}><Category /></Li>)
            }
        </Ul>
    );
};

export default List;

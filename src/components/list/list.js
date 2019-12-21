import React from "react";

import Category from "../category";

import { Ul, Li } from "./styles";
import { categories } from "../../../api/db.json";

const List = () => {
    return (
        <Ul>
            {
                categories.map(category => (
                    <Li key={category.id}>
                        <Category
                            emoji={category.emoji}
                            path={category.path}
                            cover={category.cover}
                        />
                    </Li>
                ))
            }
        </Ul>
    );
};

export default List;

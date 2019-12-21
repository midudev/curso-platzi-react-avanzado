import React from "react";

import Card from "../card";

const List = () => (
    <ul>
        {
            [1, 2, 3].map(index => <li key={index}><Card /></li>)
        }
    </ul>
);

export default List;

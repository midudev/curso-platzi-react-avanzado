import React from "react";

import Card from "../card";
import { photos } from "../../../../api/db.json";

const List = () => (
    <ul>
        {
            photos.map(photo => (
                <li key={photo.id}>
                    <Card
                        id={photo.id}
                        src={photo.src}
                        likes={photo.likes}
                    />
                </li>
            ))
        }
    </ul>
);

export default List;

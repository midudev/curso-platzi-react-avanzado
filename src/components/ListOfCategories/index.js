import React from "react";
import { List, Item } from "./styles";
import { Category } from "../Category";

export const ListOfCategories = () => {
  return (
    <List>
      {[1, 2, 3, 4].map((category) => (
        <Item>
          <Category key={category} category={category} />
        </Item>
      ))}
    </List>
  );
};

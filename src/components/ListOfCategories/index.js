import React from "react";
import { useState, useEffect } from "react";
import { List, Item } from "./styles";
import { Category } from "../Category";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(function () {
    window
      //.fetch("https://petgram-iktcw86bz-julianmarsal.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);

  return (
    <List>
      {categories.map((category) => (
        <Item>
          <Category key={category.id} category {...category} />
        </Item>
      ))}
    </List>
  );
};

import React, { useState, useEffect } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
// import data from "../../../api/db.json";

// export function ListOfCategories() {
//     return (
//       <List>
//         {categories.map((category) => (
//           <Item key={category}>
//             <Category></Category>
//           </Item>
//         ))}
//       </List>
//     );
// }

// export default index

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    fetch("https://petgram-yhorman-ka67kuh78-yhormanp.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);

  useEffect( function (){
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed); 
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = ( fixed ) => (
    <List className={fixed ? "fixed" : ""}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );

  return (
  <>
    {renderList()} 
    {showFixed && renderList(true)}
  </>
  );
};

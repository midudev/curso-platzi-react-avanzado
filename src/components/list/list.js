/* global document, window, */
import
React,
{
    useEffect,
    useState,
}
    from "react";

import Category from "../category";

import { Ul, Li } from "./styles";

const List = () => {
    const [ categories, setCategories ] = useState([]);
    const [ showFixed, setShowFixed ] = useState(false);
    
    useEffect(() => {
        window.fetch("https://api.petgram.lab.sh4nn0nb1t.dev/categories")
            .then(response => response.json())
            .then(response => {
                setCategories(response);
            });
    }, []);
    
    useEffect(() => {
        const onScroll = () => {
            const onShowFixed = window.scrollY > 200;
            if (showFixed !== onShowFixed) {
                setShowFixed(onShowFixed);
            }
        };
        
        document.addEventListener("scroll", onScroll);
        
        return () => document.removeEventListener("scroll", onScroll);
    }, [showFixed]);
    
    const list = (fixed) => (
        <Ul className={(fixed) ? "fixed" : ""}>
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

    return (
        list(showFixed)
    );
};

export default List;

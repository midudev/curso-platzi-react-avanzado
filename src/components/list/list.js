/* global document, window, */
import React, { useEffect, useState } from "react";

import Category from "../category";

import { Ul, Li, LoadingWrapper, Loading } from "./styles";

const useCategoriesData = () => {
    const [ categories, setCategories ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
        window.fetch("https://api.petgram.lab.sh4nn0nb1t.dev/categories")
            .then(response => response.json())
            .then(response => {
                setCategories(response);
                setLoading(false);
            });
    }, []);
    
    return { categories, loading };
};

const List = () => {
    const {
        categories,
        loading,
    } = useCategoriesData();
    const [ showFixed, setShowFixed ] = useState(false);
    
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
        <Ul fixed={fixed}>
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
    
    if(loading) {
        return (
            <LoadingWrapper>
                <Loading size="45" />
            </LoadingWrapper>
        );
    }

    return list(showFixed);
};

export default List;

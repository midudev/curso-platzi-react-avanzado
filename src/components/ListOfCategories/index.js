import React, { useState, useEffect, Fragment } from 'react';
import { Category } from '../Category/index';
import { Loader } from '../Loader/index';

import { List, Item, Rapper } from './styles';

function useCategoriesData() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            try {
                const response = await window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories');
                if (!response.ok) {
                    throw new Error('HTTP Status ' + response.status)
                }
                const data = await response.json();

                setCategories(data);
            } catch (error) {
                console.error(error.message);
                setError('An error ocurred getting the list of categories')
            }
            setLoading(false);
        }
        fetchCategories();
    }, []);

    return { categories, loading, error }
}

export const ListOfCategories = () => {
    const { categories, loading, error } = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false);


    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 205
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)
        return () => document.removeEventListener('scroll', onScroll) //Clean effect
    }, [showFixed]);

    const renderList = (fixed) => {
        if (loading) return <Loader/>
        if (error) return error
        return (
            <Rapper>
                <List fixed={fixed}>
                    {
                        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
                    }
                </List>
            </Rapper>
        )

    }

    return (
        <Fragment>
            {renderList()}
            { showFixed && renderList(true)}
        </Fragment>
    )
}
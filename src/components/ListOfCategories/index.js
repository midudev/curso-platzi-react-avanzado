import React, { useState, useEffect, Fragment } from 'react';
import { Category } from '../Category/index';
// import { categories as mockCategories } from '../../../api/db.json';

import { List, Item, Rapper } from './styles';
export const ListOfCategories = () => {
    const [categories, setCategories] = useState([])
    const [showFixed, setShowFixed] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories');
                if (!response.ok) {
                    throw new Error('HTTP Status ' + response.status)
                }
                const data = await response.json();

                setCategories(data);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchCategories();
    }, []);
    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 205
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)
        return () => document.removeEventListener('scroll', onScroll) //Clean effect
    }, [showFixed]);

    const renderList = (fixed) => (
        <Rapper>
            <List className={fixed ? 'fixed' : ''}>
                {
                    categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
                }
            </List>
        </Rapper>

    )

    return (
        <Fragment>
            {renderList()}
            { showFixed && renderList(true)}
        </Fragment>
    )
}
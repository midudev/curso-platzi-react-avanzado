import React, {useState, useEffect} from 'react';
import { Category } from '../Category/index';
// import { categories as mockCategories } from '../../../api/db.json';

import { List, Item, Rapper } from './styles';
export const ListOfCategories = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        const fetchCategories = async () =>{
            try {
                const response = await window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories');
                if (!response.ok){
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
    return (
        <Rapper>
            <List>
                {
                    categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
                }
            </List>
        </Rapper>
    )
}
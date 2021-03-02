import React from 'react';
import {Category} from '../Category/index';
import {categories} from '../../../api/db.json';

import {List, Item} from './styles';
export const ListOfCategories = () => {
    return(
        <List>
            {
                categories.map(category => <Item key={category.id}><Category {...category}/></Item>)
            }
        </List>
    )
}
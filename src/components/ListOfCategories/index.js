import React, { useState, useEffect, Fragment } from 'react';
import {useOnScrollEvent} from '../../hooks/useOnScrollEvent';
import {useFetchData} from '../../hooks/useFetchData';
import { Category } from '../Category/index';
import { Loader } from '../Loader/index';
import { ErrorMessage } from '../ErrorMessage/index';

import { List, Item, Rapper } from './styles';

export const ListOfCategories = () => {
    const BASE_URL = 'https://petgram-server-edsf8xpy2.now.sh/categories';

    const { data: categories, loading, error } = useFetchData(BASE_URL)
    const [showFixed] = useOnScrollEvent(205, 'scrollY');

    const renderList = (fixed) => {
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
    if (loading) return <Loader />
    if (error) return <ErrorMessage message={error} />
    return (
        <Fragment>
            {renderList()}
            { showFixed && renderList(true)}
        </Fragment>
    )
}
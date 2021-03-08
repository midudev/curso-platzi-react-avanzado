import React, { Fragment } from 'react';
import { useOnScrollEvent } from '../../hooks/useOnScrollEvent';
import { useFetchData } from '../../hooks/useFetchData';
import { Category } from '../Category/index';
import { Loader } from '../Loader/index';
import { ErrorMessage } from '../ErrorMessage/index';

import { List, Item, Rapper } from './styles';

export const ListOfCategoriesComponent = () => {
    const BASE_URL = 'https://petgram-server-mateombar.vercel.app/categories';

    const { data: categories, loading, error } = useFetchData(BASE_URL)
    const [showFixed] = useOnScrollEvent(205, 'scrollY');

    const renderList = (fixed) => {
        return (
            <Rapper>
                <List fixed={fixed}>
                    {
                        categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
                    }
                </List>
            </Rapper>
        )

    }
    if (loading) return <Loader />
    if (error) return <ErrorMessage message={error} title={true}/>
    return (
        <Fragment>
            {renderList()}
            { showFixed && renderList(true)}
        </Fragment>
    )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
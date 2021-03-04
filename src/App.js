import React, {Fragment} from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';
import {PhotoCardWithQuery} from './container/PhotoCardWithQuery';
import { GlobalStyle } from './styles/GlobalStyles';
export const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search);
    const detailId = urlParams.get('detail');
    console.log(detailId);
    return (
        <React.Fragment>
            <GlobalStyle />
            <Logo />
            {
                detailId ? <PhotoCardWithQuery id={detailId}/>:
                    <Fragment>
                        <ListOfCategories />
                        <ListOfPhotoCards categoryId={2} />
                    </Fragment>
            }
        </React.Fragment>
    )
}
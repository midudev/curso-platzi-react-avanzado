import React, { Fragment } from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { Logo } from './components/Logo';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';
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
                detailId
                    ? <PhotoCardWithQuery id={detailId} />
                    :
                    <Fragment>
                        <ListOfCategories />
                        <ListOfPhotoCards categoryId={1} />
                    </Fragment>
            }
        </React.Fragment>
    )
}
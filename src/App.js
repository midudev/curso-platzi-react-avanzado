import React, {Fragment} from 'react';
import { Home } from './pages/Home'
import { Logo } from './components/Logo';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';

import { Router } from '@reach/router';

import { GlobalStyle } from './styles/GlobalStyles';
export const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search);
    const detailId = urlParams.get('detail');
    console.log(detailId);
    return (
        <Fragment>
            <GlobalStyle />
            <Logo />
            {
                detailId
                    ? <PhotoCardWithQuery id={detailId} />
                    : <Router>
                        <Home path='/' />
                        <Home path='/pet/:id' />
                    </Router>
            }
        </Fragment>
    )
}
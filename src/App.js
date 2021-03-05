import React, { Fragment } from 'react';
import { Home } from './pages/Home'
import { Logo } from './components/Logo';
import { Detail } from './pages/Detail';
import { Router } from '@reach/router';

import { GlobalStyle } from './styles/GlobalStyles';
export const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Logo />
            <Router>
                <Detail path='/detail/:detailId'/>
                <Home path='/' />
                <Home path='/pet/:id' />
            </Router>
        </Fragment>
    )
}
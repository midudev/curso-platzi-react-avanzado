import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { Home } from './pages/Home'
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { Detail } from './pages/Detail';



import { GlobalStyle } from './styles/GlobalStyles';
export const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Logo />
            <Router>
                <Detail path='/detail/:detailId' />
                <Home path='/' />
                <Home path='/pet/:id' />
            </Router>
            <Navbar />

        </Fragment>
    )
}
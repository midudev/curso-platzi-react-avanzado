import React, { Fragment, useContext } from 'react';
import { Redirect, Router } from '@reach/router';
import { Context } from './Context';
import { Home } from './pages/Home'
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotFound } from './pages/NotFound';
import { NotRegisteredUser } from './pages/NotRegisteredUser';

import { GlobalStyle } from './styles/GlobalStyles';

export const App = () => {
    const { isAuth } = useContext(Context);
    return (
        <Fragment>
            <GlobalStyle />
            <Logo />
            <Router>
                <NotFound default/>
                <Detail path='/detail/:detailId' />
                <Home path='/' />
                <Home path='/pet/:categoryId' />
                {!isAuth && <NotRegisteredUser path='/login' />}
                {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
                {!isAuth && <Redirect noThrow from='/user' to='/login' />}
                {isAuth && <Redirect noThrow from='/login' to='/' />}
                <Favs path='favs' />
                <User path='user' />
            </Router>
            <Navbar />

        </Fragment>
    )
}
import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import Context from './Context';
import { Home } from './pages/Home'
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';

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
            <Context.Consumer>
                {
                    ({ isAuth }) =>
                        isAuth
                            ?
                            <Router>
                                <Favs path='favs' />
                                <User path='user' />
                            </Router>
                            :
                            <Router>
                                <NotRegisteredUser path='favs' />
                                <NotRegisteredUser path='user' />
                            </Router>
                }

            </Context.Consumer>
            <Navbar />

        </Fragment>
    )
}
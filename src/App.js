import React, { Fragment, useContext, Suspense } from 'react';
import { Redirect, Router } from '@reach/router';
import { Context } from './Context';
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';

import { GlobalStyle } from './styles/GlobalStyles';

const Favs = React.lazy(() => import('./pages/Favs'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Detail = React.lazy(() => import('./pages/Detail'));
const Home = React.lazy(() => import('./pages/Home'));
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'));
const User = React.lazy(() => import('./pages/User'));
// const component = React.lazy(() => import());
export const App = () => {
    const { isAuth } = useContext(Context);
    return (
        <Fragment>
            <GlobalStyle />
            <Logo />
            <Suspense fallback={<Loader />}>
                <Router>
                    <NotFound default />
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

            </Suspense>
        </Fragment>
    )
}
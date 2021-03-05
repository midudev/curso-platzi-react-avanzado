import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { Home } from './pages/Home'
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';


const UserLogged = ({ children }) => {
    return children({ isAuth: false })
}
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
            <UserLogged>
                {
                    ({ isAuth }) =>
                        isAuth
                            ?
                            <Router>
                                <Favs path='/favs' />
                                <User path='/user' />
                            </Router>
                            :
                            <Router>
                                <NotRegisteredUser path='/favs' />
                                <NotRegisteredUser path='/user' />
                            </Router>
                }

            </UserLogged>
            <Navbar />

        </Fragment>
    )
}
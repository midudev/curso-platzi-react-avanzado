import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';
import { GlobalStyle } from './styles/GlobalStyles';
export const App = () => (
    <React.Fragment>
        <GlobalStyle />
        <Logo/>
        <ListOfCategories />
        <ListOfPhotoCards categoryId={2}/>
    </React.Fragment>
)
import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyle } from './GlobalStyles';
export const App = () => (
    <React.Fragment>
        <GlobalStyle />
        <ListOfCategories />
    </React.Fragment>
)
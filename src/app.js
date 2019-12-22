import React from "react";

import GlobalStyles from "./globalStyles";
import {
    List,
    Logo,
    PhotoCard
} from "./components";

const App = () => (
    <>
        <GlobalStyles />
        <Logo />
        <List />
        <PhotoCard.List />
    </>
);

export default App;

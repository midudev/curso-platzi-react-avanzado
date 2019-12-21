import React from "react";

import GlobalStyles from "./globalStyles";
import { List, PhotoCard } from "./components";

const App = () => (
    <>
        <GlobalStyles />
        <List />
        <PhotoCard.List />
    </>
);

export default App;

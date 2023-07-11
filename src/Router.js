import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from './Menu/Menu.js';
import Content from './Content/Content.js';

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu/>}></Route>
                <Route path="/Content" element={<Content/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
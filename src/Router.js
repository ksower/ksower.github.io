import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home/Menu.js';
import Content from './Content/Content.js';

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Content" element={<Content/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
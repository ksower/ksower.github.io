import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PcHome from './PC/Home/Menu.js';
import PcContent from './PC/Content/Content.js';

//import MobileHome from './Mobile/Home/Home.js';
import MobileContent from './Mobile/Content/Content.js';

function Router(){
    const [viewContent, setViewContent] = useState(<PcContent/>);

    const handleResize = () => {
        if( window.innerWidth < 600 ){ setViewContent(<MobileContent/>); }
        else{ setViewContent(<PcContent/>); }
    };
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PcHome/>}></Route>
                <Route path="/Content" element={viewContent}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
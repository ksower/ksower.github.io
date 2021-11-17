import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import Nav from './Nav.js';
import Home from './content/Home.js';
import Profile from './content/Profile.js';
import Skill from './content/Skill.js';
import Project from './content/Project.js';
import Contact from './content/Contact.js';

function App() {
    const [current, setCurrent] = useState('HOME');
    const [scrollY, setScrollY] = useState(0);

    function handleScroll(){
        setScrollY(window.pageYOffset);

        // if(scrollY > document.querySelector('.Contact').offsetTop){ setCurrent('CONTACT'); }
        if(scrollY > document.querySelector('.Project').offsetTop -300){ setCurrent('PROJECT'); }
        else if(scrollY > document.querySelector('.Skill').offsetTop -300){ setCurrent('SKILL'); }
        else if(scrollY > document.querySelector('.Profile').offsetTop -300){ setCurrent('PROFILE'); }
        else{ setCurrent('HOME'); }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    function clickMenu(_menu){
        if(_menu === 'Home'){ document.querySelector('.Home').scrollIntoView({behavior:'smooth'}); }
        else if(_menu === 'Profile'){ document.querySelector('.Profile').scrollIntoView({behavior:'smooth'}); }
        else if(_menu === 'Skill'){ document.querySelector('.Skill').scrollIntoView({behavior:'smooth'}); }
        else if(_menu === 'Project'){ document.querySelector('.Project').scrollIntoView({behavior:'smooth'}); }
    }

    return (
        <div className="App">
            <Nav cur={current} goMenu={(_menu) => clickMenu(_menu)}/>

            <Home/>
            <Profile/>
            <Skill/>
            <Project/>
        </div>
    );
}

export default App;

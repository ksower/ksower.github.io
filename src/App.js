import React, { useState, useEffect, useRef } from 'react';
import style from './App.module.css';

import backImg from './images/background_2.jpg';
import './fonts/font.css';

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

        if(scrollY > document.querySelector('.C').offsetTop - 300){ setCurrent('CONTACT'); }
        else if(scrollY > document.querySelector('.Pr').offsetTop -300){ setCurrent('PROJECT'); }
        else if(scrollY > document.querySelector('.S').offsetTop -300){ setCurrent('SKILL'); }
        else if(scrollY > document.querySelector('.P').offsetTop -300){ setCurrent('PROFILE'); }
        else{ setCurrent('HOME'); }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    function clickMenu(_menu){
        if(_menu === 'Home'){ document.querySelector('.H').scrollIntoView({behavior:'smooth'}); }
        else if(_menu === 'Profile'){ document.querySelector('.P').scrollIntoView({behavior:'smooth'}); }
        else if(_menu === 'Skill'){ document.querySelector('.S').scrollIntoView({behavior:'smooth'}); }
        else if(_menu === 'Project'){ document.querySelector('.Pr').scrollIntoView({behavior:'smooth'}); }
        else if(_menu === 'Contact'){ document.querySelector('.C').scrollIntoView({behavior:'smooth'}); }
    }

    return (
        <div className={style.App}>
            <img className={style.back} src={backImg}/>

            <Nav cur={current} goMenu={(_menu) => clickMenu(_menu)}/>
            
            <span className='H'></span>
            <Home/>
            <span className='P'></span>
            <Profile/>
            <span className='S'></span>
            <Skill/>
            <span className='Pr'></span>
            <Project/>
            <span className='C'></span>
            <Contact/>
        </div>
    );
}

export default App;

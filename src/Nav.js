import React, { useState } from 'react';
import './NavStyle.css';

import btn from './images/menu.png';

function Nav(props){
    const [toggle, setToggle] = useState('');

    function clickToggle(){
        setToggle(toggle==='' ? 'active' : '');
    }

    return(
        <div className='Nav'>
            <div className={`menubar ${toggle}`}>
                <div className={`menu-btn ${toggle}`} onClick={clickToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`menus ${toggle}`}>
                    <div onClick={() => props.goMenu('Home')}>H</div>
                    <div onClick={() => props.goMenu('Profile')}>P</div>
                    <div onClick={() => props.goMenu('Skill')}>S</div>
                    <div onClick={() => props.goMenu('Project')}>Pr</div>
                    <div>C</div>
                </div>
            </div>

            <div id='current-page'>
                {props.cur}
            </div>
        </div>
    );
}

export default Nav;
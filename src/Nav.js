import React, { useState } from 'react';
import './NavStyle.css';

function Nav(props){
    const [toggle, setToggle] = useState('');

    function clickToggle(){
        setToggle(toggle==='' ? 'active' : '');
    }

    function selectMenu(_menu){
        clickToggle();
        props.goMenu(_menu);
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
                    <div onClick={() => selectMenu('Home')}>H</div>
                    <div onClick={() => selectMenu('Profile')}>P</div>
                    <div onClick={() => selectMenu('Skill')}>S</div>
                    <div onClick={() => selectMenu('Project')}>Pr</div>
                    <div onClick={() => selectMenu('Contact')}>C</div>
                </div>
            </div>

            <div id='current-page'>
                {props.cur}
            </div>
        </div>
    );
}

export default Nav;
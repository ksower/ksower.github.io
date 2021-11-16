import React, { useState } from 'react';
import './NavStyle.css';

function Nav(props){
    const [toggle, setToggle] = useState('');

    function clickToggle(){
        setToggle(toggle==='' ? 'active' : '');
    }


    return(
        <div className='Nav'>
            <div className={`menu-btn ${toggle}`} onClick={clickToggle}>
                <div>H</div>
                <div>P</div>
                <div>S</div>
                <div>Pr</div>
                <div>C</div>
            </div>

            <div id='current-page'>
                page
            </div>
        </div>
    );
}

export default Nav;
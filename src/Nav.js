import React, { useState } from 'react';
import style from './Nav.module.css';

function Nav(props){
    const [toggle, setToggle] = useState('');

    function clickToggle(){
        setToggle(toggle==='' ? style.active : '');
    }

    function selectMenu(_menu){
        clickToggle();
        props.goMenu(_menu);
    }

    return(
        <div className={style.Nav}>
            <div className={`${style.menubar} ${toggle}`}>
                <div className={`${style.menu_btn} ${toggle}`} onClick={clickToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`${style.menus} ${toggle}`}>
                    <div onClick={() => selectMenu('Home')}>H</div>
                    <div onClick={() => selectMenu('Profile')}>P</div>
                    <div onClick={() => selectMenu('Skill')}>S</div>
                    <div onClick={() => selectMenu('Project')}>Pr</div>
                    <div onClick={() => selectMenu('Contact')}>C</div>
                </div>
            </div>

            <div id={style['current_page']}>
                {props.cur}
            </div>
        </div>
    );
}

export default Nav;
import React from 'react';
import style from './Home.module.css';

function Home(props){
    return(
        <div className={style.Home}>
            <div className={style.wrapper}>
                <div className={style.text}>
                    <svg className={style.svg} version="1.1" viewBox="0 0 700 300">
                        <symbol id={style['fade_text']}>
                            <text classname={style.text} x="50%" y="65%" text-anchor="middle">데이터를 다루는 개발자</text>
                            <text classname={style.text} x="50%" y="95%" text-anchor="middle">남기범 입니다.</text>
                        </symbol>
                        <g>
                            <use className={style.stroke} href="#fade-text"/>
                            <use className={style.fill} href="#fade-text"/>
                        </g>
                    </svg>
                </div>
                <div className={style.image}>
                </div>
            </div>
        </div>
    );
}

export default Home;
import React from 'react';
import style from './Home.module.css';

function Home(props){
    return(
        <div className={style.Home}>
            <div className={style.wrapper}>
                <div className={`${style.title} ${style.ti1}`}>
                    <div className={`${style.text} ${style.te1}`}>안녕하세요.</div>
                </div>
                <div className={`${style.title} ${style.ti2}`}>
                    <div className={`${style.text} ${style.te2}`}>데이터 엔지니어</div>
                </div>
                <div className={`${style.title} ${style.ti3}`}>
                    <div className={`${style.text} ${style.te3}`}>남기범 입니다.</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
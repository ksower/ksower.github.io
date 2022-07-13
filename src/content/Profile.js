import React, { useState, useEffect } from 'react';
import style from './Profile.module.css';

import useScrollFadeIn from '../hooks/useScrollFadeIn.js';

import Face from '../images/face.jpg';

function Profile(props){
    const animatedItem = {
        0: useScrollFadeIn('up', 1, 0),
        1: useScrollFadeIn('left', 1, 0),
        2: useScrollFadeIn('left', 1, 0.2),
        3: useScrollFadeIn('left', 1, 0.3)
    };

    return(
        <div className={style.Profile}>
            <div className={style.wrapper}>
                <div className={style.empty}></div>

                <div className={style.my} {...animatedItem[0]}>
                    <img id={style['photo']} src={Face}/>

                    <div id={style['intro']}>
                        <p><b>남기범</b> / Data Engineer</p>
                        <div>"데이터 파이프라인을 구축하고, 분석 기술과 AI를 이용하여 새로운 가치를 창출하는 엔지니어 남기범입니다."</div>
                    </div>
                </div>

                <div className={style.exp}>
                    <div {...animatedItem[1]}>
                        <h2>프로그램 설계자</h2>
                        세미나와 코딩 아카데미를 참여하여 프로그램에 대한 기본적인 지식을 공부하였고, 아이디어 공모전 혹은 프로젝트를 진행하면서 프로그램을 설계하는 법을 익혔습니다.
                    </div>

                    <div {...animatedItem[2]}>
                        <h2>한 명의 연구자</h2>
                        1년 동안 연구실에서 일을 하며 아이디어 회의 및 개발 작업을 진행하였으며, YOLO와 LSTM등의 인공지능 모델을 사용하여 실제 프로젝트를 진행한 경험이 있습니다.
                    </div>

                    <div {...animatedItem[3]}>
                        <h2>나아가는 개발자</h2>
                        하고싶은 일을 하기 위해 지속적으로 세미나에 참여하여 최근 개발 지식을 습득하고 발전시켜 제 역량을 향상시킬 것입니다.
                    </div>
                </div>


                <div className={`${style.empty} ${style.hr}`}></div>
            </div>
        </div>
    )
}

export default Profile;
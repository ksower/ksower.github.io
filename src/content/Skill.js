import React from 'react';
import './SkillStyle.css';

import useScrollFadeIn from '../hooks/useScrollFadeIn.js';

import Python from '../images/language-icon/python.png';
import Java from '../images/language-icon/java.png';
import Re from '../images/language-icon/react.png';
import R from '../images/language-icon/r.png';
import Hadoop from '../images/language-icon/hadoop.png';

function Skill(props){
    const animatedItem = {
        0: useScrollFadeIn('down', 1, 0),
        1: useScrollFadeIn('down', 1, 0.1),
        2: useScrollFadeIn('right', 1, 0.2),
        3: useScrollFadeIn('up', 1, 0.3),
        4: useScrollFadeIn('down', 1, 0.5),
        5: useScrollFadeIn('up', 1, 0.6)
    };

    return(
        <div className='Skill'>
            <div className='skill-wrapper'>
                <div className='skill-empty1'></div>

                <div className='skill-title' {...animatedItem[0]}>
                    "저는 이런 것들을 할 수 있습니다."
                </div>

                <div className='skill-tap'>
                    <div id='exp' {...animatedItem[1]}>
                        저는 python을 통해 알고리즘과 자료구조를 공부하였고, 더 나아가 인공지능에 사용할 데이터를 정제하기 위해 numpy, pandas 등의 라이브러리를 공부하였습니다.
                        sklearn으로 기본적인 인공지능에 대해 공부하였고, keras와 yolo, tensorflow 등을 활용하여 모델을 직접 구성 및 학습한 경험이 있습니다.
                        모델 혹은 서비스를 개발하다 거대한 데이터로 가치를 창출하고 서비스를 제공하는 것에 대해 흥미를 느껴 데이터 분석과 빅데이터에 관해 공부 및 스킬들을 습득하였습니다.
                    </div>
                    <div id='skills' {...animatedItem[2]}>
                        <div id='tap'>
                            <b>Python</b>
                            <div id='proficiency'>
                                <div id='progress'>
                                    <div id='progress-value' style={{width:'85%'}}></div>
                                </div>
                                85%
                            </div>
                        </div>

                        <div id='tap'>
                            <b>JAVA</b>
                            <div id='proficiency'>
                                <div id='progress'>
                                    <div id='progress-value' style={{width:'55%'}}></div>
                                </div>
                                55%
                            </div>
                        </div>

                        <div id='tap'>
                            <b>React</b>
                            <div id='proficiency'>
                                <div id='progress'>
                                    <div id='progress-value' style={{width:'80%'}}></div>
                                </div>
                                80%
                            </div>
                        </div>

                        <div id='tap'>
                            <b>R</b>
                            <div id='proficiency'>
                                <div id='progress'>
                                    <div id='progress-value' style={{width:'40%'}}></div>
                                </div>
                                40%
                            </div>
                        </div>

                        <div id='tap'>
                            <b>Hadoop</b>
                            <div id='proficiency'>
                                <div id='progress'>
                                    <div id='progress-value' style={{width:'40%'}}></div>
                                </div>
                                40%
                            </div>
                        </div>
                    </div>
                </div>

                <div className='skill-img' {...animatedItem[3]}>
                    <img src={Python}/>
                    <img src={Java}/>
                    <img src={Re}/>
                    <img src={R}/>
                    <img src={Hadoop}/>
                </div>



                <div className='skill-title' {...animatedItem[4]}>
                    "저는 이런 것들을 가지고 있습니다."
                </div>
                <div className='certificate' {...animatedItem[5]}>
                    <div>정보처리기사</div>
                    <div>네트워크관리사</div>
                    <div>데이터분석<br/>준전문가</div>
                </div>

                <div className='skill-empty2'></div>
            </div>
        </div>
    );
}

export default Skill;
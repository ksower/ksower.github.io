import React from 'react';
import './SkillStyle.css';

import Python from '../images/python.jpg';
import Java from '../images/java.png';
import Re from '../images/react.png';
import R from '../images/r.png';
import Hadoop from '../images/hadoop.png';

function Skill(props){

    return(
        <div className='Skill'>
            <div className='skill-wrapper'>
                <div className='skill-empty'></div>

                <div className='title'>
                    "저는 이런 것들을 할 수 있습니다."
                </div>

                <div className='skill-tap'>
                    <div id='exp'>
                        저는 인공지능 어쩌구를 위해 파이썬 ~~~~, 빅데이터는 어떻고~~~~~~~, 웹으로 표현하기......
                    </div>
                    <div id='skills'>
                        <div className='tap a'>
                            Python
                            <div id='proficiency'>
                                <div id='progress'>
                                    <div id='progress-value' style={{width:'85%'}}></div>
                                </div>
                                85%
                            </div>
                        </div>

                        <div className='tap b'>
                            JAVA
                            <div id='proficiency'>
                                <div id='progress'>
                                    <div id='progress-value' style={{width:'55%'}}></div>
                                </div>
                                55%
                            </div>
                        </div>

                        <div className='tap c'>
                            React
                            <div id='proficiency'>
                                <div id='progress'>
                                    <div id='progress-value' style={{width:'80%'}}></div>
                                </div>
                                80%
                            </div>
                        </div>

                        <div className='tap d'>
                            R
                            <div id='proficiency'>
                                <div id='progress'>
                                    <div id='progress-value' style={{width:'40%'}}></div>
                                </div>
                                40%
                            </div>
                        </div>

                        <div className='tap e'>
                            Hadoop
                            <div id='proficiency'>
                                <div id='progress'>
                                    <div id='progress-value' style={{width:'40%'}}></div>
                                </div>
                                40%
                            </div>
                        </div>
                    </div>
                </div>

                <div className='skill-img'>
                    <img src={Python}/>
                    <img src={Java}/>
                    <img src={Re}/>
                    <img src={R}/>
                    <img src={Hadoop}/>
                </div>



                <div className='title'>
                    "저는 이런 것들을 가지고 있습니다."
                </div>
                <div className='certificate'>
                    <div>정보처리기사</div>
                    <div>네트워크관리사</div>
                    <div>데이터분석<br/>준전문가</div>
                </div>

                <div className='skill-empty'></div>
            </div>
        </div>
    );
}

export default Skill;
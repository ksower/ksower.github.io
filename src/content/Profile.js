import React, { useState, useEffect } from 'react';
import './ProfileStyle.css';

import useScrollFadeIn from '../hooks/useScrollFadeIn.js';

import Face from '../images/face.jpg';

function Profile(props){
    const animatedItem = {
        0: useScrollFadeIn('up', 1, 0),
        1: useScrollFadeIn('left', 1, 0),
        2: useScrollFadeIn('up', 1, 0.2),
        3: useScrollFadeIn('down', 1, 0.3)
    };

    return(
        <div className='Profile'>
            <div className='prof-wrapper'>
                <div className='prof-empty'></div>

                <div className='prof-my' {...animatedItem[0]}>
                    <img id='photo' src={Face}/>

                    <div id='intro'>
                        <p><b>남기범</b> / AI & Big-Data Developer</p>
                        <div>"AI와 빅데이터를 이용하여 새로운 가치를 창출하는 개발자 남기범입니다."</div>
                    </div>
                </div>

                <div className='prof-exp'>
                    <div {...animatedItem[1]}>
                        <h2>Shopify App</h2>
                        세계에서 가장 빠른 속도로 성장하는 Shopify의 Sales and Conversion 카테고리에 Super Social Proof, Retargeting In Store 두 종류의 앱을 출시 하였습니다.
                    </div>

                    <div {...animatedItem[2]}>
                        <h2>Shopify App</h2>
                        세계에서 가장 빠른 속도로 성장하는 Shopify의 Sales and Conversion 카테고리에 Super Social Proof, Retargeting In Store 두 종류의 앱을 출시 하였습니다.
                    </div>

                    <div {...animatedItem[3]}>
                        <h2>Shopify App</h2>
                        세계에서 가장 빠른 속도로 성장하는 Shopify의 Sales and Conversion 카테고리에 Super Social Proof, Retargeting In Store 두 종류의 앱을 출시 하였습니다.
                    </div>
                </div>


                <div className='prof-empty'></div>
            </div>
        </div>
    )
}

export default Profile;
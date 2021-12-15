import React from 'react';
import './ContactStyle.css';

import useScrollFadeIn from '../hooks/useScrollFadeIn.js';

import link from '../images/link_icon.png';
import email from '../images/mail_icon.png';
import phone from '../images/phone_icon.png';

function Contact(props){
    const animatedItem = {
        0: useScrollFadeIn('down', 1, 0.6),
        1: useScrollFadeIn('up', 1, 0.7),
        2: useScrollFadeIn('up', 1, 0.8),
        3: useScrollFadeIn('up', 1, 0.8)
    };

    function goGitStorage(){
        window.open('https://github.com/ksower');
    }

    return(
        <div className='Contact'>
            <div className='con-wrapper'>
                <div className='con-empty1'></div>
                    <div className='con-title' {...animatedItem[0]}>
                        "저는 할 수 있습니다"
                    </div>

                    <div className='con-form'>
                        <div id='info' {...animatedItem[1]}>
                            <div>
                                <img src={email}/>
                            </div>
                            <p>namkey11@naver.com</p>
                        </div>
                        <div id='info' {...animatedItem[2]}>
                            <div>
                                <img src={phone}/>
                            </div>
                            <p>+82 10 4717 6436</p>
                         </div>
                        <div id='info' {...animatedItem[3]}>
                            <div>
                                <img src={link}/>
                            </div>
                            <p id='link' style={{cursor:'pointer'}} onClick={goGitStorage}>https://github.com/ksower</p>
                        </div>
                    </div>
                <div className='con-empty2'></div>
            </div>
        </div>
    );
}

export default Contact;
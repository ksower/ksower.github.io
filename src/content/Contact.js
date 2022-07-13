import React from 'react';
import style from './Contact.module.css';

import useScrollFadeIn from '../hooks/useScrollFadeIn.js';

import link from '../images/link_icon.png';
import email from '../images/mail_icon.png';
import phone from '../images/phone_icon.png';

function Contact(props){
    const animatedItem = {
        0: useScrollFadeIn('down', 1, 0),
        1: useScrollFadeIn('up', 1, 0.1),
        2: useScrollFadeIn('up', 1, 0.2),
        3: useScrollFadeIn('up', 1, 0.3)
    };

    function goBlog(){
        window.open('https://movancing.tistory.com/');
    }
    function goGitStorage(){
        window.open('https://github.com/ksower');
    }

    return(
        <div className={style.Contact}>
            <div className={style.wrapper}>
                <div className={style.title} {...animatedItem[0]}>
                    "저는 할 수 있습니다"
                </div>

                <div className={style.form}>
                    <div id={style['info']} {...animatedItem[1]}>
                        <div>
                            <img src={email}/>
                        </div>
                        <p>namkey11@naver.com</p>
                    </div>
                    <div id={style['info']} {...animatedItem[2]}>
                        <div>
                            <img src={phone}/>
                        </div>
                        <p id={style['link']} style={{cursor:'pointer'}} onClick={goBlog}>https://movancing.tistory.com</p>
                        </div>
                    <div id={style['info']} {...animatedItem[3]}>
                        <div>
                            <img src={link}/>
                        </div>
                        <p id={style['link']} style={{cursor:'pointer'}} onClick={goGitStorage}>https://github.com/ksower</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
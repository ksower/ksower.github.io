import React from 'react';
import './HomeStyle.css';

import back1 from '../images/background_1.jpg';

function Home(props){
    return(
        <div className='Home'>
            <div className='home-wrapper'>
                <div className='home-text'>
                    추억을 기록하는<br/>개발자 남기범입니다
                </div>
                <div className='home-image'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Home;
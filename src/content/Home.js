import React from 'react';
import './HomeStyle.css';

import back1 from '../images/background_1.jpg';
// import hb1 from '../images/hb1.jpg';
// import hb2 from '../images/hb2.jpg';
// import hb3 from '../images/hb3.jpg';
// import hb4 from '../images/hb4.jpg';

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
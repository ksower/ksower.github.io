import React from 'react';
import './HomeStyle.css';

function Home(props){
    return(
        <div className='Home'>
            <div className='home-wrapper'>
                <div className='home-text'>
                    <svg version="1.1" viewBox="0 0 700 300">
                        <symbol id="fade-text">
                            <text x="50%" y="65%" text-anchor="middle">데이터를 다루는 개발자</text>
                            <text x="50%" y="95%" text-anchor="middle">남기범 입니다.</text>
                        </symbol>
                        <g>
                            <use class="stroke" href="#fade-text"/>
                            <use class="fill" href="#fade-text"/>
                        </g>
                    </svg>
                </div>
                <div className='home-image'>
                </div>
            </div>
        </div>
    );
}

export default Home;
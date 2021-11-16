import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import Nav from './Nav.js';
import Title from './content/Title.js';
import Profile from './content/Profile.js';
import Skill from './content/Skill.js';
import Project from './content/Project.js';


function App() {
    const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
    const handleFollow = () => {
      setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
    }
  
    useEffect(() => {
      console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
    }, [ScrollY])
  
    useEffect(() => {
      const watch = () => {
        window.addEventListener('scroll', handleFollow);
      }
      watch(); // addEventListener 함수를 실행
      return () => {
        window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
      }
    })

    return (
        <div className="App">
            <Nav/>

            <Title/>
            <Profile/>
            <Skill/>
            <Project/>
        </div>
    );
}

export default App;

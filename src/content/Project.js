import React, { useState } from 'react';
import './ProjectStyle.css';

import useScrollFadeIn from '../hooks/useScrollFadeIn.js';

import Dataset_proj from '../dataset/project_info.json';

function Project(props){
    const [menu, setMenu] = useState('All');
    const animatedItem = {
        0: useScrollFadeIn('down', 1, 0.5),
        1: useScrollFadeIn('up', 1, 0.6),
        2: useScrollFadeIn('up', 1, 0.6),
        3: useScrollFadeIn('up', 1, 0.6)
    };

    function goGithubLink(_link){
        window.open(_link);
    }

    return(
        <div className='Project'>
            <div className='proj-wrapper'>
                <div className='proj-empty1'></div>

                <div className='proj-title' {...animatedItem[0]}>
                    "저는 이런 것들을 만들었습니다."
                </div>

                <div className='proj-area'>
                    <figure class="proj hover" {...animatedItem[1]}>
                        <img src={require(`${'./project-images/' + Dataset_proj[0].image}`).default}/>
                        <figcaption>
                            <p>The inside of my head was exploding with fireworks. Fortunately, my last thought turned out the lights when it left.</p>
                            <div class="heading">
                            <h2>{Dataset_proj[0].title}</h2>
                            </div>
                        </figcaption>
                        <a href={`${Dataset_proj[0].link}`}></a>
                    </figure>

                    <figure class="proj hover" {...animatedItem[2]}>
                        <img src={require(`${'./project-images/' + Dataset_proj[1].image}`).default}/>
                        <figcaption>
                            <p>The inside of my head was exploding with fireworks. Fortunately, my last thought turned out the lights when it left.</p>
                            <div class="heading">
                            <h2>{Dataset_proj[1].title}</h2>
                            </div>
                        </figcaption>
                        <a href={`${Dataset_proj[1].link}`}></a>
                    </figure>

                    <figure class="proj hover" {...animatedItem[3]}>
                        <img src={require(`${'./project-images/' + Dataset_proj[2].image}`).default}/>
                        <figcaption>
                            <p>The inside of my head was exploding with fireworks. Fortunately, my last thought turned out the lights when it left.</p>
                            <div class="heading">
                            <h2>{Dataset_proj[2].title}</h2>
                            </div>
                        </figcaption>
                        <a href={`${Dataset_proj[2].link}`}></a>
                    </figure>
                </div>

                <div className='proj-empty2'></div>
            </div>
        </div>
    );
}

export default Project;
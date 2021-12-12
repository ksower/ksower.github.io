import React, { useState } from 'react';
import './ProjectStyle.css';

import useScrollFadeIn from '../hooks/useScrollFadeIn.js';

import Dataset_proj from '../dataset/project_info.json';

function Project(props){
    const [menu, setMenu] = useState('All');
    const animatedItem = {
        0: useScrollFadeIn('down', 1, 0.5),
        1: useScrollFadeIn('up', 1, 0.6)
    };

    function goGithubLink(_link){
        window.open(_link);
    }

    const proj_list = Dataset_proj.map((item, index) => {
        const img_src = './project-images/' + item.image;

        return(
            <figure class="proj hover" {...animatedItem[1]}>
                <img src={require(`${img_src}`).default}/>
                <figcaption>
                    <p>The inside of my head was exploding with fireworks. Fortunately, my last thought turned out the lights when it left.</p>
                    <div class="heading">
                    <h2>{item.title}</h2>
                    </div>
                </figcaption>
                <a href={`${item.link}`}></a>
            </figure>
        )
    });

    return(
        <div className='Project'>
            <div className='proj-wrapper'>
                <div className='proj-empty1'></div>

                <div className='proj-title' {...animatedItem[0]}>
                    "저는 이런 것들을 만들었습니다."
                </div>

                <div className='proj-area'>
                    {proj_list}
                </div>

                <div className='proj-empty2'></div>
            </div>
        </div>
    );
}

export default Project;
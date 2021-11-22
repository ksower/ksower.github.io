import React, { useState } from 'react';
import './ProjectStyle.css';

import Dataset_proj from '../dataset/project_info.json';

function Project(props){
    const [menu, setMenu] = useState('All');

    function goGithubLink(_link){
        window.open(_link);
    }

    const proj_list = Dataset_proj.map((item, index) => {
        const img_src = './project-images/' + item.image;

        return(
            <div className='proj'>
                <div id='title'>{item.title}</div>
                <div id='image'><img src={require(`${img_src}`).default}/></div>
                <div id='text'>{item.text}</div>
                <button id='link' onClick={() => goGithubLink(`${item.link}`)}>github link</button>
            </div>
        )
    });

    return(
        <div className='Project'>
            <div className='proj-wrapper'>
                <div className='proj-empty'></div>

                <div className='proj-title'>
                    "저는 이런 것들을 만들었습니다."
                </div>

                <div className='proj-area'>
                    {proj_list}
                </div>

                <div className='proj-empty'></div>
            </div>
        </div>
    );
}

export default Project;
import React, { useState, useRef } from 'react';
import style from './Project.module.css';
import gsap from 'gsap';

import useScrollFadeIn from '../hooks/useScrollFadeIn.js';
import Dset_proj from '../dataset/project_info.json';

import ProjectDivComp from './ProjectDivComp.js';

function Project(props){
    const animatedItem = {
        0: useScrollFadeIn('down', 1, 0),
        1: useScrollFadeIn('up', 1, 0.1),
        2: useScrollFadeIn('up', 1, 0.2),
        3: useScrollFadeIn('up', 1, 0.3)
    };

    const per_project_div = Dset_proj.map((item, index) => {
        return(
            <figure className={style.proj_short} {...animatedItem[index+1]}>
                <img src={require(`${'./project-images/' + item.image}`).default}/>
                <figcaption>
                    <p>{item.text}</p>
                    <div className={style.heading}>
                        <h2>{item.title}</h2>
                    </div>
                </figcaption>
            </figure>
        );
    });

    const per_project_div_after = Dset_proj.map((item, index) => {
        return(
            <ProjectDivComp
                title={item.title}
                image={item.image}
                text={item.text}
                link={item.link}>

            </ProjectDivComp>
        )
    });

    function goGithubLink(_link){
        window.open(_link);
    }


    return(
        <div className={style.Project}>
            <div className={style.wrapper}>
                <div className={style.empty1}></div>

                <div className={style.title} {...animatedItem[0]}>
                    "저는 이런 것들을 만들었습니다."
                </div>

                <div className={style.area}>
                    {per_project_div}
                </div>

                <div className={style.empty2}></div>
            </div>
        </div>
    );
}

export default Project;
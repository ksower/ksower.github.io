import React, { useState } from 'react';
import style from './Project.module.css';

import useScrollFadeIn from '../hooks/useScrollFadeIn.js';

import Dset_proj from '../dataset/project_info.json';

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

    const Dataset_proj = Dset_proj;

    return(
        <div className={style.Project}>
            <div className={style.wrapper}>
                <div className={style.empty1}></div>

                <div className={style.title} {...animatedItem[0]}>
                    "저는 이런 것들을 만들었습니다."
                </div>

                <div className={style.area}>
                    <figure className={style.proj} {...animatedItem[1]}>
                        <img src={require(`${'./project-images/' + Dataset_proj[0].image}`).default}/>
                        <figcaption>
                            <p>{Dataset_proj[0].text}</p>
                            <div className={style.heading}>
                            <h2>{Dataset_proj[0].title}</h2>
                            </div>
                        </figcaption>
                        <a href={`${Dataset_proj[0].link}`}></a>
                    </figure>

                    <figure className={style.proj} {...animatedItem[2]}>
                        <img src={require(`${'./project-images/' + Dataset_proj[1].image}`).default}/>
                        <figcaption>
                            <p>{Dataset_proj[1].text}</p>
                            <div className={style.heading}>
                            <h2>{Dataset_proj[1].title}</h2>
                            </div>
                        </figcaption>
                        <a href={`${Dataset_proj[1].link}`}></a>
                    </figure>

                    <figure className={style.proj} {...animatedItem[3]}>
                        <img src={require(`${'./project-images/' + Dataset_proj[2].image}`).default}/>
                        <figcaption>
                            <p>{Dataset_proj[2].text}</p>
                            <div className={style.heading}>
                            <h2>{Dataset_proj[2].title}</h2>
                            </div>
                        </figcaption>
                        <a href={`${Dataset_proj[2].link}`}></a>
                    </figure>
                </div>

                <div className={style.empty2}></div>
            </div>
        </div>
    );
}

export default Project;
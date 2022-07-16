import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import style from './ProjectDivComp.module.css';

const Zoomer = styled.div`    
    > .wrapper{
        width: ${props => props.width || '230px'};
        height: ${props => props.height || '230px'};
        margin: 10px;
    }
    
    > .wrapper .zoom{
        position: relative;
        width: ${props => props.width || '230px'};
        height: ${props => props.height || '230px'};
        transition: 0.5s;
    }

    > .wrapper .top{z-index:10;}

    > .wrapper .active{
        width: 50vw;
        height: 80vh;
        z-index: 10;
    }

    > .wrapper .zoom .show{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    }
    > .wrapper .zoom .unshow{display:none;}
`;

function ProjectDivComp(props){
    const [isOpen, setIsOpen] = useState(false);
    const [isTop, setIsTop] = useState(false);
    const movLoc = useRef();

    function clickDiv(){
        let el = document.querySelector('.' + props.title);

        if(isOpen === false){
            setIsTop(true);
            gsap.to(movLoc.current, {x:-el.getBoundingClientRect().left + (window.innerWidth/2) - 50,
                                     y:-el.getBoundingClientRect().top + (window.innerHeight/2) - 50,
                                     duration: 0.01});
            setTimeout(function(){
                setIsOpen(true);
                gsap.to(movLoc.current, {x:-el.getBoundingClientRect().left + (window.innerWidth*25/100),
                                         y:-el.getBoundingClientRect().top + (window.innerHeight*10/100),
                                         duration: 0.001});
            }, 600);
        }
        else{
            setIsOpen(false);
            gsap.to(movLoc.current, {x:-el.getBoundingClientRect().left + (window.innerWidth/2) - 50,
                                     y:-el.getBoundingClientRect().top + (window.innerHeight/2) - 50,
                                     duration: 0.001});
            setTimeout(function(){
                gsap.to(movLoc.current, {x:0,
                                         y:0,
                                         duration: 0.01});
                setTimeout(function(){ setIsTop(false); }, 500);
                
            }, 600);
        }
    }

    return(
        <div className='ZoomComp'>
            <Zoomer className={props.title}>
                <div className={`wrapper ${isOpen ? 'active' : ''}`}>
                    <div className={`zoom ${isOpen ? 'active' : ''} ${isTop ? 'top' : ''}`} ref={movLoc} onClick={() => clickDiv()}>
                        <figure className={`${style.proj_short} ${isOpen ? 'unshow' : 'show'}`}>
                            <img src={require(`${'./project-images/' + props.image}`).default}/>
                            <figcaption>
                                <p>{props.text}</p>
                                <div className={style.heading}>
                                    <h2>{props.title}</h2>
                                </div>
                            </figcaption>
                        </figure>

                        <div className={`${isOpen ? 'show' : 'unshow'}`}><p>after text</p></div>
                    </div>
                </div>
            </Zoomer>
        </div>
    )
}

export default ProjectDivComp;
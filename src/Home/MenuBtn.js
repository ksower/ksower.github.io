import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    position: relative;
    top: ${props => props.top || '0em'};
    left: ${props => props.left || '0em'};
    width: 5em;
    height: 3em;
    transform: rotate(-25deg) skew(35deg, -5deg);
    border: 2px solid #000;
    border-left: 2px solid gray;
    border-bottom: 2px solid gray;
    background: #000;
    transition: 0.3s;

    &:before, &:after{
        content: '';
        position: absolute;
        background: #181818;
        transition: 0.3s;
    }
    &:before{
        top: 0.15em;
        left: -0.9em;
        width: 0.8em;
        height: 3em;
        transform: skew(0deg, -40deg);
    }
    &:after{
        top: 2.85em;
        left: -0.55em;
        width: 5em;
        height: 0.65em;
        transform: skew(-50deg, 0deg);
    }

    & > svg{ fill:gray; transition:0.3s; }

    &:hover{
        top: calc(${props => props.top || '0em'} - 1.2em);
        border: 2px solid #ff6e42;
        background: #ff6e42;

        &:before{
            top: 0.7em;
            left: -2.08em;
            width: 2em;
            background: #b65234;
        }
        &:after{
            top: 2.85em;
            left: -1.15em;
            height: 1.7em;
            background: #b65234;
        }

        & > svg{ fill:white; }
    }
`;


function MenuBtn(props){
    return(
        <Btn
            top={props.top}
            left={props.left}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            onClick={props.onClick}>
                
            <svg role="img" viewBox="-17 -6 60 60" xmlns="http://www.w3.org/2000/svg">
                <title>Home</title>
                <path d={props.iconPath}/>
            </svg>
        </Btn>
    );
}

export default MenuBtn;
import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';

const move = keyframes`
    100%{
        position: absolute;
        top: 20%;
        left: 50%;
        margin-left: -16em;
        width: 18em;
        height: 10em;
        background: gray;
        transform: rotate(-25deg) skew(-25deg, -5deg);
    }
`;
const beforemove = keyframes`
    100%{
        content: '';
        position: absolute;
        top: -0.5em;
        left: -1em;
        width: 1em;
        height: 10em;
        background: blue;
        transform: skew(0deg, 44deg);
    }
`;
const aftermove = keyframes`
    0%{opacity:1;}
    10%{opacity: 0;}
    90%{opcaity:0;}
    100%{
        opacity:1;
        content: '';
        position: absolute;
        top: -1em;
        left: -0.5em;
        width: 18em;
        height: 1em;
        background: red;
        transform: skew(46deg);
    }
`;

const Per = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;
    margin-top: 2.5em;
    margin-left: -21.3em;
    width: 18em;
    height: 10em;
    background: gray;
    transform: rotate(-25deg) skew(35deg, -5deg);
    animation: ${move} 0.5s 1s forwards;

    &:before{
        content: '';
        position: absolute;
        top: 0.4em;
        left: -1em;
        width: 1em;
        height: 10em;
        background: blue;
        transform: skew(0deg, -40deg);
        animation: ${beforemove} 0.5s 1s forwards;
        z-index: -1;
    }
    &:after{
        content: '';
        position: absolute;
        top: 10em;
        left: -0.5em;
        width: 18em;
        height: 0.8em;
        background: red;
        transform: skew(-50deg);
        animation: ${aftermove} 0.5s 1s forwards;
        z-index: -2;
    }

`;


const PerT = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -10em;
    width: 18em;
    height: 10em;
    background: skyblue;
    transform: rotate(-25deg) skew(35deg, -5deg);
    transition: 0.3s;
    opacity: ${props => props.opacity};
`;


function Tmp2(props){
    return(
        <div>
            <Per/>
        
            <PerT/>
        </div>
    );
}

export default Tmp2;
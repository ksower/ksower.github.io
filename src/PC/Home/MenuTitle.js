import React from 'react';
import styled, {keyframes} from 'styled-components';


const createKF = keyframes`
    0%{
        transform: rotate(-25deg) skew(35deg, -5deg);
    }
    100%{
        margin-top: -2em;
        margin-left: -11em;
        transform: rotate(-25deg) skew(-25deg, -5deg);
    }
`;

const Title = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;
    margin-left: -15.5em;
    width: 18em;
    height: 10em;
    background: yellow;
    animation: ${createKF} 0.5s forwards;
    transform: rotate(-25deg) skew(35deg, -5deg);
`;


function MenuTitle(props){
    return(
        <Title/>
    );
}

export default MenuTitle;
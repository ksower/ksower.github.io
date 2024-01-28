import React from 'react';
import styled from 'styled-components';

const Comp = styled.div`
    width: ${props => props.compLen || '80'}%;
    height: 80%;
    border: none;
    border: 0.5px solid gray;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    background-image: url(${(props) => props.imgSrc || './assets/no.png'});
    opacity: ${props => props.opacity || '1'};
    transition: 0.5s;
`;

function Component(props){
    return(
        <Comp imgSrc={props.image}
              compLen={100/props.compLen-10/props.compLen}
              opacity={props.opacity}/>
    );
}

export default Component;
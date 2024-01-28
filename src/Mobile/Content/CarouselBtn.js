import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    position: absolute;
    width: ${props => props.btnSize || '3em'};
    height: ${props => props.btnSize || '6em'};
    top: 50%;
    left: 50%;
    margin-top: calc(${props => props.marginTop || '0em'} - 3em);
    margin-left: calc(${props => props.marginLeft || '0em'} - 1.5em);
    border-radius: ${props => props.btnSize || '3em'};
    border: 1px solid gray;
    background-size: 2em;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.imgSrc});
    cursor: pointer;
    transition: 0.2s;

    &:hover{
        background-size: 3em;
    }
`;

function CarouselBtn(props){
    return(
        <Btn marginTop={props.marginTop}
             marginLeft={props.marginLeft}
             btnSize={props.btnSize}
             imgSrc={props.imgSrc}
             onClick={props.onClick}
        >
            {props.value}
        </Btn>
    );
}

export default CarouselBtn;
import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    position: absolute;
    width: ${props => props.btnSize || '3em'};
    height: ${props => props.btnSize || '3em'};
    top: 50%;
    left: 50%;
    margin-top: ${props => props.marginTop || '-1.5em'};
    margin-left: ${props => props.marginLeft || '-1.5em'};
    border-radius: ${props => props.btnSize || '3em'};
    border: none;
    background: #cdcdcd;
    transform: rotate(-25deg) skew(35deg, -5deg);

    &:hover{
        color: white;
        background: #181818;
    }
`;

function CarouselBtn(props){
    return(
        <Btn marginTop={props.marginTop}
             marginLeft={props.marginLeft}
             btnSize={props.btnSize}
             onClick={props.onClick}
        >
            {props.value}
        </Btn>
    );
}

export default CarouselBtn;
import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
    width: ${props => props.width || '13em'};
    height: ${props => props.height || '9em'};
    margin-top: ${props => props.marginTop || '0em'};
    margin-left: ${props => props.marginLeft || '15em'};
    padding: 0.5em 1.4em;
    display: flex;
    align-items: center;
    border-radius: 14px;
    font-weight: bold;
    color: #585858;
    transform: rotate(-25deg) skew(35deg, -5deg);
    transition: 0.3s;

    &:after{
        content: 'To Link >';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        text-align: center;
        line-height: ${props => props.height || '9em'};
        border-radius: 14px;
        background: orange;
        transition: 0.3s;
        opacity: 0;
    }

    &:hover{
        &:after{opacity: 1;}
    }
`;


function Explain(props){
    return(
        <Text width={props.width}
              height={props.height}
              marginTop={props.marginTop}
              marginLeft={props.marginLeft}
        >
            {props.text}
        </Text>
    );
}

export default Explain;
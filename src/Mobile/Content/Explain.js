import React from 'react';
import styled, {keyframes} from 'styled-components';

const Text = styled.div`
    width: ${props => props.width || '54vw'};
    height: ${props => props.height || '30vh'};
    padding: 0.5em 1.4em;
    display: flex;
    align-items: center;
    border-radius: 14px;
    font-weight: bold;
    color: #585858;
    transition: 0.3s;
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
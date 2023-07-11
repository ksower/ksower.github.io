import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
    position: relative;
    top: ${props => props.top};
    left ${props => props.left};
    width: 5em;
    height: 1.4em;
    text-align: right;
    font-size: 2.5em;
    color: gray;
    transform: rotate(-25deg) skew(35deg, -5deg);
`;

function MenuText(props){
    return(
        <Text top={props.top} left={props.left}>
            {props.text}
        </Text>
    );
}

export default MenuText;
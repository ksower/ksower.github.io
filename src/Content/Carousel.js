import React, {useState} from 'react';
import styled from 'styled-components';

import Btn from './CarouselBtn.js';

const Wrapper = styled.div`
    width: 20em;
    height: 15em;
    margin-top: ${props => props.marginTop || '5em'};
    margin-left: ${props => props.marginLeft || '5em'};
    transform: rotate(-25deg) skew(-25deg, -5deg);
`;

const InnerComps = styled.div`
    width: ${props => props.width || '100%'};
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: -${props => props.margin || '0'}%;
    transition: 0.5s;
`;


function Carousel(props){
    return(
        <div>
            <Wrapper marginTop={props.marginTop} marginLeft={props.marginLeft}>
                <InnerComps width={`${props.dataLength*100}`+'%'} margin={props.innerMargin}>
                    {props.dataset}
                </InnerComps>
            </Wrapper>
        </div>
    );
}

export default Carousel;
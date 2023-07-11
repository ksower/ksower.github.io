import React, {useState} from 'react';
import styled from 'styled-components';

const Per = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;
    margin-left: -16em;
    width: 18em;
    height: 10em;
    background: gray;
    transform: rotate(-25deg) skew(-25deg, -5deg);

    &:before{
        content: '';
        position: absolute;
        top: -0.5em;
        left: -1em;
        width: 1em;
        height: 10em;
        background: blue;
        transform: skew(0deg, 44deg);
    }
    &:after{
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


function Tmp(props){
    const [view, setView] = useState(0);

    function showExplain(){
        setView(1);
    }
    function hiddenExplain(){
        setView(0);
    }


    return(
        <div>
            <Per onMouseEnter={showExplain} onMouseLeave={hiddenExplain}/>
            <PerT opacity={view}/>
        </div>
    );
}

export default Tmp;
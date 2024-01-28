import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavBtn = styled.div`
    width: 4em;
    height: 4em;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 1em;
    margin-left: 1em;
    background-size: 2.4em;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./assets/icons/home.png');
    cursor: pointer;
    transition: 0.1s;

    &:hover{
        background-size: 2.6em;
    }
`;


function Nav(props){
    const navigate = useNavigate();

    const movePage = () =>{
        navigate('/');
    };
    

    return(
        <NavBtn onClick={movePage}/>
    );
}

export default Nav;
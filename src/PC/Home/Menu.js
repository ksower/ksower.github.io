import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Title from './MenuTitle.js';
import Btn from './MenuBtn.js';
import Text from './MenuText.js';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

function Menu(props){
    const navigate = useNavigate();
    const [menuText, setMenuText] = useState('KSOWER');

    const changeMenuText = (_menu) => {
        setMenuText(_menu);
    }

    const movePage = (_menu) => {
        if(_menu === 'home'){ navigate('/'); }
        else if(_menu === 'menu1'){ navigate('/Content'); }
        else if(_menu === 'menu2'){ navigate('/Content'); }
    }

    return(
        <Wrapper>
            <div>
                <Btn top='-1.8em' left='1.9em'
                     iconPath="M12 0a1.44 1.44 0 0 0-.947.399L.547 10.762a1.26 1.26 0 0 0-.342.808v11.138c0 .768.53 1.292 1.311 1.292h20.968c.78 0 1.311-.522 1.311-1.292V11.57a1.25 1.25 0 0 0-.34-.804L15.68 3.097h-.001L12.947.4A1.454 1.454 0 0 0 12 0Zm0 6.727 6.552 6.456v5.65H5.446v-5.65z"
                     onMouseEnter={() => changeMenuText('home')}
                     onMouseLeave={() => changeMenuText('')}
                     onClick={() => movePage('home')}/>
                <Btn iconPath="M19.35.37h-1.86a4.628 4.628 0 0 0-4.652 4.624v5.609H4.652A4.628 4.628 0 0 0 0 15.23v3.721c0 2.569 2.083 4.679 4.652 4.679h1.86c2.57 0 4.652-2.11 4.652-4.679v-3.72c0-.063 0-.158-.005-.158H8.373v3.88c0 1.026-.835 1.886-1.861 1.886h-1.86c-1.027 0-1.861-.864-1.861-1.886V15.23a1.839 1.839 0 0 1 1.86-1.833h14.697c2.57 0 4.652-2.11 4.652-4.679V4.997A4.628 4.628 0 0 0 19.35.37Zm1.861 8.345c0 1.026-.835 1.886-1.861 1.886h-3.721V4.997a1.839 1.839 0 0 1 1.86-1.833h1.86a1.839 1.839 0 0 1 1.862 1.833zm-8.373 9.706a.236.236 0 0 0 0 .03c0 .746.629 1.344 1.396 1.344.767 0 1.395-.594 1.395-1.34a.188.188 0 0 0 0-.034v-3.35h-2.791z"
                     onMouseEnter={() => changeMenuText('menu1')} 
                     onMouseLeave={() => changeMenuText('')}
                     onClick={() => movePage('menu1')}/>
                <Btn iconPath="M4.29,4L12,8v8l7.71-4V4L12,0L4.29,4z M12,16l-7.71-4v8L12,24V16z"
                     top='1.8em' left='-1.9em'
                     onMouseEnter={() => changeMenuText('menu2')}
                     onMouseLeave={() => changeMenuText('')}
                     onClick={() => movePage('menu2')}/>
            </div>
            
            <div>
                <Text top='1.5em' left='-2.3em' text={menuText}/>
            </div>
        </Wrapper>
    );
}

export default Menu;
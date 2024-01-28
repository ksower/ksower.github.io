import React, {useState} from 'react';
import styled from 'styled-components';

import Nav from '../Nav/Nav.js';
import Comp from './Component.js';
import Carousel from './Carousel.js';
import Explain from './Explain.js';
import Btn from './CarouselBtn.js';

import Listup from '../../Dataset/listup.json';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;


function Content(props){
    const unSelOpacity = '0.2';
    const [curIdx, setCurIdx] = useState(0);
    const [curMargin, setCurMargin] = useState(0);
    const [compOpacity, setCompOpacity] = useState(['1', unSelOpacity, unSelOpacity]);

    const left_move_comp = () => {
        if(curIdx > 0){
            var tmpIdx = curIdx - 1;
            var tmpOpacity = compOpacity;
            tmpOpacity[curIdx] = unSelOpacity;
            tmpOpacity[tmpIdx] = '1';
            setCompOpacity(tmpOpacity);
            setCurIdx(tmpIdx);
            setCurMargin(tmpIdx*100);
        }
    };
    const right_move_comp = () => {
        if(curIdx < comp_list.length-1){
            var tmpIdx = curIdx + 1;
            var tmpOpacity = compOpacity;
            tmpOpacity[curIdx] = unSelOpacity;
            tmpOpacity[tmpIdx] = '1';
            setCompOpacity(tmpOpacity);
            setCurIdx(tmpIdx);
            setCurMargin(tmpIdx*100);
        }
    };

    const comp_list = Listup.map((item, idx) => {
        return(
            <Comp key={idx}
                  title={item.title}
                  image={item.image}
                  compLen={Listup.length}
                  opacity={compOpacity[idx]}/>
        );
    });


    return(
        <Wrapper>
            <Nav/>

            <Carousel dataset={comp_list}
                      dataLength={comp_list.length}
                      marginTop="-4em" marginLeft="-8em"
                      innerMargin={curMargin}
            />

            <Explain marginTop="1em" marginLeft="7em"
                     text={Listup[curIdx].text}
            />

            <Btn imgSrc='./assets/icons/back_arrow.png' marginTop="12em" marginLeft="-10em" btnSize="4em" onClick={left_move_comp}/>
            <Btn imgSrc='./assets/icons/arrow.png' marginTop="-1em" marginLeft="12em" btnSize="4em" onClick={right_move_comp}/>
        </Wrapper>
    );
}

export default Content;
import React, {useState} from 'react';
import './ProjectStyle.css';

function Project(props){
    const [menu, setMenu] = useState('All');

    return(
        <div className='Project'>
            <div className='proj-wrapper'>
                <div className='proj-empty'></div>

                <div className='proj-menubar'>
                    <div id='menus'>
                        <button>All</button>
                        <button>Web</button>
                        <button>AI</button>
                        <button>Big Data</button>
                    </div>
                </div>

                <div className='proj-taps'>
                    <div id='ptap'>
                        <button id='tap'></button>
                        <div id='tap-exp'>
                            <div>image</div>
                            <div>explain</div>
                            <button>link</button>
                        </div>
                    </div>

                </div>

                <div className='proj-empty'></div>
            </div>
        </div>
    );
}

export default Project;
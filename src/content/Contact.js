import React from 'react';
import './ContactStyle.css';

function Contact(props){
    return(
        <div className='Contact'>
            <div className='con-wrapper'>
                <div className='con-empty'></div>
                    <div className='con-title'>
                        "저와 함께해요"
                    </div>

                    <div className='con-form'>
                        <div id='email'></div>
                    </div>
                <div className='con-empty'></div>
            </div>
        </div>
    );
}

export default Contact;
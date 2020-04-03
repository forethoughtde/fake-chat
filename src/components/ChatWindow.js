import React from 'react';
import './ChatWindow.css';

const ChatWindow = ()=>{

    return (
        <div id="chatWindowContainer">
            <div className="close_icon">
                <svg data-v-1a53d433=""
                     xmlns="http://www.w3.org/2000/svg"
                     width="12"
                     height="10"
                     viewBox="0 0 12 10">
                    <g data-v-1a53d433="" fill="none" fillRule="evenodd" stroke="#00877C" strokeLinecap="round">
                        <path data-v-1a53d433="" d="M1 0l10 10M11 0L1 10"></path>
                    </g>
                </svg>
            </div>
            <p className="margin_btn_16 padding_left_8">Are you looking for a job?</p>
            <button>Explore jobs</button>
            <button>Ask a question</button>
        </div>
    );

};

export default ChatWindow;

import React from 'react';
import './ChatWindow.css';

const ChatWindow = ({bgColor, setBgColor, isInitialOn, setInitialOn, setPillWindow})=>{

    const changeColor = (e) => {
        const color = window.getComputedStyle(e.target, null).getPropertyValue("border-top-color");
        setBgColor(color);
    }

    const changeColorBack = (e) =>{
        setBgColor('#00877C');
    }

    const openChatWindow = (e) => {
        setInitialOn(!isInitialOn);
        changeColor(e)
    }

    const closePillWindow = () => {
        setPillWindow(false)
    }

    return (
        <div id="chatWindowContainer">
            <div className="close_icon" onClick={closePillWindow}>
                <svg data-v-1a53d433=""
                     xmlns="http://www.w3.org/2000/svg"
                     width="12"
                     height="10"
                     viewBox="0 0 12 10">
                    <g data-v-1a53d433="" fill="none" fillRule="evenodd" stroke={bgColor} strokeLinecap="round">
                        <path data-v-1a53d433="" d="M1 0l10 10M11 0L1 10"></path>
                    </g>
                </svg>
            </div>
            <p className="margin_btn_16 padding_left_8 padding_right_8">Choice is your's</p>
            <button className="bgBlue" onMouseEnter={changeColor}  onMouseLeave={changeColorBack} onClick={openChatWindow}>Blue pill</button>
            <button className="bgRed" onMouseEnter={changeColor}  onMouseLeave={changeColorBack} onClick={openChatWindow}>Red pill</button>
        </div>
    );

};

export default ChatWindow;

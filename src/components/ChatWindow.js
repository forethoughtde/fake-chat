import React from 'react';
import './ChatWindow.css';
import {useDispatch, useSelector} from "react-redux";

const ChatWindow = ({ setPillWindow })=>{

    const bgColor = useSelector((state)=>state.bgColor);
    const dispatch = useDispatch();

    return (
        <div id="chatWindowContainer">
            <div className="close_icon" onClick={() => dispatch({ type : 'PILL_WINDOW_OFF' })}>
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
            <button className="bgBlue"
                    onClick={() => {dispatch({type: 'BLUE'}); dispatch({type: 'INITIAL_WINDOW_OFF'})}}
                    onMouseEnter={()=>dispatch({ type : 'BLUE' })}
                    onMouseLeave={()=>dispatch({ type : 'REVERT_BACK_COLOR' })}>Blue pill
            </button>
            <button className="bgRed"
                    onClick={() => {dispatch({type: 'RED'}); dispatch({type: 'INITIAL_WINDOW_OFF'})}}
                    onMouseEnter={()=>dispatch({ type : 'RED' })}
                    onMouseLeave={()=>dispatch({ type : 'REVERT_BACK_COLOR' })}>Red pill
            </button>
        </div>
    );

};

export default ChatWindow;

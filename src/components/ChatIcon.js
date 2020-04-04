import React from 'react';
import './Chat.css'
import {useSelector, useDispatch} from "react-redux";

const ChatIcon = ()=>{

    const bgColor = useSelector((state)=>state.bgColor)

    const dispatch = useDispatch()

    const divStyle = {
        backgroundColor : bgColor
    }

    const openChatWindow = ()=>{
        dispatch({ type : 'INITIAL_WINDOW_OFF' })
    }

    return (
        <div id="chatIconContainer" style={divStyle} onClick={openChatWindow}>
        </div>
    );


};

export default ChatIcon;

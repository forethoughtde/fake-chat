import React, {useState} from 'react';
import ChatInitialWindow from './ChatInitialWindow';
import ChatDetailWindow from './ChatDetailWindow';
import { useSelector } from "react-redux";

const ChatContainer = ()=>{
    const {isInitialOn} = useSelector()

    if (isInitialOn) {
        return (<div id="chatContainer">
            <ChatInitialWindow/>
        </div>)
    }

    return (
        <div id="chatContainer">
            <ChatDetailWindow/>
        </div>
    );

};

export default ChatContainer;

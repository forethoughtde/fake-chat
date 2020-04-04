import React, {useState} from 'react';
import ChatInitialWindow from './ChatInitialWindow';
import ChatDetailWindow from './ChatDetailWindow';

const ChatContainer = ({setBgColor, color})=>{
    const [isInitialOn, setInitialOn] = useState(true)

    if (isInitialOn) {
        return (<div id="chatContainer">
            <ChatInitialWindow isInitialOn={isInitialOn} setInitialOn={setInitialOn} setBgColor={setBgColor} bgColor={color}/>
        </div>)
    }

    return (
        <div id="chatContainer">
            <ChatDetailWindow isInitialOn={isInitialOn} setInitialOn={setInitialOn} setBgColor={setBgColor} bgColor={color}/>
        </div>
    );

};

export default ChatContainer;

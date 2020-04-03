import React, {useState} from 'react';
import ChatInitialWindow from './ChatInitialWindow';
import ChatDetailWindow from './ChatDetailWindow';

const ChatContainer = ()=>{
    const [isInitialOn, setInitialOn] = useState(true)

    if (isInitialOn) {
        return (<div id="chatContainer">
            <ChatInitialWindow isInitialOn={isInitialOn} setInitialOn={setInitialOn}/>
        </div>)
    }

    return (
        <div id="chatContainer">
            <ChatDetailWindow isInitialOn={isInitialOn} setInitialOn={setInitialOn}/>
        </div>
    );

};

export default ChatContainer;

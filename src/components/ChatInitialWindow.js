import React from 'react';
import ChatIcon from "./ChatIcon";
import ChatWindow from "./ChatWindow";


const ChatInitialWindow = ({isInitialOn, setInitialOn}) => {

    return (
      <div className={isInitialOn ? 'show': 'hide' } onClick={() => setInitialOn(!isInitialOn)}>
          <ChatIcon />
          <ChatWindow />
      </div>
    );
};

export default ChatInitialWindow;

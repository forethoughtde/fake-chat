import React from 'react';
import ChatIcon from "./ChatIcon";
import ChatWindow from "./ChatWindow";


const ChatInitialWindow = ({isInitialOn, setInitialOn, setBgColor, bgColor}) => {

    return (
      <div className={isInitialOn ? 'show': 'hide' }>
          <ChatIcon bgColor={bgColor}/>
          <ChatWindow bgColor={bgColor} setBgColor={setBgColor} isInitialOn={isInitialOn} setInitialOn={setInitialOn}/>
      </div>
    );
};

export default ChatInitialWindow;

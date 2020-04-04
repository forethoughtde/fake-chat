import React from 'react';
import ChatIcon from "./ChatIcon";
import ChatWindow from "./ChatWindow";


const ChatInitialWindow = ({isInitialOn, setInitialOn, setBgColor, bgColor, pillWindow, setPillWindow}) => {

    return (
      <div className={isInitialOn ? 'show': 'hide' }>
          <ChatIcon bgColor={bgColor} isInitialOn={isInitialOn} setInitialOn={setInitialOn}/>
          {
              pillWindow &&
              <ChatWindow bgColor={bgColor} setBgColor={setBgColor} isInitialOn={isInitialOn} setInitialOn={setInitialOn} setPillWindow={setPillWindow}/>
          }
      </div>
    );
};

export default ChatInitialWindow;

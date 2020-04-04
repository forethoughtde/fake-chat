import React from 'react';
import ChatIcon from "./ChatIcon";
import ChatWindow from "./ChatWindow";
import { useSelector} from "react-redux";

const ChatInitialWindow = () => {

    const {pillWindow} = useSelector()

    return (
      <div>
          <ChatIcon/>
          {
              pillWindow &&
              <ChatWindow />
          }
      </div>
    );
};

export default ChatInitialWindow;

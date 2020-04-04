import React from 'react';
import ChatIcon from "./ChatIcon";
import ChatWindow from "./ChatWindow";
import { useSelector} from "react-redux";

const ChatInitialWindow = () => {

    const pillWindow = useSelector((state) => state.pillWindowReducer.pillWindowOn)

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

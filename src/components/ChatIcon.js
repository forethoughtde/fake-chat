import React from 'react';
import './Chat.css'

const ChatIcon = ({bgColor})=>{

    const divStyle = {
        backgroundColor: bgColor
    }

    return (
        <div id="chatIconContainer" style={divStyle}>
        </div>
    );


};

export default ChatIcon;

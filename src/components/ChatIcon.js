import React from 'react';
import './Chat.css'

const ChatIcon = ({bgColor, isInitialOn, setInitialOn})=>{

    const divStyle = {
        backgroundColor: bgColor
    }

    return (
        <div id="chatIconContainer" style={divStyle} onClick={ () => { console.log('clicked'); setInitialOn(!isInitialOn)}}>
        </div>
    );


};

export default ChatIcon;

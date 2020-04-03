import React from 'react';
import './ChatDetailWindow.css'

const ChatDetailWindow = ({ isInitialOn, setInitialOn })=>{

    const chats = ['Hello there', 'Good to talk to you here', 'I am here to help you out', 'I am called the expert in everything...'].map((chat) => <div key={chat}><span className="chatMessage">{chat}</span></div>)


    return (
        <div id="chatDetailContainer"
             className={isInitialOn ? 'hide' : 'show'}
             >
            <header className="flexContainer positionRelative">
                <div className="close_icon" onClick={()=>setInitialOn(!isInitialOn)}>
                    <svg data-v-1a53d433=""
                         xmlns="http://www.w3.org/2000/svg"
                         width="12"
                         height="10"
                         viewBox="0 0 12 10">
                        <g data-v-1a53d433="" fill="none" fillRule="evenodd" stroke="#ffffff" strokeLinecap="round">
                            <path data-v-1a53d433="" d="M1 0l10 10M11 0L1 10"></path>
                        </g>
                    </svg>
                </div>
                <img src="https://d7pkvxpsevxsc.cloudfront.net/bot-icons/icon_5.svg?v=1585860403114" alt=""/>
                <div className="margin_left_16">
                    <p className="textColorWhite">PK</p>
                    <p className="textColorWhite">Conversation Tool</p>
                </div>
            </header>
            <section>
                {chats}
            </section>
            <footer className="flexContainer padding_8 justifyContentSpaceBetween">
                <input type="text" placeholder="Type a message"/>
                <button className="margin_0 maxWidth100">Send</button>
            </footer>
        </div>
    );


};

export default ChatDetailWindow;

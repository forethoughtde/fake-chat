import React, {useState, useEffect, useRef} from 'react';
import './ChatDetailWindow.css'

const ChatDetailWindow = ({ isInitialOn, setInitialOn, setBgColor, bgColor })=>{

    const autoChats = ['Hello there', 'Good to talk to you here', 'I am here to help you out', 'I am called the expert in everything...']


    const [chat, setChat] = useState('');
    const [customChat, setCustomChat] = useState([]);

    const messagesEndRef = useRef(null)

    const divStyle = {
        backgroundColor: bgColor
    }

    const buttonStyle = {
        borderColor: bgColor,
        color: bgColor
    }

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [customChat]);

    const updateInput = (e)=>{
        setChat(e.target.value);
    }

    const closeWindow = (e) => {
        setInitialOn(!isInitialOn);
        setBgColor('#00877C');
    }

    const getRandom = ()=>{
        let i = Math.floor(Math.random() * (autoChats.length - 1));
        return autoChats[i];
    }

    const sendMessage = (e)=>{
        if (chat.length) {
            setCustomChat([...customChat, chat, getRandom()])
            setChat('');
        }
    }

    return (
        <div id="chatDetailContainer"
             className={isInitialOn ? 'hide' : 'show'}
        >
            <header className="flexContainer positionRelative" style={divStyle}>
                <div className="close_icon" onClick={closeWindow}>
                    <svg data-v-1a53d433=""
                         xmlns="http://www.w3.org/2000/svg"
                         width="12"
                         height="10"
                         viewBox="0 0 12 10">
                        <g data-v-1a53d433="" fill="none" fillRule="evenodd" stroke='#fff' strokeLinecap="round">
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
                {customChat.map((c, i)=>{
                    return (<div key={i} className={i % 2 ? 'even' : 'odd'}>
                        <span className="chatMessage" style={divStyle}>{c}</span>
                    </div>)
                })}
                <div ref={messagesEndRef} />
            </section>
            <footer className="flexContainer padding_8 justifyContentSpaceBetween">
                <input type="text" placeholder="Type a message" value={chat} onChange={updateInput}/>
                <button className="margin_0 maxWidth100" style={buttonStyle} onClick={sendMessage}>Send</button>
            </footer>
        </div>
    );


};

export default ChatDetailWindow;

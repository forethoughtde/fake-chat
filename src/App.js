import React, {useState} from 'react';
import './App.css';
import Header from './Header'
import ChatContainer from './components/ChatContainer';

function App(){

    const [bgColor, setBgColor] = useState('#00877C');

    return (
        <div className="App">
            <Header title="PK Pill Chat" bgColor={bgColor}/>
            <ChatContainer color={bgColor} setBgColor={setBgColor}/>
        </div>
    );
}

export default App;

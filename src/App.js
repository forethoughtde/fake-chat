import React from 'react';
import './App.css';
import Header from './Header'
import ChatContainer from './components/ChatContainer';

function App(){
    return (
        <div className="App">
            <Header title="PK Chat"/>
            <ChatContainer/>
        </div>
    );
}

export default App;

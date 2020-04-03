import React from 'react';

const Header = ({title}) => {

    return (
        <header className="App-header">
            <h4>
                <a href="/" className="header">
                    <img src="https://d7pkvxpsevxsc.cloudfront.net/bot-icons/icon_5.svg?v=1585860403114"
                                 alt=""/>
                                 {title}
                </a>
            </h4>
        </header>
    );

};

export default Header;

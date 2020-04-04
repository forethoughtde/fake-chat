import React from 'react';
import { useSelector } from "react-redux";
const Header = ({title}) => {

    const bgColor = useSelector( (state) => state.changeColorReducer.bgColor)

    const divStyle = {
        background: bgColor,
    };

    return (
        <header className="App-header" style={divStyle}>
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

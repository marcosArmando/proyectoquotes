import React from 'react';

const Buttons = ({Color, onTweetHandler, onClickHandler}) => {
    return (
        <div className="buttons-container">
            <button onClick={onTweetHandler} style={{backgroundColor: Color}}>Tweet</button>
            <button onClick={onClickHandler} style={{backgroundColor: Color}}>New Quote</button>
        </div>
    );
}

export default Buttons;
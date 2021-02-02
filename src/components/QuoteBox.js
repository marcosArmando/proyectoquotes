import React from 'react';
import QuoteBody from '../components/QuoteBody.js';
import Buttons from '../components/Buttons.js';

const QuoteContainer = ({Color, Quote, Author, onTweetHandler, onClickHandler}) => {

    return(
        <div className="QuoteContainer">
            <QuoteBody Quote={Quote} Author={Author}/>
            <Buttons Color={Color} onTweetHandler={onTweetHandler} onClickHandler={onClickHandler} />
        </div>
    )

}

export default QuoteContainer;
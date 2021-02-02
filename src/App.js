import './App.css';
import data from './allQuotes.json';
import QuoteBox from './components/QuoteBox';
import { useState } from 'react';

let colorTemp;

function getValue() {
  return Math.floor(Math.random() * data.quotes.length);
}

function App() {

  const [quote, setQuote] = useState(data.quotes[getValue()])

  const handleClick = () => {
    setQuote(data.quotes[getValue()]);
    colorTemp = "#"+getValue()+getValue()+getValue();

  }

  const handleTweet = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.quote}%0a%0a${quote.author}`, '_blank');
  }


  return (
    <div className="App" style={{backgroundColor: colorTemp}}>
      <QuoteBox Color={colorTemp} Quote={quote.quote} Author={quote.author} onTweetHandler={handleTweet} onClickHandler={handleClick}/>
    </div>
  );
}

export default App;
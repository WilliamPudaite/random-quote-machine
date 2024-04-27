import { useState } from 'react'
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaTumblr } from 'react-icons/fa';
import './App.css';

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
}

const transition = "all 1s"

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor())
  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor())
  };


  return (
    <div className='background' style={{ backgroundColor: randomColor,transition }}>
      <div id="quote-box">
        <div className="quote-content" style={{color: randomColor}}>
         
          <h2 id="text">
          <FaQuoteLeft /> {quote.quote}
          </h2>
          <h4 id="author">{quote.author}</h4>
        </div>
        <div className="buttons">
          <a href={`twitter.com/intent/tweet`}
          id="tweet-quote"
          style={{
            backgroundColor: randomColor, transition,
            marginRight: "10px,"
          }}>
            <FaTwitter color='white' />
          </a>
          <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Stephen%20Covey&content=I%20am%20not%20a%20product%20of%20my%20circumstances.%20I%20am%20a%20product%20of%20my%20decisions.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
          id="tumblr-quote"
          style={{
            backgroundColor: randomColor, transition,
            marginRight: "10px,"
          }}>
            <FaTumblr color='white' />
          </a>
          <button id="new-quote" onClick={changeQuote} style={{backgroundColor: randomColor, transition}}>New Quote</button>
        </div>
      </div>
    </div>)
}

export default App
import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => {
        setQuote(response.data[0]);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <img
        src="https://media.giphy.com/media/tSVnUxoWoHC/giphy.gif"
        alt="ron"
      />
      <p>{quote}</p>
    </div>
  );
}

export default App;

import {useEffect, useState} from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurretQuote] = useState(0);

  useEffect(() => {
    fetch("https://type.fit/api/quotes").then((res) =>  res.json().then((json) => {
      setQuotes(json);
      console.log(json);
    }));
  },[]);

  const handleClick = () => {

    return setCurretQuote(Math.floor(Math.random() * quotes.length)) ;

  };

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Quote Generator</h1>

      { quotes.length && <div style={{background:"white", width: "50%", margin: "auto", display:"flex", flexDirection: "column", alignItems:"center"}}>
        <button onClick={handleClick}>New Quote</button>
        <div>{quotes[currentQuote].text}</div>
        <div style={{fontStyle: "italic"}}>- {quotes[currentQuote].author}</div>
      </div>
      }
    </div>
  );
}

export default App;

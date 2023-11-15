import React, { Component } from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

import "./App.css";
import Greet from "./Components/Greet";
import Message from "./Components/Message";
import Name from "./Components/Name";
import Button from "./Components/Button";
import Person from "./Components/Person";
import Stylesheet from "./Components/Stylesheet.jsx";
import LifeCycleA from "./Components/LifeCycleA";

/// API key: 86WP9DRQ75618KKJ
const API_URL =
  "https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=86WP9DRQ75618KKJ";

/*const market1 = 
    {
        "market_type": "Equity",
        "region": "United States",
        "primary_exchanges": "NASDAQ, NYSE, AMEX, BATS",
        "local_open": "09:30",
        "local_close": "16:15",
        "current_status": "closed",
        "notes": ""
    } */
/*class App extends Component {
    render() {
        return (
            <div className = 'App'>
                <Greet name = "shiva" heroname = "beast"/>
                <Greet name ="sai" heroname = "hero"/>
            </div>
        )
    }
} */

const App = () => {
  const [count, setCount] = useState(27);

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <LifeCycleA />
      <Greet />

      <div className="frame2">
        <Button label="+" />
        <span>{count}</span>
        <Button label="-" onClick={decrementCount} />
      </div>
      <div className="button-pos">
        <h1 className="frame">Button Component</h1>
        <Button label="level 1" />
        <br></br>
        <Button label="level 2" />
        <br></br>
        <Button label="level 3" />
        <br></br>
        <Button label="level 4" />
        <br></br>
      </div>

      <Name />
      <Message />
      <Person />
      <Stylesheet primary={true} />
    </div>
  );
};

export default App;

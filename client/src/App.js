import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Fib from "./Fib";
import OtherPage from "./OtherPage";

function App() {
  return (
      <Router>
        <div className="App">
            <h1>Fib Calculator</h1>
            <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherPage" component={OtherPage} />
            </div>
        </div>
      </Router>
  );
}

export default App;

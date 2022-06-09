import './App.css';
import { Routes, Route } from "react-router-dom";
// import Display from "./Components/Display";
import Nav from "./Components/Nav";
import Display from './Components/Display';
import Controls from "./Components/Controls"



function App() {
  return (
    <div className="App">
      { <Nav />}
      { < Controls />}

      { <Display/>}
    </div>
  );
}

export default App;

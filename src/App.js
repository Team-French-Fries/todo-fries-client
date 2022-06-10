import './App.css';
import { Routes, Route } from "react-router-dom";
// import Display from "./Components/Display";
import Nav1 from "./Components/Nav";
import Display from './Components/Display';
import Controls from "./Components/Controls"

function App() {
  return (
    <div className="App">
      { <Nav1 />}
      { < Controls />}
      { <Display/>}
    </div>
  );
}

export default App;

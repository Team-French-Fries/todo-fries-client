import './App.css';
import { Routes, Route } from "react-router-dom";
import Display from "./Components/Display";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="" element={<Nav />} />
          <Route path="" element={<Display />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;

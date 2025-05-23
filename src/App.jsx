import React from "react";
import "./Theme.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Graph from "./components/Graph";
import Controls from "./components/Controls";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="body">
        <div className="content">
          <div>
            <Graph />
          </div>
          <div>
            <Controls />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

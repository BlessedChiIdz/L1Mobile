import React from 'react';
import logo from './logo.svg';
import './App.css';
import GridCellComp from "./Components/gridCellComp/gridCellComp";
import GridCust from "./Components/Grid/gridCust";

function App() {
  return (
    <div className="mainD">
      <div className="grid">
        <GridCust/>
      </div>
    </div>
  );
}

export default App;

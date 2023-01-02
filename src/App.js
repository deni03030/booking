import './App.css';
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from './components/Routing';


function App() {
  return (
    <div>
     <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;

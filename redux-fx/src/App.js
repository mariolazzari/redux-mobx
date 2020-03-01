import React from "react";
import { combined } from "./redux";

const App = () => (
  <div className="App">
    <h1> {combined("Ciao")}</h1>
  </div>
);

export default App;

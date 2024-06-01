import React from "react";
import "./App.css";
import TariffList from "./components/TariffList/TariffList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Тарифы</h1>
      </header>
      <TariffList />
    </div>
  );
}

export default App;

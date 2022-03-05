import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Clients from "./components/clients/Clients";
import ClientsGet from "./components/whatyouget/ClientsGet";
import Portfolio from "./components/portfolio/Portfolio";
import WorkFlow from "./components/workFlow/WorkFlow";
import Shout from "./components/shout/Shout";
import "./App.css";
function App() {
  return (
    <div className="app">
      <div className="app_main">
        <Navbar />
        <Header />
      </div>
      <Clients />
      <ClientsGet />
      <Portfolio />
      <WorkFlow />
      <Shout />
    </div>
  );
}

export default App;

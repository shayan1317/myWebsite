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
        <section id="header" name="header">
          <Header />
        </section>
      </div>
      <section id="clients" name="clients">
        <Clients />
      </section>
      <section id="clientsGet" name="clientsGet">
        <ClientsGet />
      </section>
      <section id="portfolio" name="portfolio">
        <Portfolio />
      </section>
      <section id="workflow" name="workflow">
        <WorkFlow />
      </section>
      <section id="shout" name="shout">
        <Shout />
      </section>
    </div>
  );
}

export default App;

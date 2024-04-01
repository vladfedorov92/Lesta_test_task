import "./App.css";
import ShipList from "./components/shipList";
import Header from "./components/header";
import { useAppSelector } from "./hooks/hooks";
import React from "react";

function App() {
  const load = useAppSelector((state) => state.vehicle.length);
  const loading = localStorage.getItem("myData")?.length;
  return (
    <div className="App">
      <Header />
      {!loading && !load && <span className="loader"></span>}
      <ShipList />
    </div>
  );
}

export default App;

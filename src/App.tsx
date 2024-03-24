import './App.css';
import ShipList from "./components/shipList";
import Header from "./components/header";

function App() {
     return (
    <div className="App" >
        {/*<div className={"backgroundImage"}>*/}
        {/*    <img src={"https://mk-static-production.lesta.ru/metashop/bd91dbc0/assets/images/main_bg.jpg"} alt="backgroundImage"/>*/}
        {/*</div>*/}
        <Header/>
        <ShipList/>
    </div>
  );
}

export default App;

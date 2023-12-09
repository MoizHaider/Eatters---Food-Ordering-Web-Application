import "./App.css";
import Nav from "./Components/Nav/Nav";
import axios from "axios";

function App() {
  if(window.location.href!="/orders/checkout/map")
  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;

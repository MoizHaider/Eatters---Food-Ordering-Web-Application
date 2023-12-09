import "./App.css";
import Nav from "./Components/Nav/Nav";
import axios from "axios";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  if(window.location.href!="/checkoutMap"){
    dispatch(setC)
  }
  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;

import "./App.css";
import Nav from "./Components/Nav/Nav";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCheckoutStatusStatic } from "./Store/OrdersSlice";

function App() {
  const dispatch = useDispatch();
  if(window.location.href!="/checkoutMap"){
    dispatch(setCheckoutStatusStatic)
  }
  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;

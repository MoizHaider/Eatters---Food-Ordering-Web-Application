import "./App.css";
import Nav from "./Components/Nav/Nav";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { checkoutStatusFunc, setCheckoutStatusStatic } from "./Store/OrdersSlice";

function App() {
  

  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;

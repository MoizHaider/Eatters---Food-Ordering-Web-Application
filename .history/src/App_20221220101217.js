import "./App.css";
import Nav from "./Components/Nav/Nav";
import axios from "axios";
import { useDispatch } from "react-redux";
import { checkoutStatus, setCheckoutStatusStatic } from "./Store/OrdersSlice";
import {checkoutStatus} from "./Store/OrdersSlice"

function App() {
  const dispatch = useDispatch();
  const checkoutStatus = useSelector(checkoutStatus);
  if(window.location.href!="/checkoutMap"){
    dispatch(setCheckoutStatusStatic(false));
  }
  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;

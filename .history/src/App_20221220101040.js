import "./App.css";
import Nav from "./Components/Nav/Nav";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCheckoutStatusStatic } from "./Store/OrdersSlice";

function App() {
  const dispatch = useDispatch();
  const useSelector();
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

import "./App.css";
import Nav from "./Components/Nav/Nav";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { checkoutStatusFunc, setCheckoutStatusStatic } from "./Store/OrdersSlice";

function App() {
  const dispatch = useDispatch();
  const checkoutStatus = useSelector(checkoutStatusFunc);
  if (checkoutStatus === true) {
    if (!window.location.href.in) {
      dispatch(setCheckoutStatusStatic(false));
    }
  }

  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;

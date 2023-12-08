import "./App.css";
import Nav from "./Components/Nav/Nav";
import axios from "axios";
import { useDispatch } from "react-redux";
import { checkoutStatus, setCheckoutStatusStatic } from "./Store/OrdersSlice";
import { useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const checkoutStatus = useSelector(checkoutStatus);
  if (checkoutStatus === true) {
    if (window.location.href != "/checkoutMap") {
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

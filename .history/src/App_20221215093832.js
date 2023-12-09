import "./App.css";
import Nav from "./Components/Nav/Nav";
import axios from "axios";

function App() {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;

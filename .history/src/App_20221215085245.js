
import "./App.css";
import Nav from "./Components/Nav/Nav"

function App() {
  

const options = {
  method: 'GET',
  url: 'https://referential.p.rapidapi.com/v1/country',
  params: {
    fields: 'currency,currency_num_code,currency_code,continent_code,currency,iso_a3,dial_code',
    limit: '250'
  },
  headers: {
    'X-RapidAPI-Key': '2acc994d7dmsh58dbe251e2934c7p1f4666jsn8063d9830ae3',
    'X-RapidAPI-Host': 'referential.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  

  return (
    <div>
      <Nav/>
    </div>
  );
}

export default App;

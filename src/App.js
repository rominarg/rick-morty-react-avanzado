import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';
import Filters from "./components/Filters/Filters";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Ricky and Morty</h1> 
      <div class="container">
  <div class="row">
    <div class="col-3">
      <Filters></Filters>
    </div>
    <div class="col-8">
      Cards
    </div>

  </div>
</div>
    </div>
    



  );
}

export default App;

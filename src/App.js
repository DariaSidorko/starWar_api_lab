
import './App.css';
import StarWarsAPI from './srvices/sw-api';
import StarshipCard from './StarshipCard';
import {useState, useEffect} from "react";

function App() {
  return (
    <div className="App">
      <StarWarsAPI />
    </div>
  );
}

export default App;


// {starShips ? starShips.results.map((item,idx) => {
//   return <StarShipCard key={idx} starShips={item} />
// }) : checkIfExist()}
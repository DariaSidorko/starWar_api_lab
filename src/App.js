
import './App.css';
import StarshipCard from './StarshipCard';
import {useState, useEffect} from "react";
import { getShips } from './srvices/sw-api';

export default function App() {

const [ships, setShips] = useState(null);

if (ships === null) {
 let data = getShips();
 console.log(data)
 data.then((temp)=> {
  if (temp) setShips(temp); 
  
 })
}

  return (
    <div className="App">
        <div>
          {
            ships ?
            ships.results.map((result) => {
            return (
              <StarshipCard result={result}/>
            )
            }) : <div> </div>
          } 
        </div>
    </div>
  );
}





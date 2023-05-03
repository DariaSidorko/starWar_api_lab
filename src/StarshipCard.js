
import {useState, useEffect} from "react";
import Card from './Card.js'

export default function StarshipCard({result}) {

const [shipState, setShip] = useState('');

function ship () {
  setShip(result);
} 

return (
  
    <div>
      <button onClick={ship}>{result.model}</button>
      { shipState !== '' ? 
       <Card shipState = {shipState}/> : <div> </div>
     }
    </div>

)
}
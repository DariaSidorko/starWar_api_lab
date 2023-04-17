import StarshipCard from "../StarshipCard";
import {useState} from "react";


export default function StarWarsAPI() {
  
  const [ships, setShips] = useState(null);

  const getShips = async () => {
    const response = await fetch(
      `https://swapi.dev/api/starships/`
    );
    const data = await response.json();
    setShips(data);
  }

  if (ships === null) {
    getShips();
  }

  return (
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
  )







  // const loading = () => {
  //   return <h1>Ships</h1>;
  // };

  // return ships ? loaded() : loading();
}
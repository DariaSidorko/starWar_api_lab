


  export const getShips = async () => {
    const response = await fetch(
      `https://swapi.dev/api/starships/`
    );
    const data = await response.json();
    //console.log(data)
    return data;
  }




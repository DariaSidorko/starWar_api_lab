
import {useState, useEffect} from "react";


export default function StarshipCard({shipState}) {

return (
    <div>
      <div>
       <p><span>model:</span> {shipState.model}</p>
       <p><span>length:</span> {shipState.length}</p>
     </div> 
    </div>
 
)
}
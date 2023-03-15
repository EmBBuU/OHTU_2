import React from "react";
import Button from "./Button";
import ScoreTable from "./ScoreTable";


const GivePoints = () =>{
  const [ counter, setCounter ] = React.useState(0)

  return (
    <div>
    <div>{counter}</div>
    <div>
      <button onClick={() => setCounter(counter + 1)}>
      +
      </button>
      <button onClick={() => setCounter(counter-1)}> 
      -
      </button>
      </div>
      <div>
        <h1>RASTI NRO X</h1>
      </div>
      <div>
        <ScoreTable />
      </div>
    </div>
  );
}


export default GivePoints;

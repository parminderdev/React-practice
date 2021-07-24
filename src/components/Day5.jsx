import React, { useState } from "react";
// State in Function component
// Click Event and functions calling using arrow functions
// Update state with Button Click
export default function Day5() {
  //let data = "Parminder Singh";
  const [data, setData] = useState(1);
  function clickhappens() {
    setData(data + 1);
  }
  return (
    <div>
      <h1>Day4 Component by Parminder</h1>
      <h3>
        <b>Practice:how to use states in functional component</b>
      </h3>
      <h2>Increment the state : {data}</h2>
      <button onClick={() => clickhappens()}>Click Me</button>
    </div>
  );
}

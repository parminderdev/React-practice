import React, { useState } from "react";
// State in Function component
// Click Event and functions calling using arrow functions
// Update state with Button Click
export default function Day5() {
  //let data = "Parminder Singh";
  const [data, setData] = useState("Parminder");
  function clickhappens() {
    setData("Rahul");
  }
  return (
    <div>
      <h3>Day5 Created by {data}</h3>
      <button onClick={() => clickhappens()}>Click Me</button>
    </div>
  );
}

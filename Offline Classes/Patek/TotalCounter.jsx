import React, { useState } from "react";
import Events1 from "./Events1";
const TotalCounter = () => {
  const [counters, setCounter] = useState([
    { id: 1, counts: 1 },
    { id: 2, counts: 2 },
    { id: 3, counts: 3 },
    { id: 4, counts: 4 },
    { id: 5, counts: 5 },
  ]);
  const deleteCounter = (id) => {
    let lcounter = counters.filter((counter) => counter.id != id);
    setCounter(lcounter);
  };
  return (
    <div>
      {counters.map((counter) => (
        <Events1 key={counter.id} counter={counter} onDelete={deleteCounter} />
      ))}
    </div>
  );
};

export default TotalCounter;

import React, { useState } from "react";

const Events1 = (props) => {
    const {counts,id}= props.counter;
  const [count, setCount] = useState(counts);
  const IncNum = () => {
    let lcount = count;
    setCount(lcount + 1);
    // alert('event called');
  };
  const DecNum = () => {
    let lcount = count;
    setCount(lcount <= 0 ? 0 : lcount - 1);
    // alert('called');
  };
  const changeClass = () => {
    let check = count <= 0 ? "btn btn-danger mx-2" : "btn btn-warning mx-2";
    return check;
  };
  return (
    <div className="my-5">
      <button onClick={IncNum} className="btn btn-primary">
        Increment
      </button>
      <span className={changeClass()}>{count}</span>
      <button onClick={DecNum} className="btn btn-primary">
        Decrement
      </button>
      <button className="btn btn-danger mx-3" onClick={()=>props.onDelete(id)}>Delete</button>
    </div>
  );
};

export default Events1;

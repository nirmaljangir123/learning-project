// // Example component

import { useState, useRef } from "react";
import { data1 } from "../App";

const Counter = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <data1.Consumer>
        {(name) => {
          return (
            <>
              <h1>{name}</h1>
            </>
          );
        }}
      </data1.Consumer>
      <h1>Time passed: {secondsPassed.toFixed(0)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};
export default Counter;

// import React, { useRef, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { createUser, deleteUser, getUser } from "../features/showSlice";

// const Counter = () => {
//   const count = useSelector((state) => state.counter);
//   const dispatch = useDispatch();
//   const refElement = useRef("");
//   const [name, setName] = useState("nirmal");
//   console.log("ref ====>", refElement);
//   console.log("name ====>", name);

//   return (
//     <div>
//       <p>Learning useRef</p>
//       <input
//         ref={refElement}
//         type={"text"}
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       ></input>

//       {/* <button onClick={() => dispatch(addition(12))}>{"Increment"}</button> */}
//       {/* <button
//         onClick={() => dispatch(createUser({ userId: 1, username: "JohnDoe" }))}
//       >
//         {"add"}
//       </button> */}
//       {/* <button onClick={() => dispatch(deleteUser(1))}>{"delete"}</button> */}
//     </div>
//   );
// };
// export default Counter;

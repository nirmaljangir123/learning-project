import React, { useContext } from "react";
import { data1, data2 } from "../App";

const ContextHooksUse = () => {
  const fName = useContext(data1);
  const age = useContext(data2);
  return (
    <>
      <h3>How to use use context Hooks</h3>
      <h2>{fName}</h2>
      <h1>{age}</h1>
    </>
  );
};

export default ContextHooksUse;

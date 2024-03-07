import React, { useContext } from "react";
import { data1 } from "../App";

const Child1 = () => {
  return (
    <data1.Consumer>
      {(name) => {
        return (
          <>
            <h3>my name is {name}</h3>
          </>
        );
      }}
    </data1.Consumer>
  );
};

export default Child1;

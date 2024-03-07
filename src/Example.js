import "./App.css";
import Counter from "./component/Counter";
import Child1 from "./component/Child1";
import ContextHooksUse from "./component/contextHooksUse";
import { createContext, useContext } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";

import React from "react";
import { Route, Routes } from "react-router-dom";

const Example = () => {
  return <Routes>{/* <Route path="/" element={} /> */}</Routes>;
};

export default Example;

// Create a context
// const data1 = createContext();

// function App() {
//   const name = "nirmal jangid is a good";
//   return (
//     // use for create context hooks time
//     <div className="App">
//       <data1.Provider value={name}>
//         <Child1 />
//         <Counter />
//       </data1.Provider>
//     </div>
//   );
// }

// export default App;
// export { data1 };

// how to use use context hooks
// const data1 = createContext();
// const data2 = createContext();

// function App() {
//   const name = "use context hooks";
//   const age = "20";
//   return (
//     // use for create context hooks time
//     <div className="App">
//       <Header />
//       <data1.Provider value={name}>
//         <data2.Provider value={age}>
//           <ContextHooksUse />
//         </data2.Provider>
//       </data1.Provider>
//       <Footer />
//     </div>
//   );
// }

// export default App;
// export { data1, data2 };

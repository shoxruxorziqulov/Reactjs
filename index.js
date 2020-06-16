import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./containers/Sidebar";
// import Article from './components/Article';
// import App from "./components/App";

ReactDOM.render(
  <Sidebar title="Class Component" data={{ name: "Alisher", age: 78 }} />,
  document.getElementById("root")
);
// ReactDOM.render(<App />, document.getElementById("root"));

// function HelloWorld() {
//     return(
//         <div>
//             <h1>Hello World!</h1>
//         </div>
//     )
// }

// ReactDOM.render(<HelloWorld/>, document.getElementById('root'))

// const data = <h1>Hello World!</h1>
// const data1 = <h1>Hello World!</h1>

// ReactDOM.render(data, document.getElementById('root'));

// ReactDOM.render(
//     <section>
//         {data}
//     </section>,document.getElementById('root')
// )

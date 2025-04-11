import React from "react";
import './App.css';
// function Test() {
//     return React.createElement(
//       "div",
//       { className: "test-container" }, 
//       React.createElement("h1", null, "This is really challenging")
//     );
//   }
  
function Test(props){
    return (<div>
        <h1>label {props.name}</h1>
        <h2>label2{props.age}</h2>
    </div>
        //console.log(props)
    );
};


  export default Test;
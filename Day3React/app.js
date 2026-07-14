import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement("h1",{id:"first", className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}},"Hello Coder Army");
const element2 = React.createElement("h2",{id:"second", className:"Rahul", style:{backgroundColor:"black", fontSize:"30px", color:"pink"}},"Maja aaya muje");

const div1 = React.createElement('div',{},[element,element2]);
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(div1);

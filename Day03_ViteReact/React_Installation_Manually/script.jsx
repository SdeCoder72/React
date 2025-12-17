// installing dependencies manually using terminal

import React from "react";
import ReactDOM from "react-dom/client"

const ele = <h1>Hello World!</h1>
// React.createElement('h1', null, "Hello World!")

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(ele);

// creating element using function
function createElement(type, props, children){
    const element = document.createElement(type);
    element.textContent = children;
    for(const k in props){
        if(k === "style"){
            Object.assign(element.style, props.style);
        }
        else {
            element[k] = props[k];
        }
    }
    return element;
}

const ele2 = createElement("h1",{className: "element", id: "second", style:{backgroundColor: "gray", color: "black", fontSize: "40px"}} , "Be strong!")

// Creating element manually
const ele = document.createElement('h1');
ele.textContent = "Hi everyone!";
ele.className = "element";
ele.id = "first";
ele.style.fontSize = "40px";
ele.style.backgroundColor = "blue";

// Creating element using custom build React object
const React = {
    createElement: function(type, props, children){
        const element = document.createElement(type);
        element.textContent = children;
        for(const key in props) {
            if(key === "style") {
                Object.assign(element.style, props.style);
            }
            else element[key] = props[key];
        }
        return element;
    }
}
const ele3 = React.createElement("h2",{className: "element", id: "third", style:{backgroundColor: "powderblue", color: "black", fontSize: "20px"}} , "Don't Stop!")

// custom build ReactDOM
const ReactDOM = {
    render: function(child, parent){
        parent.append(child);
    }
}

const root = document.getElementById('root');

ReactDOM.render(ele, root);
ReactDOM.render(ele2, root);
ReactDOM.render(ele3, root);

// root.append(ele);
// root.append(ele2);
// root.append(ele3);


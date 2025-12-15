// Original React-like object
const React = {
  createElement: function(type, props, children) {
    return {
      type: type,
      props: {
        ...props,
        children: children
      }
    }
  }
};

const ReactDOM = {
  render: function(reactElement, root) {
    const element = document.createElement(reactElement.type);
    const {props} = reactElement;

    for (const k in props) {
      if (k === "style") {
        Object.assign(element.style, props.style);
      } else if (k === "children") {
        element.textContent = props[k];
      } else {
        element[k] = props[k];
      }
    }

    root.append(element);
  }
};

// Example usage
const myElement = React.createElement(
  "h1",
  { className: "title", id: "heading", style: { color: "blue", fontSize: "30px", backgroundColor: "grey"} },
  "Hello World!"
);

const root = document.getElementById("root");
ReactDOM.render(myElement, root);

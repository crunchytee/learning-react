import React from 'react';
import ReactDOM from 'react-dom';


const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h4", {}, props.breed),
    React.createElement("h4", {}, props.weight),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, { name: "Nova", animal: "dog", breed: "German Shepard", weight: "165" }),
    React.createElement(Pet, { name: "Odie", animal: "dog", breed: "wheaton" }),
    React.createElement(Pet, { name: "sudo", animal: "dog", breed: "lab" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

import Todolist from "../components/todolist";
import * as React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="todo-app">
        <Todolist />
      </div>
    );
  }
}

export default App;

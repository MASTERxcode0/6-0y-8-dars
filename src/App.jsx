import React from "react";
import { Routes, Route } from "react-router-dom";
import Todolist from "./pages/TodoList";
import List from "./pages/LIst/List";
function App() {
  return (
    <div>
      <Todolist />
      <List />
    </div>
  );
}

export default App;

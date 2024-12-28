import React, { useState, useEffect } from "react";
import { ContextProvider } from "./components/useContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <ContextProvider>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-med-8 mt-4">
            <h3 className="text-center">Todo Input</h3>
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;

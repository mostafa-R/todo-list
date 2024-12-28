import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { InputContext } from "./useContext";

function TodoList() {
  const { input, clearList } = useContext(InputContext);

  const { items } = input;
  return (
    <ul className="list-group my-5">
      <h3 className="text-center">Todo List</h3>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
      <button
        className="btn btn-danger btn-block mt-5"
        type="button"
        onClick={clearList}
      >
        Clear List
      </button>
    </ul>
  );
}

export default TodoList;

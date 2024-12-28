import React, { useContext } from "react";
import { InputContext } from "./useContext";

function TodoItem({ item }) {
  const { handleDeleteItem, handleEdit, handleChecked } =
    useContext(InputContext);

  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <input
        type="checkbox"
        className="mr-2"
        checked={item.checked}
        onChange={() => handleChecked(item.id)}
      />
      <h6
        className={
          item.checked ? "text-muted text-decoration-line-through" : ""
        }
      >
        {item.title}
      </h6>
      <div className="todo-icon">
        <span className="mx-2 text-success" onClick={() => handleEdit(item.id)}>
          <i className="fas fa-pen "></i>
        </span>
        <span
          className="mx-2 text-danger"
          onClick={() => handleDeleteItem(item.id)}
        >
          <i className="fas fa-trash"></i>
        </span>
      </div>
    </li>
  );
}

export default TodoItem;

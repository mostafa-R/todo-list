import React, { useContext } from "react";
import { InputContext } from "./useContext";

function TodoInput() {
  const { input, setInput, handleSubmit } = useContext(InputContext);
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white h-100">
              <i className="fa-solid fa-book" />
            </div>
          </div>
          <input
            value={input.item}
            onChange={(e) => setInput({ ...input, item: e.target.value })}
            autoFocus
            type="text"
            className="form-control"
            placeholder="Add Todo Item"
          />
        </div>
        <button
          className={
            !input.editItem
              ? "btn btn-block btn-primary mt-3 w-100"
              : "btn btn-block btn-success mt-3 w-100"
          }
          type="submit"
        >
          {!input.editItem ? "Add Item" : "Save"}
        </button>
      </form>
    </div>
  );
}

export default TodoInput;

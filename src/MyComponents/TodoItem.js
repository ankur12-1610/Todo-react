import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="card bg-light mb-3 ">
      <div className="card-body">
        <h4 className="card-title">{todo.title}</h4>
        <p className="card-text">{todo.desc}</p>
        <button
          className="btn btm-sm btn-danger"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

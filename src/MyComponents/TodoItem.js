import React from "react";
import PropTypes from "prop-types";

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

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

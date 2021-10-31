import React from "react";
import { TodoItem } from "./TodoItem";
import PropTypes from "prop-types";

export const Todos = (props) => {
  let myStyle = {
    minheight: "20vh",
    margin: "20px 0",
  };
  return (
    <div className="container" style={myStyle}>
      <div className="row">
        <div className="col">
          <h4 className="my-3">Todos List</h4>
        </div>
        <div className="col" style={{ textAlign: "right" }}>
          <h4 className="my-3">{props.todos.length}</h4>
        </div>
      </div>

      <hr></hr>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

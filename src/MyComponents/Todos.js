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
      <h4 className="my-3">Todos List</h4>
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

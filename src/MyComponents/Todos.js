import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minheight: "20vh",
    margin: "20px 0",
  };
  return (
    <div className="container" style={myStyle}>
      <div class="row">
        <div class="col">
          <h4 className="my-3">Todos List</h4>
        </div>
        <div class="col" style={{ textAlign: "right" }}>
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

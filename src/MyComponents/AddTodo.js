import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const AddTodo = ({ addTodo }) => {
  let addTodocss = {
    padding: "14px",
  };
  let buttoncss = {
    backgroundcolor: "#53b3cb",
  };
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description left blank :|");
    }
    addTodo(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <>
      <div style={addTodocss}>
        <h4 className="my-3">Add a Todo</h4>
        <hr />
        <div>
          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Todo Title
              </label>
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="form-control"
                id="title"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Todo Description
              </label>
              <input
                value={desc}
                type="text"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                className="form-control"
                id="desc"
              />
            </div>
            <button type="submit" className="btn btn-info" style={buttoncss}>
              Add Todo
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

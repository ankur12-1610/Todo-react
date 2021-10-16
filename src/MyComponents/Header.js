import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    //   <nav className="navbar navbar-dark bg-dark">
    //    <div className="container-fluid">
    //      <Link className="navbar-brand" to="/">{props.title}</Link>
    //      <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //        <span className="navbar-toggler-icon"></span>
    //      </button>
    //      <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //          <li className="nav-item">
    //            <Link className="nav-link active" to="/about">About</Link>
    //          </li>
    //        </ul>
    //        {props.searchBar ? <form className="d-flex">
    //          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //          <button className="btn btn-outline-light" type="submit">Search</button>
    //        </form>: <div style={color}>Oohh shoot!!!</div>}
    //      </div>
    //    </div>
    //  </nav>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <div className="d-flex">
          <Link to="/About">
            <button className="btn btn-outline-light" type="button">
              About
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
Header.defaultProps = {
  title: "Enter you title :|",
  // searchBar: true,
};
Header.propTypes = {
  title: PropTypes.string,
  // searchBar: PropTypes.bool.isRequired,
};

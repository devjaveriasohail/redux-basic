import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Navbar = () => {
  const state = useSelector((state) => state.amount);
  console.log(state);
  return (
    <>
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-dark fs-5 ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link  className="navbar-brand" to="/">
              <h1>Store</h1>
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                   About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="d-flex  justify-content-evenly ">
                <button className="btn btn-outline-light mx-2">
                  Your Balance = {state}
                </button>
                <input
                  className=" mx-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light mx-2" type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </nav>
    </div>

    </>
  );
};
export default Navbar;

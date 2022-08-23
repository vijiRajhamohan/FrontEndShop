import React from "react";
import { Link } from "react-router-dom";

function feed() {
  return (
    <div>
      <div
        className="container-fluid d-flex"
        style={{ backgroundColor: "#bf2758" }}
      >
        <Link to="./home.html" className="navbar-brand">
          <img src="./image/f.png" alt="" width="100" height="50" />
        </Link>
        <p className="text-white mb-1 fs-1">PETTY SHOP</p>

        <div>
          <Link
            to="/home"
            className="text-white position-absolute top-0 end-0 pt-3"
          >
            back to home
          </Link>
        </div>
      </div>

      <div className=" container mx-0 mx-sm-auto pt-2 pb-2">
        <div className="card">
          <div className="card-body">
            <div className="text-center">
              <i className="far fa-file-alt fa-4x mb-3 text-primary"></i>
              <p>
                <strong>Your opinion matters</strong>
              </p>
              <p>
                Have some ideas how to improve our product?
                <strong>Give us your feedback.</strong>
              </p>
            </div>

            <hr />

            <form className="px-4" action="">
              <p className="text-center">
                <strong>Your rating:</strong>
              </p>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleForm"
                  id="radio2Example1"
                />
                <label className="form-check-label" for="radio2Example1">
                  Very good
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleForm"
                  id="radio2Example2"
                />
                <label className="form-check-label" for="radio2Example2">
                  Good
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleForm"
                  id="radio2Example3"
                />
                <label className="form-check-label" for="radio2Example3">
                  Medicore
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleForm"
                  id="radio2Example4"
                />
                <label className="form-check-label" for="radio2Example4">
                  Bad
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleForm"
                  id="radio2Example5"
                />
                <label className="form-check-label" for="radio2Example5">
                  Very bad
                </label>
              </div>
            </form>
          </div>
          <div className="card-footer text-end">
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default feed;

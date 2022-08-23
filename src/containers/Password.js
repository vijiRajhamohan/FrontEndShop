import React from "react";
import { Link } from "react-router-dom";
import "./Password.css";
function Password() {
  return (
    <div>
      <div
        className="container-fluid d-flex "
        style={{ backgroundColor: "#BF2758" }}
      >
        <img src="./image/f.png" alt="img" width="100" height="50" />
        <span>
          <p className="text-white fs-1 ">PETTI SHOP</p>
        </span>
      </div>

      <div className="container-fluid padding-bottom-3x mb-2 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="forgot">
              <h2>Forgot your password?</h2>
              <p>
                Change your password in three easy steps. This will help you to
                secure your password!
              </p>
              <ol className="list-unstyled">
                <li>
                  <span className="text-primary text-medium">1. </span>Enter
                  your email address below.
                </li>
                <li>
                  <span className="text-primary text-medium">2. </span>Our
                  system will send you Link temporary link
                </li>
                <li>
                  <span className="text-primary text-medium">3. </span>Use the
                  link to reset your password
                </li>
              </ol>
            </div>
            <form className="card mt-4">
              <div className="card-body">
                <div className="form-group">
                  <label htmlfor="email-for-pass">
                    Enter your email address
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="email-for-pass"
                    required=""
                  />
                  <small className="form-text text-muted">
                    Enter the email address you used during the registration on
                    BBBootstrap.com. Then we'll email Link link to this address.
                  </small>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-success" type="submit">
                  Get New Password
                </button>
                <Link to="/login" className="btn btn-danger" type="button">
                  Back to Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;

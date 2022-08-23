import React from "react";
import { Link } from "react-router-dom";

function Contact() {
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
            className="text-white position-absolute top-0 end-0 pt-3 m-1"
          >
            back to home
          </Link>
        </div>
      </div>

      <div className="container-fluid mb-2 h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-7 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="img"
              className="img-fluid"
            />
          </div>

          <div className="col-md-5 col-lg-6 col-xl-4 offset-xl-1">
            <div className="text-center text-md-left">
              <h1>Contact us</h1>
            </div>
            <form>
              <div className=" mb-4 my-3  align-items-center input-field">
                <label htmlFor="name" className="form-label">
                  Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                />
              </div>

              <div className=" align-items-center input-field my-3 mb-4">
                <label htmlFor="email" className="form-label">
                  Email<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                />
              </div>
              <div className=" align-items-center input-field mb-4">
                <label htmlFor="subject" className="form-label">
                  Subject<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                />
              </div>

              <div className=" align-items-center input-field mb-4">
                <label htmlFor="message" className="form-label">
                  message<span className="text-danger">*</span>
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  rows="2"
                  className="form-control md-textarea"
                ></textarea>
              </div>
              <div className="text-center text-md-left">
                <button className="btn btn-primary"> SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;

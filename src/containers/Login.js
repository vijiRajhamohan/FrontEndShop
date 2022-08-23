import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

function Login() {
  // Login Schema

  const navigate = useNavigate();
  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).max(10).required("Invalid password"),
  });

  return (
    <div>
      <div
        class="container-fluid d-flex "
        style={{ backgroundColor: "#BF2758" }}
      >
        <Link to="/landing">
          <img src="./image/f.png" alt="img" width="100" height="50" />
        </Link>
        <p class="text-white fs-1">PETTI SHOP</p>
      </div>

      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-6 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt=""
              className="img-fluid"
            />
          </div>

          <div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
            <h3 className="mb-5 text-uppercase">Login</h3>

            {/* Formik validation */}
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={async (values) => {
                // api call
                try {
                  const url = "https://pettishopnew.herokuapp.com/api/login";
                  const { data } = await axios.post(url, values);

                  window.localStorage.setItem("accessToken", data);
                  window.localStorage.setItem("email", values.email);
                  navigate("/home");
                  alert("loggedin successfully");
                } catch ({ response: { data } }) {
                  alert("Wrong credential!");
                }
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="d-flex align-items-center input-field mb-4">
                    {/* email */}
                    <span className="bx bx-user-circle"></span>

                    <Field
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <span className="text-danger text-start">
                      {errors.email}
                    </span>
                  ) : null}
                  {/* Password */}
                  <div className="d-flex align-items-center input-field mb-4">
                    <span className="bx bx-user-circle"></span>
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <button className="btn btn-link">
                      <span className="bx bx-low-vision"></span>
                    </button>
                  </div>
                  {errors.password && touched.password ? (
                    <span className="text-danger text-start">
                      {errors.password}
                    </span>
                  ) : null}
                  {/* submit button */}
                  {/* <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="form2Example3"
                      />
                      <label className="form-check-label">Remember me</label>
                    </div>
                    <Link to="/password" className="text-body">
                      Forgot password?
                    </Link>
                  </div> */}

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      style={{
                        paddinglLeft: "2.5rem",
                        paddingRight: "2.5rem",
                      }}
                    >
                      Login
                    </button>

                    <p className="small fw-bold mt-2 pt-1 pb-2 mb-0">
                      Don't have an account?
                      <Link to="/register" className="link-danger">
                        Register
                      </Link>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

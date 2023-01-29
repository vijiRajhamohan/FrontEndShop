import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

function Admin() {
  const navigate = useNavigate();
  const adminLoginSchema = Yup.object().shape({
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
            <img src="./image/login.gif" alt="" className="img-fluid" />
          </div>

          <div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
            <h3 className="mb-5 text-uppercase">Admin Login</h3>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={adminLoginSchema}
              onSubmit={async (values) => {
                try {
            const { data } = await axios.post("https://backendfinal-oi59.onrender.com/api/admin/login", values);
               window.localStorage.setItem("adminToken", data);
                  window.localStorage.setItem("email", values.email);
                  
                  toast.success(
                    "Loggedin successfully",
                    { autoClose: 2000 },
                    { position: toast.POSITION.TOP_RIGHT }
                  )
                  navigate("/productsadmin");
                } catch ({ response: { data } }) {
                  toast.error(
                    "Wrong credential!",
                    { autoClose: 2000 },
                    { position: toast.POSITION.TOP_RIGHT }
                  );
                }
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="d-flex align-items-center input-field mb-4">
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
                  {/* <div className="d-flex justify-content-between align-items-center">
                    <Link to="/password" className="text-body">
                      Forgot password
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
                      <Link to="/adminregister" className="link-danger">
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

export default Admin;

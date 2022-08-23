import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

function Admin() {
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
            <img src="./image/login.gif" alt="" className="img-fluid" />
          </div>

          <div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
            <h3 className="mb-5 text-uppercase">Admin Login</h3>

           
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={async (values) => {
               
                try {
                  const url = "https://pettishopnew.herokuapp.com/api/admin/login";
                  const { data } = await axios.post(url, values);

                  window.localStorage.setItem("accessToken", data);
                  window.localStorage.setItem("email", values.email);
                  navigate("/productsadmin");
                  alert("loggedin successfully");
                } catch ({ response: { data } }) {
                  alert("Wrong credential!");
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

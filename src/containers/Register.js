import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

function Register() {
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required("Please enter your password"),
    mobile: Yup.number().required().positive().integer(),
    address: Yup.string().min(10).max(50).required(),
    pincode: Yup.number().required().min(6).positive().integer(),
  });

  return (
    <div>
      <div
        class="container-fluid d-flex "
        style={{ backgroundColor: "#BF2758" }}
      >
        <img src="./image/f.png" alt="img" width="100" height="50" />
        <span>
          <p class="text-white fs-1">PETTI SHOP</p>
        </span>
      </div>

      <div className="row  m-2 d-flex justify-content-center  h-100">
        <div className=" col-md-3 col-lg-2 col-xl-5 ">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt=""
            className="img-fluid"
            style={{
              borderTopLeftRadius: ".25rem",
              borderBottomLeftRadius: " .25rem",
            }}
          />
        </div>

        <div className=" col-md-9 col-lg-10 col-xl-6 offset-xl-1">
          <h3 className="mb-5 text-uppercase">registration form</h3>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              mobile: "",
              address: "",
              pincode: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
              try {
                const res = await axios.post(
                  "https://backendfinal-oi59.onrender.com/api/register",
                  values
                );
                console.log(res);
                toast.success(
                  "Register successfully",
                  { autoClose: 2000 },
                  { position: toast.POSITION.TOP_RIGHT }
                );
              
                navigate("/login");
              } catch ({ response: { res } }) {
                toast.error(
                  "Email already exist!",
                  { autoClose: 2000 },
                  { position: toast.POSITION.TOP_RIGHT }
                );
               
              }
            }}
          >
            {({ errors, touched }) => (
              <Form id="register-form">
                <div className="row form-group">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="name">
                      Name<span className="text-danger">*</span>
                    </label>
                    {/*  name */}

                    <Field
                      type="text"
                      name="name"
                      placeholder=" Name"
                      className="form-control"
                    />

                    {errors.name && touched.name ? (
                      <span className="text-danger text-start">
                        *{errors.name}*
                      </span>
                    ) : null}
                  </div>
                  {/* Email */}
                  <div className="col-md-6 mb-4">
                    <label htmlFor="email">
                      Email ID
                      <span className="text-danger">*</span>
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />

                    {errors.email && touched.email ? (
                      <span className="text-danger text-start">
                        *{errors.email}*
                      </span>
                    ) : null}
                  </div>
                </div>
                {/* Password */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="password">
                      Password
                      <span className="text-danger">*</span>
                    </label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />

                    {errors.password && touched.password ? (
                      <span className="text-danger text-start">
                        *{errors.password}*
                      </span>
                    ) : null}
                  </div>
                  {/* Contact number */}
                  <div className="col-md-6  mb-4">
                    <label htmlFor="mobile_number">
                      Mobile Number <span className="text-danger">*</span>
                    </label>
                    <Field
                      type="number"
                      name="mobile"
                      className="form-control"
                      placeholder="Mobile Number"
                    />

                    {errors.mobile && touched.mobile ? (
                      <span className="text-danger text-start">
                        *{errors.mobile}*
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <label htmlFor="address">
                    Address<span className="text-danger">*</span>
                  </label>

                  <Field
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="form-control"
                  />

                  {errors.address && touched.address ? (
                    <span className="text-danger text-start">
                      *{errors.address}*
                    </span>
                  ) : null}
                </div>
                {/* pincode */}

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="pincode">
                      Pincode
                      <span className="text-danger">*</span>
                    </label>
                    <Field
                      type="text"
                      name="pincode"
                      placeholder="Pincode"
                      className="form-control"
                    />

                    {errors.pincode && touched.pincode ? (
                      <span className="text-danger text-start">
                        *{errors.pincode}*
                      </span>
                    ) : null}
                  </div>
                </div>
                {/* submit Button */}

                <div className="d-flex justify-content-around pt-3 p-1">
                  <button
                    type="submit"
                    id="submit"
                    className=" btn btn-primary  btn-lg ms-2"
                  >
                    Register
                  </button>
                  <Link to="/login">Having Account</Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
export default Register;

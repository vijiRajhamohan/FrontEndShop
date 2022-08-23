

import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./Login.css";
import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().alphanum().min(6).max(10).required(),
  // mobile_number: Joi.string()
  //   .length(10)
  //   .pattern(/^[0-9]+$/)
  //   .required(),
});

const INTIAL_FORM = {
  email: "",
  password: "",
  // mobile_number: "",
};

function NewPassword() {
  const validate = (values) => {
    const errors = {};
    const { error } = loginSchema.validate(values);
    if (error) {
      const [err] = error.details;
      errors[err.context.key] = err.message;
    }

    return errors;
  };

  const handleSubmit = (values) => {
    console.log("submitted", values);
    const { error } = loginSchema.validate(values);
    if (error) {
      console.log(error.details[0].ErrorMessage);
    }
  };

  return (
    <div>
      <div
        class="container-fluid d-flex "
        style={{ backgroundColor: "#BF2758" }}
      >
        <img src="./image/f.png" alt="img" width="100" height="50" />

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
            <h3 className="mb-5 text-uppercase">Set New Password</h3>
            <Formik
              initialValues={INTIAL_FORM}
              validate={validate}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit }) => {
                return (
                  <Form id="login-form" onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center input-field mb-4">
                      <span className="bx bx-user-circle"></span>
                      <Field
                        name="email"
                        className="form-control "
                        placeholder="Enter the Email"
                      />
                      <ErrorMessage className="text-danger" name="email" />
                      {/* <Field
                          name="mobile_number"
                          className="form-control "
                          placeholder="Enter the mobile number"
                        />
                        <ErrorMessage
                          className="text-danger"
                          name="mobile_number"
                        /> */}
                    </div>

                    <div className="d-flex align-items-center input-field mb-4">
                      <span className="bx bxs-lock-open"></span>
                      <Field
                        name="password"
                        className="form-control "
                        placeholder="New password"
                      />
                      <ErrorMessage className="text-danger" name="password" />
                      <button className="btn btn-link">
                        <span className="bx bx-low-vision"></span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center input-field mb-4">
                      <span className="bx bxs-lock-open"></span>
                      <Field
                        name="cpassword"
                        className="form-control "
                        placeholder="conform password"
                      />
                      <ErrorMessage className="text-danger" name="cpassword" />
                      <button className="btn btn-link">
                        <span className="bx bx-low-vision"></span>
                      </button>
                    </div>

                    
             

                    <div className="text-center text-lg-start mt-4 pt-2">
                      <Link to="/login">
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
                     </Link>
                     
                      
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;

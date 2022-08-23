import React from "react";
 import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
// import { Maximize } from "@mui/icons-material";

// SignUp Component
function Register() {
  // navigate function
  const navigate = useNavigate();

  // Validation Schema
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

        {/* <div className="row  m-2 d-flex justify-content-center  h-100"> */}
          <div className=" col-md-9 col-lg-10 col-xl-6 offset-xl-1">
            {/* <div className="card-body p-md-5 text-black"> */}
            <h3 className="mb-5 text-uppercase">registration form</h3>
            {/* Formik validation */}
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
                //   const form = {
                //     email: values.email,
                //     message: `Registration Successfully <br/>
                //     <br/>
                //     Best Wishes!!! <br/>
                //     NoodleCountry Restaurant
                //     `,
                //     subject: "Registration",
                //     name: `"Hi", ${values.fullname}`,
                //   };
                try {
                  const url = "https://pettishopnew.herokuapp.com/api/register";
                  const res = await axios.post(url, values);
                  console.log(res);
                  alert("Register Successfully");
                  navigate("/login");
                } catch ({ response: { res } }) {
                  alert("Email already exist!");
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
                  {/* Confirm Password */}
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
                  <Link to="/login">
                    {/* <button
                      type="reset"
                      className="btn btn-primary  btn-lg"
                      // onClick={initialValues}
                    > */}
                     Having Account
                    {/* </button> */}
                </Link >
                    
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

// import React from "react";
// import { Formik, Field, Form } from "formik";
// import "./Register.css";
// import {  useNavigate } from "react-router-dom";
// import axios from "axios";
// // import swal from 'sweetalert'
// import { toast } from "react-toastify";
// function Register(props) {
//     // const validate = (value) => {
//     //   const errors = {};

//     //   if (!value.name) {
//     //     errors.name = "Name is required";
//     //   } else if (!value.email) {
//     //     errors.email = "Email is required";
//     //   } else if (!MAIL_FORMAT.test(value.email)) {
//     //     errors.email = "Email is invalid";
//     //   } else if (!value.password) {
//     //     errors.password = "Password is required";
//     //   } else if (!value.mobile) {
//     //     errors.mobile = "Mobile Number is required";
//     //   } else if (!value.address) {
//     //      errors.address = "Address is required";
//     //   } else if (!value.pincode) {
//     //      errors.pincode = "Pincode is required";
//     //   }
//     //   return errors;
//     // }

//     const INTIAL = {
//       name: "",
//       email: "",
//       password: "",
//       mobile: "",
//       address: "",
//       pincode: "",
//     };
//   // const MAIL_FORMAT = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

//   const navigate = useNavigate();
//   const [user, setUser] = React.useState({INTIAL

//   });

//   const handleChange = ({ target: { name, value } }) => {
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = "http://localhost:5000/api/register";
//       const res = await axios.post(url, user);
//       console.log(res);
//       alert("Login Successfully");
//       navigate("/login");

//     } catch(err) {
//       console.log(err.message)
//     }
//   };

//   return (
//     <div>
//       <div
//         class="container-fluid d-flex "
//         style={{ backgroundColor: "#BF2758" }}
//       >
//         <img src="./image/f.png" alt="img" width="100" height="50" />
//         <span>
//           <p class="text-white fs-1">PETTI SHOP</p>
//         </span>
//       </div>

//       <div className="row  m-2 d-flex justify-content-center  h-100">

//         <div className=" col-md-3 col-lg-2 col-xl-5 ">
//           <img
//             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//             alt=""
//             className="img-fluid"
//             style={{
//               borderTopLeftRadius: ".25rem",
//               borderBottomLeftRadius: " .25rem",
//             }}
//           />
//         </div>

//         <div className=" col-md-9 col-lg-10 col-xl-6 offset-xl-1">
//           <div className="card-body p-md-5 text-black">
//             <h3 className="mb-5 text-uppercase">registration form</h3>
//             <Formik
//               initialValues={user}
//               // validate={validate}
//               onSubmit={handleSubmit}
//             >
//               {({
//               errors,
//                touched,
//                  handleBlur
//                 }) => {
//                 return (
//                   <Form id="register-form" onSubmit={handleSubmit}>
//                     <div className="row form-group">
//                       <div className="col-md-6 mb-4">
//                         <label htmlFor="name">
//                           Name<span className="text-danger">*</span>
//                         </label>

//                         <Field
//                           name="name"
//                           type="text"
//                           onChange={handleChange}
//                           value={user.name}
//                           id="name"
//                           required
//                           className="form-control "
//                           placeholder="Enter the Name"
//                           // onBlur={handleBlur}
//                         />
//                         {touched.name && (
//                           <span className="text-danger">{errors.name}</span>
//                         )}
//                         {/* <ErrorMessage className="text-danger" name="name" /> */}
//                       </div>
//                       <div className="col-md-6 mb-4">
//                         <label htmlFor="email">
//                           Email ID
//                           <span className="text-danger">*</span>
//                         </label>

//                         <Field
//                           name="email"
//                           type="text"
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                           value={user.email}
//                           id="email"
//                           required
//                           className="form-control "
//                           placeholder="Enter the Email"
//                         />
//                         {touched.email && (
//                           <span className="text-danger">{errors.email}</span>
//                         )}
//                         {/* <ErrorMessage className="text-danger" name="email" /> */}
//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="col-md-6 mb-4">
//                         <label htmlFor="password">
//                           Password
//                           <span className="text-danger">*</span>
//                         </label>

//                         <Field
//                           name="password"
//                           type="text"
//                           onBlur={handleBlur}
//                           onChange={handleChange}
//                           value={user.password}
//                           id="password"
//                           required
//                           className="form-control "
//                           placeholder="Enter the password"
//                         />
//                         {touched.password && (
//                           <span className="text-danger">{errors.password}</span>
//                         )}
//                         {/* <ErrorMessage className="text-danger" name="password" /> */}
//                       </div>
//                       <div className="col-md-6  mb-4">
//                         <label htmlFor="mobile_number">
//                           Mobile Number <span className="text-danger">*</span>
//                         </label>

//                         <Field
//                           name="mobile"
//                           type="text"
//                           onChange={handleChange}
//                           value={user.mobile}
//                           onBlur={handleBlur}
//                           id="mobile"
//                           required
//                           className="form-control "
//                           placeholder="Enter the mobile number"
//                         />
//                         {touched.mobile_number && (
//                           <span className="text-danger">
//                             {errors.mobile_number}
//                           </span>
//                         )}
//                         {/* <ErrorMessage className="text-danger" name="mobile" /> */}
//                       </div>
//                     </div>

//                     <div className="form-outline mb-4">
//                       <label htmlFor="address">
//                         Address<span className="text-danger">*</span>
//                       </label>

//                       <Field
//                         name="address"
//                         type="text"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={user.address}
//                         id="address"
//                         required
//                         className="form-control "
//                         placeholder="Enter the address"
//                       />
//                       {touched.address && (
//                         <span className="text-danger">{errors.address}</span>
//                       )}
//                       {/* <ErrorMessage className="text-danger" name="address" /> */}
//                     </div>
//                     <div className="row">
//                       <div className="col-md-6 mb-4">
//                         <label htmlFor="pincode">
//                           Pincode
//                           <span className="text-danger">*</span>
//                         </label>

//                         <Field
//                           name="pincode"
//                           type="text"
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                           value={user.pincode}
//                           id="pincode"
//                           required
//                           className="form-control "
//                           placeholder="Enter the pincode"
//                         />
//                         {touched.pincode && (
//                           <span className="text-danger">{errors.pincode}</span>
//                         )}
//                         {/* <ErrorMessage className="text-danger" name="pincode" /> */}
//                       </div>
//                     </div>

//                     <div className="d-flex justify-content-end pt-3">
//                       <button
//                         type="reset"
//                         className="btn btn-primary  btn-lg"
//                         onClick={INTIAL}
//                       >
//                         Reset
//                       </button>
//                       {/* <Link to="/login"> */}
//                       <button
//                         type="submit"
//                         id="submit"
//                         className=" btn btn-primary  btn-lg ms-2"
//                       >
//                         Register
//                       </button>
//                       {/* </Link> */}
//                     </div>

//                   </Form>
//                 );
//               }}
//             </Formik>
//             );
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Register;

// // // import React from "react";
// // // import { Formik, Field, Form, ErrorMessage } from "formik";
// // // import axios from "axios";
// // // import "./Register.css";
// // // import Joi from "joi";

// // // // const MAIL_FORMAT = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

// // // function Register(props) {

// // //   // const registerSchema = Joi.object({
// // //   //   name: Joi.string().min(6).max(20).required(),
// // //   //   email: Joi.string()
// // //   //     .email({ tlds: { allow: false } })
// // //   //     .required(),
// // //   //   password: Joi.string().alphanum().min(6).max(10).required(),
// // //   //   mobile_number: Joi.string()
// // //   //     .length(10)
// // //   //     .pattern(/^[0-9]+$/)
// // //   //     .required(),
// // //   //   address: Joi.string().max(40).required(),
// // //   //   pincode: Joi.string()
// // //   //     .length(6)
// // //   //     .pattern(/^[0-9]+$/)
// // //   //     .required(),
// // //   // });

// // //    const [user, setUser] = React.useState({
// // //   name: "",
// // //   email: "",
// // //   password: "",
// // //   mobile: "",
// // //   address: "",
// // //   pincode: "",
// // // });
// // //   // const validate = (value) => {
// // //   //   const errors = {};
// // //   //   const { error } = registerSchema.validate(value);
// // //   //   if (error) {
// // //   //     const [err] = error.details;
// // //   //     errors[err.context.key] = err.message;
// // //   //   }

// // //   //   return errors;
// // //   // };
// // // const handleChange = ({ target: { name, value } }) => {
// // //   setUser({ ...user, [name]: value });
// // // };
// // //   const handleSubmit = async (value) => {
// // //     const url = "http://localhost:5000/register";
// // //           const res = await axios.post(url,user);
// // //           console.log(res);
// // //     // console.log("submitted", value);
// // //     // const { error } = registerSchema.validate(value);
// // //     // if (error) {
// // //     //   console.log(error.details[0].ErrorMessage);
// // //     // }
// // //   };

// // //   return (
// // //     <div>
// // //       <div
// // //         class="container-fluid d-flex "
// // //         style={{ backgroundColor: "#BF2758" }}
// // //       >
// // //         <img src="./image/f.png" alt="img" width="100" height="50" />
// // //         <span>
// // //           <p class="text-white fs-1">PETTI SHOP</p>
// // //         </span>
// // //       </div>

// // //       <div className="row  m-2 d-flex justify-content-center  h-100">
// // //         <div className=" col-md-3 col-lg-2 col-xl-5 ">
// // //           <img
// // //             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
// // //             alt=""
// // //             className="img-fluid"
// // //             style={{
// // //               borderTopLeftRadius: ".25rem",
// // //               borderBottomLeftRadius: " .25rem",
// // //             }}
// // //           />
// // //         </div>

// // //         <div className=" col-md-9 col-lg-10 col-xl-6 offset-xl-1">
// // //           <div className="card-body p-md-5 text-black">
// // //             <h3 className="mb-5 text-uppercase">registration form</h3>

// // //             <Formik
// // //               initialValues={user}
// // //               // validate={validate}
// // //               onSubmit={handleSubmit}
// // //             >
// // //               {({
// // //                 handleSubmit,
// // //               }) => {
// // //                 return (
// // //                   <Form id="register-form" onSubmit={handleSubmit}>
// // //                     <div className="row form-group">
// // //                       <div className="col-md-6 mb-4">
// // //                         <label htmlFor="name">
// // //                           Name<span className="text-danger">*</span>
// // //                         </label>

// // //                         <Field
// // //                           name="name"
// // //                           type="text"
// // //                           onChange={handleChange}
// // //                           value={user.name}
// // //                           id="name"
// // //                           required
// // //                           className="form-control "
// // //                           placeholder="Enter the Name"
// // //                         />
// // //                         <ErrorMessage className="text-danger" name="name" />
// // //                       </div>
// // //                       <div className="col-md-6 mb-4">
// // //                         <label htmlFor="email">
// // //                           Email ID
// // //                           <span className="text-danger">*</span>
// // //                         </label>

// // //                         <Field
// // //                           name="email"
// // //                           type="text"
// // //                           onChange={handleChange}
// // //                           value={user.email}
// // //                           id="email"
// // //                           required
// // //                           className="form-control "
// // //                           placeholder="Enter the Email"
// // //                         />
// // //                         <ErrorMessage className="text-danger" name="email" />
// // //                       </div>
// // //                     </div>

// // //                     <div className="row">
// // //                       <div className="col-md-6 mb-4">
// // //                         <label htmlFor="password">
// // //                           Password
// // //                           <span className="text-danger">*</span>
// // //                         </label>

// // //                         <Field
// // //                           name="password"
// // //                           type="text"
// // //                           onChange={handleChange}
// // //                           value={user.password}
// // //                           id="password"
// // //                           required
// // //                           className="form-control "
// // //                           placeholder="Enter the password"
// // //                         />
// // //                         <ErrorMessage className="text-danger" name="password" />
// // //                       </div>
// // //                       <div className="col-md-6  mb-4">
// // //                         <label htmlFor="mobile_number">
// // //                           Mobile Number <span className="text-danger">*</span>
// // //                         </label>

// // //                         <Field
// // //                           name="mobile"
// // //                           type="text"
// // //                           onChange={handleChange}
// // //                           value={user.mobile}
// // //                           id="mobile"
// // //                           required
// // //                           className="form-control "
// // //                           placeholder="Enter the mobile number"
// // //                         />
// // //                         <ErrorMessage className="text-danger" name="mobile" />
// // //                       </div>
// // //                     </div>

// // //                     <div className="form-outline mb-4">
// // //                       <label htmlFor="address">
// // //                         Address<span className="text-danger">*</span>
// // //                       </label>

// // //                       <Field
// // //                         name="address"
// // //                         type="text"
// // //                         onChange={handleChange}
// // //                         value={user.address}
// // //                         id="address"
// // //                         required
// // //                         className="form-control "
// // //                         placeholder="Enter the address"
// // //                       />
// // //                       <ErrorMessage className="text-danger" name="address" />
// // //                     </div>
// // //                     <div className="row">
// // //                       <div className="col-md-6 mb-4">
// // //                         <label htmlFor="pincode">
// // //                           Pincode
// // //                           <span className="text-danger">*</span>
// // //                         </label>

// // //                         <Field
// // //                           name="pincode"
// // //                           type="text"
// // //                           onChange={handleChange}
// // //                           value={user.pincode}
// // //                           id="pincode"
// // //                           required
// // //                           className="form-control "
// // //                           placeholder="Enter the pincode"
// // //                         />
// // //                         <ErrorMessage className="text-danger" name="pincode" />
// // //                       </div>
// // //                     </div>

// // //                     <div className="d-flex justify-content-end pt-3">
// // //                       <button
// // //                         type="reset"
// // //                         className="btn btn-primary  btn-lg"
// // //                         onClick={user}
// // //                       >
// // //                         Reset
// // //                       </button>
// // //                       {/* <Link to="/login"> */}
// // //                       <button
// // //                         type="submit"
// // //                         id="submit"
// // //                         className=" btn btn-primary  btn-lg ms-2"
// // //                       >
// // //                         Register
// // //                       </button>
// // //                       {/* </Link> */}
// // //                     </div>
// // //                   </Form>
// // //                 );
// // //               }}
// // //             </Formik>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Register;

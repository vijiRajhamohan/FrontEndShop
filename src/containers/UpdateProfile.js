import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Register.css";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";
import axios from "axios";
// import swal from 'sweetalert'

function UpdateProfile() {

  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  const editprofile = async () => {
    try {
      const { data } = await axios.get(
        `https://pettishopnew.herokuapp.com/api/user/find/${id}`
      );
      setProfile(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    editprofile();
  });
  return (
    <div className="container">
      {profile ? (
        <EditUpdateForm profile={profile} />
      ) : (
        <div className="progress mt-3">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "75%" }}
          ></div>
        </div>
      )}
    </div>
  );
}
export function EditUpdateForm({ profile }) {
  // navigate to page
  const navigate = useNavigate();
  // state management
  const [base64code, setbase64code] = useState("");

  // state management
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  // const [password, setPassword] = useState(profile.password);
  const [mobile, setMobile] = useState(profile.mobile);
  const [address, setAddress] = useState(profile.address);
  const [pincode, setPincode] = useState(profile.pincode);

  // edit profile update form and api call
  const editprofile = () => {
    const updateProfile = {
      name: name,
      email: email,
      // password: password,
      mobile: mobile,
      address: address,
      pincode: pincode,
    };
    fetch(`https://pettishopnew.herokuapp.com/api/user/find/${profile._id}`, {
      method: "PUT",
      body: JSON.stringify(updateProfile),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/myprofile"));
  };

  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            {/* <div className="col-md-6 col-lg-6 col-xl-5"> */}
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt=""
              className="img-fluid"
            />
            {/* </div>  */}
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h2 style={{ color: "black", fontFamily: "timesnewroman" }}>
                    Update profile
                  </h2>

                  <input
                    className="mt-2 form-control"
                    value={name}
                    type="text"
                    placeholder="name"
                    onChange={(event) => setName(event.target.value)}
                  />
                  <input
                    className="mt-2 form-control"
                    value={email}
                    type="text"
                    placeholder="email"
                    disabled={true}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  {/* <input
                                        className="mt-2 form-control"
                                        value={password}
                                        type="text"
                                        placeholder="password"
                                        onChange={(event) => setPassword(event.target.value)}
                                    /> */}
                  <input
                    className="mt-2 form-control"
                    value={mobile}
                    type="number"
                    placeholder="mobile"
                    onChange={(event) => setMobile(event.target.value)}
                  />
                  <input
                    className="mt-2 form-control"
                    value={address}
                    type="text"
                    placeholder="address"
                    onChange={(event) => setAddress(event.target.value)}
                  />
                  <input
                    className="mt-2 form-control"
                    value={pincode}
                    type="number"
                    placeholder="pincode"
                    onChange={(event) => setPincode(event.target.value)}
                  />
                  <button
                    className="btn btn-outline-success fw-bold mt-2 form-control"
                    onClick={editprofile}
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;





// import React from "react";
// import { Formik, Field, Form } from "formik";
// import "./Register.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// // import swal from 'sweetalert'

// function UpdateProfile() {
//   const INTIAL = {
//     name: "",
//     email: "",
//     password: "",
//     mobile: "",
//     address: "",
//     pincode: "",
//   };

//   const navigate = useNavigate();
//   const [user, setUser] = React.useState({
//     INTIAL,
//   });

//   const handleChange = ({ target: { name, value } }) => {
//     setUser({user, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = "https://pettishopnew.herokuapp.com/api/user/:id";
//       const res = await axios.put(url, user);
//       console.log(res);
//       alert("Update Successfully");
//       navigate("/home");
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   return (
//     <>
//       <div>
//         <div
//           class="container-fluid d-flex "
//           style={{ backgroundColor: "#BF2758" }}
//         >
//           <img src="./image/f.png" alt="img" width="100" height="50" />
//           <span>
//             <p class="text-white fs-1">PETTI SHOP</p>
//           </span>
//         </div>

//         <div className="row  m-2 d-flex justify-content-center  h-100">
//           <div className=" col-md-3 col-lg-2 col-xl-5 ">
//             <img
//               src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//               alt=""
//               className="img-fluid"
//               style={{
//                 borderTopLeftRadius: ".25rem",
//                 borderBottomLeftRadius: " .25rem",
//               }}
//             />
//           </div>

//           <div className=" col-md-9 col-lg-10 col-xl-6 offset-xl-1">
//             <div className="card-body p-md-5 text-black">
//               <h3 className="mb-5 text-uppercase">My Profile</h3>
//               <Formik
//                 initialValues={user}
//                 // validate={validate}
//                 onSubmit={handleSubmit}
//               >
//                 {({ errors, touched, handleBlur }) => {
//                   return (
//                     <Form id="register-form" onSubmit={handleSubmit}>
                      

//                       <div className="row form-group">
                   
                       
//                        <div className="  mb-4">
//                           <label htmlFor="mobile_number">
//                             Mobile Number <span className="text-danger">*</span>
//                           </label>

//                           <Field
//                             name="mobile"
//                             type="text"
//                             onChange={handleChange}
//                             value={user.mobile}
//                             onBlur={handleBlur}
//                             id="mobile"
//                             required
//                             className="form-control "
//                             placeholder="Enter the mobile number"
//                           />
//                           {touched.mobile_number && (
//                             <span className="text-danger">
//                               {errors.mobile_number}
//                             </span>
//                           )}
//                           {/* <ErrorMessage className="text-danger" name="mobile" /> */}
//                         </div>
//                       </div>

//                       <div className="form-outline mb-4">
//                         <label htmlFor="address">
//                           Address<span className="text-danger">*</span>
//                         </label>

//                         <Field
//                           name="address"
//                           type="text"
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                           value={user.address}
//                           id="address"
//                           required
//                           className="form-control "
//                           placeholder="Enter the address"
//                         />
//                         {touched.address && (
//                           <span className="text-danger">{errors.address}</span>
//                         )}
//                         {/* <ErrorMessage className="text-danger" name="address" /> */}
//                       </div>
//                       <div className="row">
//                         <div className=" mb-4">
//                           <label htmlFor="pincode">
//                             Pincode
//                             <span className="text-danger">*</span>
//                           </label>

//                           <Field
//                             name="pincode"
//                             type="text"
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={user.pincode}
//                             id="pincode"
//                             required
//                             className="form-control "
//                             placeholder="Enter the pincode"
//                           />
//                           {touched.pincode && (
//                             <span className="text-danger">
//                               {errors.pincode}
//                             </span>
//                           )}
//                           {/* <ErrorMessage className="text-danger" name="pincode" /> */}
//                         </div>
//                       </div>

//                       <div className="d-flex justify-content-end pt-3">
                       
                       
//                         <button
//                           type="submit"
//                           id="submit"
//                           className=" btn btn-primary  btn-lg ms-2"
//                         >
//                           Update
//                         </button>
                  
//                       </div>
//                     </Form>
//                   );
//                 }}
//               </Formik>
//               );
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default UpdateProfile;

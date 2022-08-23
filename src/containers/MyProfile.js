import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import axios from "axios";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function UserProfile() {
  // state management
  const [base64code, setbase64code] = useState("");

  // navigate to page
  const navigate = useNavigate();

  // user details state management
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // // User Profile Update Schema
  // const ProfileUpdateSchema = Yup.object().shape({
  //   name: Yup.string().required(),
  //   mobile: Yup.number().required().positive().integer(),
  //   password: Yup.string().required("Please enter your password"),
  //   cPassword: Yup.string()
  //     .required("Please conform your password.")
  //     .oneOf([Yup.ref("password")], "Your passwords do not match."),
  //   address: Yup.string().required(),
  //   pincode: Yup.number().required().min(6).positive().integer(),
  // });

  // authtoken localStorage
  const accessToken = window.localStorage.getItem("accessToken");
  // get Id from accessToken
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = decodeURIComponent(
      atob(base64Url)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(base64);
  }

  let a = parseJwt(accessToken);
  let userId = a._id;

  // get users details and api call
  const getUserProfile = async () => {
    try {
      const { data } = await axios.get(`https://pettishopnew.herokuapp.com/api/user/find/${userId}`);
      setUsers(data);
      console.log(data)
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect use refresh data
  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="row mx-auto mt-3">
          {/* Profile details */}
          <div className="col-sm-4 col-md-6 col-lg-4 mx-auto text-center">
            {/* <img src={users.img} alt="" className="w-75 rounded-2" /> */}
            <h5 className="text-danger mt-3">
              Name: <span className="text-secondary">{users.name}</span>
            </h5>
            <h5 className="text-danger">
              Email Id: <span className="text-secondary">{users.email}</span>
            </h5>
            <h5 className="text-danger">
              Contact-Number:{" "}
              <span className="text-secondary">{users.mobile} </span>
            </h5>
            <h5 className="text-danger">
              Address: <span className="text-secondary">{users.address}</span>
            </h5>
            <h5 className="text-danger">
              Pincode: <span className="text-secondary">{users.pincode} </span>
            </h5>
          </div>
          {/*Edit  profile */}

          <button
            className="btn btn-info btn-sm"
            onClick={() => navigate("/updateprofile/edit/" + users._id)}
          >
            <span
              className="iconify"
              data-icon="bxs:edit"
              size="15px"
              color="blue"
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
}










// import axios from "axios";
// import React, { useState } from "react";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import Navigation from '../components/Navigation'
// function MyProfile() {
//   const accessToken = window.localStorage.getItem("accessToken");
//   const [isLoading, setIsLoading] = useState(true);
//   // get userById from authToken
//   function parseJwt(token) {
   
//     // const [isLoading, setIsLoading] = useState(true);
//     var base64Url = token.split(".")[1];
//     var base64 = decodeURIComponent(
//       atob(base64Url)
//         .split("")
//         .map((c) => {
//           return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//         })
//         .join("")
//     );
//     return JSON.parse(base64);
//   }
//   let a = parseJwt(accessToken);
//   let userId = a._id;
  
//   const [users, setUsers] = useState({});
//   const getUsers = async () => {
//     try {
//       const {data} = await axios.get(`https://pettishopnew.herokuapp.com/api/user/find/${userId}`);

//       setUsers(data);
//       console.log(data)
//        setIsLoading(false);

//     } catch(error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <div>
//           <Navigation />
//       <div className="container p-3 m-3 mx-auto d-flex justify-content-center">
//         <table className="table">
//           <thead>
//             <tr>
//               <th>UserId</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Mobile Number</th>
//               <th>Address</th>
//               <th>Pincode</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {users.map &&
//               users.map((u, index) => {
//                 return (
//                   <tr key={index}>
                    
//                     <td className="text-start">{u.name}</td>
//                     <td className="text-start">{u.email}</td>
//                     <td className="text-start">{u.mobile}</td>
//                     <td className="text-start">{u.address}</td>
//                     <td className="text-start">{u.pincode}</td>
                   
//                       <td>
//                         <div>
//                             <Link to="/updateprofile">
//                           <button className="btn btn-info btn-sm">
//                             <span
//                               className="iconify"
//                               data-icon="bxs:edit"
//                               color="blue"
//                             ></span>
//                           </button>
//                                     </Link>
//                         </div>
//                       </td>
                    
//                   </tr>
//                 );
//               })}
//           </tbody>
//         </table>


//         {/* <h1>{users.name}</h1> */}
//       </div>
//     </div>
//   );
// }

// export default MyProfile;

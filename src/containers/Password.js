import React, { useState } from 'react'
import {   useNavigate } from 'react-router-dom'

const Reset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const PostData = () => {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      alert("Wrong credential!");
      return
    }
    fetch('/reset-password', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email
      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          alert("Wrong credential!");
        }
        else {
          alert("loggedin successfully");
          navigate('/login')
        }
      }).catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Petti shop</h2>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
          onClick={() => PostData()}
        >
          reset password
        </button>


      </div>
    </div>
  )
}


export default Reset





// import React from "react";
// import { Link } from "react-router-dom";
// import "./Password.css";
// function Password() {
//   return (
//     <div>
//       <div
//         className="container-fluid d-flex "
//         style={{ backgroundColor: "#BF2758" }}
//       >
//         <img src="./image/f.png" alt="img" width="100" height="50" />
//         <span>
//           <p className="text-white fs-1 ">PETTI SHOP</p>
//         </span>
//       </div>

//       <div className="container-fluid padding-bottom-3x mb-2 mt-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-8 col-md-10">
//             <div className="forgot">
//               <h2>Forgot your password?</h2>
//               <p>
//                 Change your password in three easy steps. This will help you to
//                 secure your password!
//               </p>
//               <ol className="list-unstyled">
//                 <li>
//                   <span className="text-primary text-medium">1. </span>Enter
//                   your email address below.
//                 </li>
//                 <li>
//                   <span className="text-primary text-medium">2. </span>Our
//                   system will send you Link temporary link
//                 </li>
//                 <li>
//                   <span className="text-primary text-medium">3. </span>Use the
//                   link to reset your password
//                 </li>
//               </ol>
//             </div>
//             <form className="card mt-4">
//               <div className="card-body">
//                 <div className="form-group">
//                   <label htmlfor="email-for-pass">
//                     Enter your email address
//                   </label>
//                   <input
//                     className="form-control"
//                     type="text"
//                     id="email-for-pass"
//                     required=""
//                   />
//                   <small className="form-text text-muted">
//                     Enter the email address you used during the registration on
//                     BBBootstrap.com. Then we'll email Link link to this address.
//                   </small>
//                 </div>
//               </div>
//               <div className="card-footer">
//                 <button className="btn btn-success" type="submit">
//                   Reset Password
//                 </button>
//                 <Link to="/login" className="btn btn-danger" type="button">
//                   Back to Login
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Password;

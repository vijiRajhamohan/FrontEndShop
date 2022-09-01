// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Button } from 'bootstrap';
// function Payment() {
//     // const {id}= useParams();
//     // const accessToken = window.localStorage.getItem("accessToken");
//     // // get order api call
//     // const getorder = async () => {
//     //     try {
//     //         const { data } = await axios.get(`https://pettishopnew.herokuapp.com/api/order/${id}`,
//     //             {
//     //                 headers: {
//     //                     "Authorization": `Bearer ${accessToken}`
//     //                 }
//     //             }
//     //         );
//     //         // setpassenger(data);
//     //         console.log(data);
//     //     } catch (error) {
//     //         console.log(error.message);
//     //     }
//     // };

//     // // useEffect use refresh data
//     // useEffect(() => {
//     //     getorder();
//     // }, []);

//     //mail
//     // const sendMail = async () => {
//     //     console.log(passenger.email);
//     //     try {
//     //         const res = await axios.post("https://pettishopnew.herokuapp.com/passenger/mail",
//     //             {
//     //                 TrainName: passenger.traindata.trainname,
//     //                 TrainNumber: passenger.traindata.trainnumber,
//     //                 From: passenger.traindata.from,
//     //                 To: passenger.traindata.to,
//     //                 email: passenger.email,
//     //             },
//     //             {
//     //                 headers: {
//     //                     "Authorization": `Bearer ${accessToken}`
//     //                 },

//     //             }
//     //         );
//     //         console.log(res);
//     //     }
//     //     catch (error) {
//     //         console.log(error.message);
//     //     }
//     // };
//   return (
// <div>
//  <div
//         className="container-fluid d-flex"
//         style={{ backgroundColor: "#bf2758" }}
//       >
//         <Link to="./home.html" className="navbar-brand">
//                   <img
//                       src="https://i.ibb.co/R4R4x1H/f.png"
//                       alt="f"
//                       border="0"
//                       width="100"
//                       height="50"
//                       className="d-inline-block "
//                   />
//         </Link>
//         <p className="text-white mb-1 fs-1">PETTY SHOP</p>

//         <div>
//           <Link
//             to="/home"
//             className="text-white position-absolute top-0 end-0 pt-3 m-1"
//           >
//             Continue Shopping
//           </Link>
//         </div>
//       </div>
//     <div className='card text-center p-5 m-5'style={{color:"blue"}} >
        
//          <h2>Thank You for Shopping!!!Shop Again</h2>
//           <h3>Check your mail for Order Details </h3> 
//             {/* <i class="bx bxs-hand-right"> */}
//              {/* <button type="button" className="btn btn-success">Click Here</button></i> */}
//     </div>
//       </div>
//   )
// }

// export default Payment;
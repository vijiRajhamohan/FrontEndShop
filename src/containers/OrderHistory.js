import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function OrderHistory() {
  // authToken
  const accessToken = window.localStorage.getItem("accessToken");

 
  const navigate = useNavigate();

  const [myOrders, setMyOrders] = useState([]);


  // const [query, setQuery] = useState("");

  // Initial Loading Page
  // const [isLoading, setIsLoading] = useState(true);

  // get userById from authToken
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

  // get userById Orders
  const getUserById = async () => {
    try {
      const { data } = await axios.get(
        `https://pettishopnew.herokuapp.com/api/order/find/${userId}`
      );
      setMyOrders(data);
      //   console.log(data);
      // setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Call function useEffect
  useEffect(() => {
    getUserById();
  }, []);

  return (
    <>
      <Navigation />

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>Total</th>
              <th>STATUS</th>
              <th>Action</th>
            </tr>
          </thead>
          <div className="text-center">
            {" "}
            {/* {isLoading && (
              <div className="text-center">
                <img
                  className="text-center"
                  src="https://i.stack.imgur.com/hzk6C.gif"
                  alt=""
                />
              </div>
            )} */}
          </div>
          <tbody>
            {myOrders.map((u, index) => {
              return (
                <tr key={index}>
                  <td>{u._id}</td>
                  {/* <td>{u.userId}</td> */}
                  {/* <td>{u.product[0]._id}</td>
                                    <td>{u.product[0].category }</td>
                                    <td>{u.product[0].quantity}</td>
                                    <td>{u.product[0].price}</td> */}
                  <td>{u.total}</td>
                  <td>deliverded</td>

                  <td className="d-flex gap-2 justify-content-center">
                    <button
                      className="btn btn-outline-white border-0"
                      onClick={() => navigate("/userorderinfo/" + u._id)}
                    >
                      <span
                        class="iconify text-info"
                        data-icon="bi:info-circle-fill"
                      ></span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

// import React from 'react'
// import Navigation from '../components/Navigation'
// import axios from "axios";
// function OrderHistory() {
//   return (
//     <div>
//           <Navigation />
//           <div className="container p-3 m-3 mx-auto d-flex justify-content-center">
//               <table className="table">
//                   <thead>
//                       <tr>
//                           <th>UserId</th>
//                           <th>OrderId</th>
//                           <th>ProductName</th>
//                           <th>Quantity</th>
//                           <th>Price</th>
//                           <th>Address</th>
//                           <th>Status</th>
//                       </tr>
//                   </thead>
//                   <tbody>
//                       <tr>
//                           {/* <td>{order.user._id}</td>
//               <td>{order.order._id}</td>
//               <td>{order.productName}</td>
//               <td>{order.quantity}</td>
//               <td>{order.price}</td>
//               <td>{order.address}</td>
//               <td>Delivered</td> */}
//                       </tr>
//                   </tbody>
//               </table>
//           </div>
//       </div>

//   )
// }

// export default OrderHistory

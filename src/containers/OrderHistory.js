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

  // get userById from authToken
  // function parseJwt(token) {
  //   var base64Url = token.split(".")[1];
  //   var base64 = decodeURIComponent(
  //     atob(base64Url)
  //       .split("")
  //       .map((c) => {
  //         return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  //       })
  //       .join("")
  //   );
  //   return JSON.parse(base64);
  // }
  // let a = parseJwt(accessToken);
  // let userId = a._id;

  // get userById Orders
  const getUserById = async () => {
    try {
      const { data } = await axios.get(
        `https://pettishopnew.herokuapp.com/api/order/find/id`,
        {
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        }
      );
      setMyOrders(data);
    } catch (error) {
      console.log(error.message);
    }
  };

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
          
          <tbody>
            {myOrders.map((u, index) => {
              return (
                <tr key={index}>
                  <td>{u._id}</td>
                  <td>{u.total}</td>
                  <td>deliverded</td>
                  <td >
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

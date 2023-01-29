import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNav from "../../components/AdminNav";

const OrdersAdmin = () => {
  const adminToken = window.localStorage.getItem('adminToken')
  const navigate = useNavigate();
  

  const [orders, setOrder] = useState({});

  const getorder = async () => {
    try {
      const res = await axios.get(
        "https://backendfinal-oi59.onrender.com/api/order",
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );

      setOrder(res.data);
      console.log(res.data);
    } catch {
      console.error(500);
    }
  };
  getorder();

  useEffect(() => {
    getorder();
  }, []);

  return (
    <div>
      <AdminNav />
      <div className="container p-3 m-3 mx-auto d-flex justify-content-center">
        <table className="table">
          <thead>
            <tr>
              <th>UserId</th>
              <th>OrderId</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map &&
              orders.map((data) => {
                return (
                  <tr>
                    <td>{data.userid}</td>
                    <td>{data._id}</td>
                    <td>{data.total}</td>
                    <td>Delivered</td>
                    <td>
                      <button
                        className="btn btn-outline-white border-0"
                        onClick={() => navigate("/orderadmininfo/" + data._id)}
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
    </div>
  );
};

export default OrdersAdmin;

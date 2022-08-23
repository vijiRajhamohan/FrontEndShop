import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

import {  useNavigate } from "react-router-dom";
import AdminNav from "../../components/AdminNav";
import { useParams } from "react-router-dom";

const ProductsAdmin = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  // update  api call
  const update = async () => {
    try {
      const { data } = await axios.put(
        `https://pettishopnew.herokuapp.com/api/productsDetails/${id}`
      );
      setFood(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect use refresh data
  useEffect(() => {
    update();
  });
  const navigate = useNavigate();
  const [products, setProducts] = useState({});

  // Get all Products
  const getProducts = async () => {
    try {
      const res = await axios.get("https://pettishopnew.herokuapp.com/api/productsLists");
      setProducts(res.data);
      console.log(res.data);
    } catch {
      console.error(500);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  // Delete Products
  const deleteProduct = async ({ _id }) => {
    if (window.confirm(`Are You Sure You Want to Delete this Product ${_id}`)) {
      try {
        await axios.delete(`https://pettishopnew.herokuapp.com/api/productsDetails/${_id}`, {
          _id,
        });
        alert("Deleted Successfully");
        getProducts();
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <div>
      <AdminNav />

      <div className="container p-3 m-3 mx-auto ">
        <table className="table">
          <thead>
            <tr>
              <th>ProductId</th>
              <th>Category</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map &&
              products.map((u, index) => {
                return (
                  <tr key={index}>
                    <td className="text-start">{u._id}</td>
                    <td className="text-start">{u.category}</td>
                    <td className="text-start">{u.name}</td>
                    <td className="text-start">{u.quantity}</td>
                    <td className="text-start">{u.price}</td>
                    <td>
                      <div>
                        <button
                          className="btn btn-info btn-sm"
                          onClick={() => navigate("/update/edit/" + u._id)}
                        >
                          <span
                            className="iconify"
                            data-icon="bxs:edit"
                            color="blue"
                          ></span>
                        </button>
                       
                        <span>
                          {" "}
                          <button
                            onClick={() => deleteProduct(u)}
                            className="btn btn-danger btn-sm"
                          >
                            <span
                              className="iconify"
                              data-icon="fluent:delete-32-filled"
                            ></span>
                          </button>
                        </span>{" "}
                      </div>
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

export default ProductsAdmin;

import React, { useState } from "react";
import axios from "axios";
import AdminNav from "../../components/AdminNav";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function AdminProducts() {
  const adminToken = window.localStorage.getItem("adminToken");
  const navigate = useNavigate();
  const [base64code, setbase64code] = useState("");
  const [img, setImg] = useState("");

  const imghandleSubmit = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  const onLoad = (fileString) => {
    setImg(fileString);
    setbase64code = fileString;
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  const [user, setUser] = React.useState({
    category: "",
    name: "",
    quantity: "",
    price: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const formValues = {
        image: img,
        category: user.category,
        name: user.name,
        quantity: user.quantity,
        price: user.price,
      };
      console.log(formValues);
      await axios.post(
        "https://backendfinal-oi59.onrender.com/api/products",
        formValues,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        },
         toast.success(
          "Products added successfully",
          { autoClose: 2000 },
          { position: toast.POSITION.TOP_RIGHT }
        )
      )
      navigate("/productsadmin");
     
      
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <AdminNav />

      <div className="container my-5">
        <div className="row">
          <div className="col-sm-6">
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
                    ProductDetails
                  </h2>

                  <form
                    className="mt-4"
                    onSubmit={handlesubmit}
                    autoComplete="off"
                  >
                    <div className="mb-3">
                      <div className="row">
                        <div className="mb-4 mx-auto  ">
                          <label
                            htmlfor="image"
                            className="form-label"
                            style={{ fontSize: 15, fontFamily: "monospace" }}
                          >
                            Image
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            onChange={imghandleSubmit}
                          />
                        </div>
                        <div className="mb-4 row mx-auto ">
                          <label
                            htmlfor="category"
                            className="form-label"
                            style={{ fontSize: 15, fontFamily: "monospace" }}
                          >
                            Category
                          </label>
                          <select
                            name="category"
                            style={{ fontSize: 14 }}
                            onChange={handleChange}
                            value={user.category}
                          >
                            <option value="" disabled>
                              Categories
                            </option>
                            <option value="Grocery">Grocery</option>
                            <option value="HomeMade">HomeMade</option>
                            <option value="IceCream">IceCream</option>
                            <option value="HealthDrinks">HealthDrinks</option>
                            <option value="Chocolates">Chocolates</option>
                            <option value="PersonalCare">PersonalCare</option>
                            <option value="Nostalgia">Nostalgia</option>
                            <option value="PoojaItems">PoojaItems</option>
                          </select>
                        </div>

                        <div className="mb-4 row mx-auto ">
                          <label
                            htmlfor="name"
                            className="form-label"
                            style={{
                              fontSize: 15,
                              fontFamily: "monospace",
                            }}
                          >
                            ProductName
                          </label>
                          <input
                            type="text"
                            style={{ fontSize: 14 }}
                            name="name"
                            onChange={handleChange}
                            value={user.name}
                            placeholder="Name"
                            className="form-control my-1 p-1"
                            id="name"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <div className="row">
                            <div className="col">
                              <label
                                htmlfor="quantity"
                                className="form-label"
                                style={{
                                  fontSize: 15,
                                  fontFamily: "monospace",
                                }}
                              >
                                Quantity
                              </label>
                              <input
                                type="text"
                                style={{ fontSize: 14 }}
                                name="quantity"
                                onChange={handleChange}
                                value={user.quantity}
                                placeholder="Quantity"
                                className="form-control"
                                id="quantity"
                                required
                              />
                            </div>

                            <div className="col">
                              <label
                                htmlfor="price"
                                className="form-label"
                                style={{
                                  fontSize: 15,
                                  fontFamily: "monospace",
                                }}
                              >
                                Price
                              </label>
                              <input
                                type="text"
                                style={{ fontSize: 14 }}
                                name="price"
                                onChange={handleChange}
                                value={user.price}
                                placeholder="Price"
                                className="form-control my-1 p-1"
                                id="price"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      id="submit"
                      className="btn btn-success pt-1 pb-1"
                    >
                      ADD
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminProducts;

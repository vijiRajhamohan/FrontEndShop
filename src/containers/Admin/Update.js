import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AdminNav from "../../components/AdminNav";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
export function Update() {
  const adminToken = window.localStorage.getItem('adminToken');
  const { id } = useParams();
  const [prod, setProd] = useState(null);

  const update = async () => {
    try {
      const { data } = await axios.get(
        `https://backendfinal-oi59.onrender.com/api/productsLists/${id}`, {
        headers: {
            Authorization: `Bearer ${adminToken}`
      }
    });
      setProd(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    update();
  },[]);

  return (
    <div className="container">
      {prod ? (
        <EditProduct prod={prod} />
      ) : (
        <div className="progress mt-3">
         <h1>Loading....</h1> 
        
        </div>
      )}
    </div>
  );
}

export function EditProduct({ prod }) {
  const adminToken = window.localStorage.getItem('adminToken')
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


  const [category, setCategory] = useState(prod.category);
  const [name, setName] = useState(prod.name);
  const [quantity, setQuantity] = useState(prod.quantity);
  const [price, setPrice] = useState(prod.price);

  const update = async () => {
    const updateProduct = {
      image: img,
      category: category,
      name: name,
      quantity: quantity,
      price: price,
    };
    await axios.put(`https://backendfinal-oi59.onrender.com/api/productsDetails/${prod._id}`, updateProduct,
      {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },

      })
    toast.success(
      "Updated successfully",
      { autoClose: 2000 },
      { position: toast.POSITION.TOP_RIGHT }
    )
    navigate("/productsadmin");
    };
  

  return (
    <div>
      <AdminNav />
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h2 style={{ color: "black", fontFamily: "timesnewroman" }}>
                    ProductDetails
                  </h2>
                  <label
                    htmlfor="image"
                    className="form-label"
                    style={{ fontSize: 15, fontFamily: "monospace" }}
                  >
                    Image
                  </label> 
                  <input type="file" className="form-control" onChange={imghandleSubmit} />
                  <input
                    className="mt-2 form-control"
                    value={name}
                    type="text"
                    placeholder="name"
                    onChange={(event) => setName(event.target.value)}
                  />
                  <input
                    className="mt-2 form-control"
                    value={category}
                    type="text"
                    placeholder="category"
                    onChange={(event) => setCategory(event.target.value)}
                  />
                  <input
                    className="mt-2 form-control"
                    value={quantity}
                    type="text"
                    placeholder="quantity"
                    onChange={(event) => setQuantity(event.target.value)}
                  />
                  <input
                    className="mt-2 form-control"
                    value={price}
                    type="number"
                    placeholder="Price"
                    onChange={(event) => setPrice(event.target.value)}
                  />
                  <button
                    className="btn btn-outline-success fw-bold mt-2 form-control"
                    onClick={update}
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

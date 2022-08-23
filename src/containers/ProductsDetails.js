import React, { useEffect, useState } from "react";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import Navigation from "../components/Navigation";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ProductsDetails = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "https://pettishopnew.herokuapp.com/api/productsLists/" + path
        );
        setProduct(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [path]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };
  return (
    <div>
      <Navigation />
      <div className="container ">
        <div
          className="card m-5 p-5 bd-highlight border-white shadow-lg bg-body rounded mx-auto"
          style={{ width: "50rem", height: "20rem", objectFit: "contain" }}
        >
          <div className="row  d-flex justify-content-evenly align-item-center ">
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-5 offset-xl-1  ">
              <div className="card border-white p-3">
                <img
                  src={product.image}
                  alt=""
                  width="20rem"
                  height="200rem"
                  objectFit="contain"
                  className="card-img-top"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-5 offset-xl-1 ">
              <div
                className="card-body"
                style={{
                  width: "12rem",
                  height: "20rem",
                  objectFit: "contain",
                }}
              >
                <h5 className="card-title" style={{ fontSize: "28px" }}>
                  {product.name}
                </h5>{" "}
                <h5 className="card-text" style={{ fontSize: "20px" }}>
                  {product.quantity}
                </h5>
                <p className="card-text" style={{ fontSize: "18px" }}>
                  MRP Rs.{product.price}
                </p>
                <h5 style={{ fontSize: "10px" }}>(Inclusive of all taxes)</h5>
                <div
                  className="addContainer pb-2"
                  style={{
                    width: "50 %",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="amountContainer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "700px",
                    }}
                  >
                    <button
                      className="btn btn-danger ms-2 "
                      style={{
                        borderRadius: "10px",
                      }}
                      onClick={() => handleQuantity("dec")}
                    >
                      -
                    </button>
                    <div
                      className="btn ms-2"
                      
                    >
                      {" "}
                      {quantity}
                    </div>
                    <button
                      className="btn btn-info ms-2 "
                      style={{
                        borderRadius: "10px",
                      }}
                      onClick={() => handleQuantity("inc")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="btn btn-primary pt-2"
                 
                  onClick={handleClick}
                >
                  <i class="bx bxs-cart-add">Add To Cart</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;

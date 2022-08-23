import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/cartRedux";
import swal from "sweetalert";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const KEY =
    "pk_test_51LUWTrSImtCLG8DbASYF7VaJDv9tWSotvodcAMS2gT5JUzPQGHbCwswCj17U0eqF15u1eX9x7hVnwm0tYzu1Il2900aFjk0q1I";

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const product = cart.products;
  const quantity = cart.quantity;
  const total = cart.total;

  const [stripeToken, setStripeToken] = useState(null);

  const accessToken = window.localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
    console.log(token);
    swal("SUCCESSFULY PAID!", "Check your mail!", "success");
    swal("Thank you!", "Shop Again!");
    navigate("/home");
  };

  // get Id from authToken

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

  //  Payment Api

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "https://pettishopnew.herokuapp.com/api/payment",
          {
            tokenId: stripeToken.id,
            amount: { total },
          }
        );
        
      } catch (err) {
        console.log(err);
      }
    };

    stripeToken && makeRequest();
  }, [stripeToken]);

  // Order Api
  const getOrders = async () => {
    try {
      const res = await axios.post(
        `https://pettishopnew.herokuapp.com/api/order`,
        {
          userId,
          product,
          total,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  // remove from cart
  const handleRemove = (index) => {
    dispatch(
      removeProduct({ index, price: product[index].price, quantity, total })
    );
  };

  return (
    <>
      
        <div
          className="container-fluid d-flex"
          style={{ backgroundColor: "#bf2758" }}
        >
          <Link to="./home.html" className="navbar-brand">
            <img src="./image/f.png" alt="" width="100" height="50" />
          </Link>
          <p className="text-white mb-1 fs-1">PETTY SHOP</p>

          <div>
            <Link
              to="/home"
              className="text-white position-absolute top-0 end-0 pt-3 m-1"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        {total === 0 ? (
          <div className="row">
            <div className="col-8 pt-5 ps-5">
              <img
                src="https://i.pinimg.com/originals/79/4a/5a/794a5a15694f30e60c858d0989c146a0.gif"
                alt=""
                width="600px"
                height="400px"
                className="img-fluid"
              />

            </div>
            <div className="col-4 pt-5  mt-5 pe-2 text-center">
            
              <h1 className="fw-bold text-success"> Cart Is Empty !!!  Please,Fill Your Cart! </h1>
          </div>
          </div>
        ) :( 
          <section className="py-4 container">
            <div className="row justify-content-center">
              <div className="col-12 rounded-3">
                <h5>Cart-Items: {cart.quantity}</h5>
                <table className="table table-light table-hover  m-0">
                  <tbody>
                    {cart.products.map((product, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <img
                              src={product.image}
                              alt=""
                              style={{
                                objectFit: "contain",
                                height: "6rem",
                                width: "8rem",
                              }}
                            />
                          </td>
                          <td>{product.name}</td>
                          <td>Rs.{product.price}</td>
                          <td>Quantity:{product.quantity}</td>
                          <td> Amount:{product.price * product.quantity}</td>
                          <td>
                            <button
                              className="btn btn-danger ms-2 "
                              onClick={() => handleRemove(index)}
                            >
                              <span
                                class="iconify"
                                data-icon="fluent:delete-16-filled"
                                data-width="20"
                              ></span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="col-auto ms-auto">
                <h2>Total Price:Rs.{cart.total}</h2>
              </div>
              <div className="col-auto">
                <StripeCheckout
                  name="Petti Shop"
                  image="./image/f.png"
                  billingAddress
                  shippingAddress
                  description={`Your total is  ₹ ${cart.total}`}
                  amount={cart.total * 100}
                  token={onToken}
                  currency="INR"
                  stripeKey={KEY}
                >
                  <button className="btn btn-danger ms-2 ">Pay Now</button>
                </StripeCheckout>
              </div>
            </div>
          </section>
        )
        }
      
    </>
  );
};

export default Cart;

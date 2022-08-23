import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
function Navigation() {
  // authToken get form localStorage
  const email = window.localStorage.getItem("email");
  const navigate = useNavigate();
  const quantity = useSelector((state) => state.cart.quantity);
  const Logout = () => {
    window.localStorage.clear();
    navigate("/login");
    swal("Thank you,Welcome!");
  };
  return (
    <div>
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-dark  ">
          <div
            className="container-fluid "
            style={{ backgroundColor: " #BF2758" }}
          >
            <div className="col-3">
              {" "}
              <div className="d-flex justify-content-lg-start">
                <Link to="/landing" className="navbar-brand">
                  <img
                    src="https://i.ibb.co/R4R4x1H/f.png"
                    alt="f"
                    border="0"
                    width="100"
                    height="50"
                    className="d-inline-block "
                  />
                  
                  <span style={{ fontSize: "28px", fontStyle: "italic" }}>
                    PETTI SHOP
                  </span>
                </Link>
              </div>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="col-9 navbar-expand-lg">
              <div
                className="collapse navbar-collapse  "
                id="navbarSupportedContent"
              >
                <ul
                  className="navbar-nav justify-content-end flex-grow-1 pe-3 "
                  style={{ fontSize: "20px", color: "white" }}
                >
                  <li className="nav-item">
                    <Link
                      to="/home"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/productsLists" className="nav-link active ">
                      Products
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link active dropdown-toggle"
                      data-bs-toggle="dropdown"
                      to="/"
                      role="button"
                      aria-expanded="false"
                    >
                     {email}
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/myprofile">
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/orderhistory">
                          My Orders
                        </Link>
                      </li>

                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/login"
                          onClick={Logout}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link to="/cart" className="nav-link active ">
                      <button
                        type="button"
                        class="btn btn-light  color-pink position-relative"
                      >
                        <span
                          class="iconify"
                          data-icon="bi:cart-plus"
                          data-width="20"
                          color="green"
                        ></span>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {quantity}
                        </span>
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;

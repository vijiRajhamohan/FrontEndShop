import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { Box } from "@mui/material";
import { landing } from "../data";
function LandingPage() {
  return (
    <div>
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-dark  ">
          <div
            class="container-fluid "
            style={{ backgroundColor: "#BF2758", objectFit: "contain" }}
          >
            <div className="col-6">
              <div className="d-flex justify-content-lg-start">
                <img src="./image/f.png" alt="img" width="100" height="50" />
                <span>
                  <p class="text-white fs-1 ">PETTI SHOP</p>
                </span>
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
            <div className="col-md-6 navbar-expand-lg">
              <div
                className="collapse navbar-collapse  "
                id="navbarSupportedContent"
              >
                <ul
                  className="navbar-nav justify-content-end flex-grow-1 pe-3 "
                  style={{ fontSize: "20px", color: "white" }}
                >
                  <li className="nav-item">
                    <Link to="/login" className="nav-link active">
                      <span
                        className="iconify"
                        data-icon="emojione-monotone:shopping-cart"
                        data-width="40"
                      ></span>
                      Shopping
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin" className="nav-link active ">
                      <span
                        class="iconify"
                        data-icon="ri:admin-fill"
                        data-width="40"
                      ></span>
                      Admin
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <div
          className="d-flex p-2 m-2 justify-content-center"
          style={{ objectFit: "contain", backgroundColor: "" }}
        >
          <img src="./image/la.gif" alt="img" width="800" height="400" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

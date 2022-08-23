import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="container-fluid">
        <div
          className="d-flex justify-content-between flex-column text-center  text-md-start  py-4 px-4  "
          style={{ backgroundColor: "#ed5074" }}
        >
          <div className="row" style={{ backgroundColor: "#ed5074" }}>
            <div className="col-md-4 footer-column">
              <ul className="nav flex-column">
                <li className="nav-item text-white " to="/product">
                  <h5>Product</h5>
                </li>

                <li className="nav-item  ">
                  <Link className="nav-link text-white" to="/home">
                    Deals & Offer
                  </Link>
                </li>
                <li className="nav-item  ">
                  <Link className="nav-link text-white" to="/category">
                    Category
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-column">
              <ul className="nav flex-column text-white ">
                <li className="nav-item text-white ">
                  <h5>Company</h5>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white " to="/about">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/policy" className="nav-link  text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/landing">
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-column">
              <ul className="nav flex-column text-white">
                <li className="nav-item">
                  <h5>Contact & Support</h5>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">
                    <i className="fas fa-envelope"></i>Contact us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/feed">
                    <i className="fas fa-star"></i> Feedback
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-6 footer-column">
              <div className="text-white mb-3 mb-md-0">
                Copyright © 2022. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

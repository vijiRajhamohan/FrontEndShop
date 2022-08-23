import React from "react";
import { Link } from "react-router-dom";

function AdminNav() {
  
  return (
  
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-dark  ">
          <div
            className="container "
            style={{ backgroundColor: "#BF2758", objectFit: "contain" }}
          >
            <div className="col-sm-6">
              <div className="d-flex ">
                <Link to="/landing" className="navbar-brand">
                <img
                  src="https://i.ibb.co/R4R4x1H/f.png"
                  alt="f"
                  border="0"
                  width="100"
                  height="50"
                  className="d-inline-block "
                />
                  <span style={{ fontSize: "28px" ,fontStyle:"oblique"}}>PETTI SHOP</span>
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

            <div className="col-sm-6 navbar-expand-lg">
              <div
                className="collapse navbar-collapse  "
                id="navbarSupportedContent"
              >
                <ul
                  className="navbar-nav justify-content-end flex-grow-1 pe-3 "
                  style={{ fontSize: "20px", color: "white" }}
                >
                  
                  <li className="nav-item">
                    <Link to="/productsadmin" className="nav-link active ">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/usersadmin" className="nav-link active">
                      Users
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/ordersadmin" className="nav-link active ">
                      Orders
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/adminproducts" className="nav-link active">
                      Add Products
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
  
    </div>
  );
}

export default AdminNav;

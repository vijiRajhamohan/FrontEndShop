import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
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
            className="text-white position-absolute top-0 end-0 pt-3"
          >
            back to home
          </Link>
        </div>
      </div>

      <div className="row container d-flex">
        <div className="col container ms-5 me-5">
          <div
            id="carouselExampleCaptions"
            className="container carousel slide "
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="6"
                aria-label="Slide 7"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="7"
                aria-label="Slide 8"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card mt-5 mb-5" style={{ width: "20rem" }}>
                  <img
                    src="./image/aa.jfif"
                    className="d-block ms-5"
                    width="500"
                    height="350"
                    alt="..."
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="card mt-5 mb-5" style={{ width: "20rem" }}>
                  <img
                    src="./image/a.jfif"
                    className="d-block"
                    width="500"
                    height="350"
                    alt="..."
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="card mt-5 mb-5" style={{ width: "20rem" }}>
                  <img
                    src="./image/0.jfif"
                    className="d-block"
                    width="500"
                    height="350"
                    alt="..."
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="card mt-5 mb-5" style={{ width: "20rem" }}>
                  <img
                    src="./image/10.jfif"
                    className="d-block"
                    width="500"
                    height="350"
                    alt="..."
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="card mt-5 mb-5" style={{ width: "20rem" }}>
                  <img
                    src="./image/11.jfif"
                    className="d-block"
                    width="500"
                    height="350"
                    alt="..."
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="card mt-5 mb-5" style={{ width: "20rem" }}>
                  <img
                    src="./image/b6.jfif"
                    className="d-block"
                    width="500"
                    height="350"
                    alt="..."
                  />
                </div>
              </div>

              <div className="carousel-item">
                <div className="card mt-5 mb-5" style={{ width: "20rem" }}>
                  <img
                    src="./image/OIP (3).jfif"
                    className="d-block"
                    width="500"
                    height="350"
                    alt="..."
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="card mt-5 mb-5" style={{ width: "20rem" }}>
                  <img
                    src="./image/OIP (1).jfif"
                    className="d-block"
                    width="500"
                    height="350"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col container mt-5 ms-5 mb-5">
          <div
            className="card container ms-5"
            style={{
              width: "20rem",
              MozAnimation: "30rem",
              backgroundColor: "pink",
            }}
          >
            <div className="card-header " style={{ fontWeight: "bolder" }}>
              <p
                className="card-header-pills"
                style={{
                  fontSize: "medium",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Petty Shop is local E-Commerce Website that fetches the required
                items in given time.
              </p>
            </div>
            <div className="card-body">
              <p className="card-text" style={{ color: "black" }}>
                your personal information through its website -
                www.PettiShop.in, the mobile application Online Grocery
                Shopping, features, (“Services”) to offer you services. We
                appreciate that you care about how your information is used and
                secured at our end. We value the trust you place in us, and are
                committed to handling your data with the required level of
                confidentiality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

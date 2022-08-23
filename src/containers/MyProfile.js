import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import axios from "axios";

export default function UserProfile() {
  // const [base64code, setbase64code] = useState("");

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  // authtoken localStorage
  const accessToken = window.localStorage.getItem("accessToken");

  // get Id from accessToken
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

  // get user details and api call
  const getUserProfile = async () => {
    try {
      const { data } = await axios.get(
        `https://pettishopnew.herokuapp.com/api/user/find/${userId}`
      );
      setUsers(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="row mx-auto mt-3">
          <div className="col-md-5 col-lg-5 col-xl-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-7 col-lg-7 col-xl-4 offset-xl-1">
            <div className="card m-1" style={{ width: "600px" }}>
              {/* Profile details */}
              <div className="col-sm-6 col-md-6 col-lg-4 mx-auto text-center">
                <h5
                  className="text-danger font-size-4 mt-3"
                  style={{ fontSize: "15px" }}
                >
                  Name: <span className="text-secondary">{users.name}</span>
                </h5>
                <h5 className="text-danger" style={{ fontSize: "15px" }}>
                  Email Id:{" "}
                  <span className="text-secondary">{users.email}</span>
                </h5>
                <h5 className="text-danger" style={{ fontSize: "15px" }}>
                  Phone Number:{" "}
                  <span className="text-secondary">{users.mobile} </span>
                </h5>
                <h5 className="text-danger" style={{ fontSize: "15px" }}>
                  Address:{" "}
                  <span className="text-secondary">{users.address}</span>
                </h5>
                <h5 className="text-danger" style={{ fontSize: "15px" }}>
                  Pincode:{" "}
                  <span className="text-secondary">{users.pincode} </span>
                </h5>
              </div>
              {/*Edit  profile */}

              <button
                className="btn btn-info "
                onClick={() => navigate("/updateprofile/edit/" + users._id)}
              >
                <span
                  className="iconify"
                  data-icon="bxs:edit"
                  size="15px"
                  color="blue"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

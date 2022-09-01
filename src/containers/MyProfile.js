import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import axios from "axios";

export default function UserProfile() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const accessToken = window.localStorage.getItem("accessToken");

  // get user details and api call
  const getUserProfile = async () => {
    try {
      const { data } = await axios.get(
        `https://pettishopnew.herokuapp.com/api/user/find/id`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
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
          <div className="col-md-6 col-lg-6 col-xl-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
            <div className="card m-1" style={{ width: "600px",borderColor:"brown" }}>
              {/* Profile details */}
              <div className="col-sm-8 col-md-8 col-lg-8 mx-auto ">
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

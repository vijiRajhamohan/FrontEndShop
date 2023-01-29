import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Register.css";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function UpdateProfile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const accessToken = window.localStorage.getItem("accessToken");
  const editprofile = async () => {
    try {
      const { data } = await axios.get(
        `https://backendfinal-oi59.onrender.com/api/user/find/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setProfile(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    editprofile();
  },[]);
  return (
    <div className="container">
      {profile ? (
        <EditUpdateForm profile={profile} />
      ) : (
        <div className="progress mt-3">
            <h1>Loading....</h1> 
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "75%" }}
          ></div>
        </div>
      )}
    </div>
  );
}
export function EditUpdateForm({ profile }) {
  const navigate = useNavigate();
  const accessToken = window.localStorage.getItem("accessToken");
 

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [mobile, setMobile] = useState(profile.mobile);
  const [address, setAddress] = useState(profile.address);
  const [pincode, setPincode] = useState(profile.pincode);

  // edit profile update form and api call
  const editprofile = async () => {
    const updateProfile = {
      name: name,
      email: email,
      mobile: mobile,
      address: address,
      pincode: pincode,
    };
    await axios.put(`https://backendfinal-oi59.onrender.com/api/userupdate`,updateProfile,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
    
      })
      
    toast.success(
      "Updated successfully",
      { autoClose: 2000 },
      { position: toast.POSITION.TOP_RIGHT }
    );
    navigate("/myprofile"); 
  };

  return (
    <div>
      <Navigation />
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
                    Update profile
                  </h2>

                  <input
                    className="mt-2 form-control"
                    value={name}
                    type="text"
                    placeholder="name"
                    onChange={(event) => setName(event.target.value)}
                  />
                  <input
                    className="mt-2 form-control"
                    value={email}
                    type="text"
                    placeholder="email"
                    disabled={true}
                    onChange={(event) => setEmail(event.target.value)}
                  />

                  <input
                    className="mt-2 form-control"
                    value={mobile}
                    type="number"
                    placeholder="mobile"
                    onChange={(event) => setMobile(event.target.value)}
                  />
                  <input
                    className="mt-2 form-control"
                    value={address}
                    type="text"
                    placeholder="address"
                    onChange={(event) => setAddress(event.target.value)}
                  />
                  <input
                    className="mt-2 form-control"
                    value={pincode}
                    type="number"
                    placeholder="pincode"
                    onChange={(event) => setPincode(event.target.value)}
                  />
                  <button
                    className="btn btn-outline-success fw-bold mt-2 form-control"
                    onClick={editprofile}
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

export default UpdateProfile;


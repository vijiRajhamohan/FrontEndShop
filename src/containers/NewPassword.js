import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const NewPassword = () => {
  const navigate = useNavigate();
  const [password, setPasword] = useState("");
  const { token } = useParams();
  console.log(token);
  const PostData = async () => {
    try {
      await axios.post("https://pettishopnew.herokuapp.com/api/new-password", {
        password,
        token,
      })
      toast.success(
        "Your Password changed!",
        { autoClose: 2000 },
        { position: toast.POSITION.TOP_RIGHT }
      )

      navigate("/login")
    } catch (err) {
      console.log(err);
     
    }
  };

  return (
    <div>
      <div
        class="container-fluid d-flex "
        style={{ backgroundColor: "#BF2758" }}
      >
        <img src="./image/f.png" alt="img" width="100" height="50" />

        <p class="text-white fs-1">PETTI SHOP</p>
      </div>

      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-6 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
            <div className="mycard">
              <div className="card auth-card input-field ">
                <h4>Change Password</h4>{" "}
                <input
                  type="password"
                  placeholder="Enter a new password"
                  value={password}
                  onChange={(e) => setPasword(e.target.value)}
                />
                <button
                  className=" btn btn-success "
                  onClick={() => PostData()}
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;

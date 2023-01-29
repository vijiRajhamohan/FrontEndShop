import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Password = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const PostData = async () => {
    try {
      if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        )
      ) {
        return;
      }
      await axios.post("https://backendfinal-oi59.onrender.com/api/reset-password", { email });
      toast("Check Your Mail", { autoClose: 2000 });
      navigate("/login");
    } catch (err) {
      console.log(err.message);
      toast.error("Invalid Email", { autoClose: 2000 });
    }
  };
  return (
    <>
      <div
        className="container-fluid d-flex "
        style={{ backgroundColor: "#BF2758" }}
      >
        <img src="./image/f.png" alt="img" width="100" height="50" />
        <span>
          <p className="text-white fs-1 ">PETTI SHOP</p>
        </span>
      </div>

      <div className="container-fluid padding-bottom-3x mb-2 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="forgot">
              <h2>Forgot your password?</h2>
              <p>
                Change your password in three easy steps. This will help you to
                secure your password!
              </p>
              <ol className="list-unstyled">
                <li>
                  <span className="text-primary text-medium">1. </span>Enter
                  your email address below.
                </li>
                <li>
                  <span className="text-primary text-medium">2. </span>Our
                  system will send you Link temporary link{" "}
                </li>{" "}
                <li>
                  <span className="text-primary text-medium">3. </span>Use the
                  link to reset your password
                </li>
              </ol>
            </div>
            <div className="mb-4">
              <div
                className="row"
                style={{ marginLeft: "5%", border: "3px", marginRight: "3%" }}
              >
                <input
                  type="email"
                  value={email}
                  placeholder="Enter Your Registered Mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
              </div>
              <br />
              <button
                className="btn btn-success btn-md"
                onClick={() => PostData()}
              >
                ResetPassword
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;

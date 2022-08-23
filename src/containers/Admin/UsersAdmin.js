import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import AdminNav from "../../components/AdminNav";
import "./Table.css";

const UserAdmin = () => {
  const [users, setUsers] = useState({});
  
    const getUsers = async () => {
      try {
        const res = await axios.get("https://pettishopnew.herokuapp.com/api/user/find");

        setUsers(res.data);
        console.log(res.data);
      } catch {
        console.error(500);
      }
    };
   
  
  useEffect(() => {
    getUsers();
  }, []);


  // Delete user
  const deleteUser = async ({ _id }) => {
    if (window.confirm(`Are You Sure You Want to Delete user ${_id}`)) {
      try {
        await axios.delete(`https://pettishopnew.herokuapp.com/api/user/${_id}`, {
          _id,
        });
        alert("Deleted Successfully");
        getUsers();
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <div>
      <AdminNav />

      <div className="container p-3 m-3 mx-auto d-flex justify-content-center">
        <table className="table">
          <thead>
            <tr>
              <th>UserId</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Address</th>
              <th>Pincode</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map &&
              users.map((u, index) => {
                return (
                  <tr key={index}>
                    <td className="text-start">{u._id}</td>
                    <td className="text-start">{u.name}</td>
                    <td className="text-start">{u.email}</td>
                    <td className="text-start">{u.mobile}</td>
                    <td className="text-start">{u.address}</td>
                    <td className="text-start">{u.pincode}</td>
                    <td>
                      <td>
                        <div>
                         
                            <button
                              onClick={() => deleteUser(u)}
                              className="btn btn-danger btn-sm"
                            >
                              <span
                                className="iconify"
                                data-icon="fluent:delete-32-filled"
                              ></span>
                            </button>
                          
                        </div>
                      </td>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAdmin;

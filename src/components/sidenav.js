import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data";
function sidenav() {
  return (
    <div>
      <div>
        <div>
          <Link to="/category">
            <span className="d-flex" style={{ fontSize: "20px" }}>
              <box-icon name="menu"></box-icon>All Category
            </span>
          </Link>
        </div>

        <div>
          <div className="pt-5 ">
            {categories.map((item) => (
              <ul style={{ listStyleType: "none" ,fontSize:"20px"}}>
                <li className="cat-item ">
                  <Link to={`/productsList/${item.cat}`}>
                    <i class="bx bxs-hand-right">{item.cat}</i>
                  </Link>
                </li>
              </ul>
            ))}
          </div>
          {/* // <SideNav /> */}
        </div>
      </div>
      {/* <hr />  */}
    </div>
  );
}

export default sidenav;

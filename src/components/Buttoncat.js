import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data";
function Buttoncat() {
  return (
    <div >
      <div
        className="a-section a-spacing-small  pb-3 text-center"
        style={{
          fontSize: "20px",
          color: "maroon",
          fontWeight: "bolder",
          fontFamily: "Segoe UI",
        }}
      >
        Category
      </div>
      <div>
        <Link to="/productsLists">
          <button className="btn btn-warning mb-3 w-100">All</button>
        </Link>
        {categories.map((item) => (
          <div>
            <Link to={`/productsList/${item.cat}`}>
              <button className="btn btn-warning mb-3 w-100">
                {item.title}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buttoncat;

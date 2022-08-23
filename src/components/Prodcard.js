import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
function Prodcard() {
  return (
    <div>
      
      <div className="row">
        <div className=" container-fluid d-flex flex-row  bd-highlight m-2 pb-5">
          <div className="row row-cols-sm-2 row-cols-md-3 ">
        {data.map((item) => (
          <Link to={`/productsList/${item.cat}`}>
          <div className="card m-3" style={{ width: "18rem" }}>
            <img
                src={item.image}
              className="card-img-top"
              alt="..."
              style={{ width: "18rem", height: "11rem" }}
            />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{item.item1}</li>
                <li className="list-group-item">{item.item2}</li>
                <li className="list-group-item">{item.item3}</li>
            </ul>
            <div class="card-body">
                <Link to={`/productsList/${item.cat}`} class="card-link">
                VEIW MORE
              </Link>
            </div>
          </div>
        </Link>
        ))}
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Prodcard;

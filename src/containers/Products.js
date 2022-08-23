import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { useLocation } from "react-router";

import { Link } from "react-router-dom";
import axios from "axios";
import Buttoncat from "../components/Buttoncat";
function Products() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://pettishopnew.herokuapp.com/api/productsList?category=${cat}`
            : "https://pettishopnew.herokuapp.com/api/productsLists"
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        product.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [product, cat, filters]);

  return (
    <>
      <div>
        <Navigation />
        <div className="row m-1">
          <form>
            <div className="input-group ">
              <input
                type=" "
                className="search-product-box mx-auto rounded-2 w-25"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search Product"
              />
            </div>
          </form>
        </div>

        <div className="container pt-3 ">
          <div className="row px-4">
            <div className="col-sm-3">
              <Buttoncat />
            </div>

            <div className="col-sm-9 d-flex flex-row  justify-content-between">
              <div className=" container-md ">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 px-3 g-5">
                  {cat
                    ? filteredProducts
                        .filter((g) => g.name.toLowerCase().includes(query))
                        .map((product) => (
                          <div
                            className="card m-1 pb-5 bd-highlight border-white shadow-lg bg-body rounded  justify-content-between "
                            style={{ width: "15rem", height: "20rem" }}
                          >
                            <Link to={`/productsDetails/${product._id}`}>
                              <img
                                src={product.image}
                                alt=""
                                className="card-img-top"
                                style={{
                                  height: "8rem",
                                  objectFit: "contain",
                                  marginTop: "10px",
                                }}
                              />

                              <div className="card-body ">
                                <h5 className="card-title">{product.name}</h5>
                                <h5 className="card-text">
                                  {product.quantity}
                                </h5>
                                <p className="card-text">
                                  <span>MRP Rs.</span> {""}
                                  {product.price}
                                </p>
                              </div>

                              <button className="btn btn-success">
                                Buy Now
                              </button>
                            </Link>
                          </div>
                        ))
                    : product
                        .filter((g) => g.name.toLowerCase().includes(query))
                        .map((product) => (
                          <div
                            className="card m-1 pb-5 bd-highlight border-white shadow-lg bg-body rounded  justify-content-between"
                            style={{ width: "15rem", height: "20rem" }}
                          >
                            <Link to={`/productsDetails/${product._id}`}>
                              <img
                                src={product.image}
                                alt=""
                                className="card-img-top"
                                style={{
                                  height: "9rem",
                                  objectFit: "contain",
                                  marginTop: "10px",
                                }}
                              />

                              <div className="card-body ">
                                <h5 className="card-title">{product.name}</h5>
                                <h5 className="card-text">
                                  {product.quantity}
                                </h5>
                                <p className="card-text">
                                  <span>MRP Rs.</span> {""}
                                  {product.price}
                                </p>
                              </div>

                              <button className="btn btn-success">
                                Buy Now
                              </button>
                            </Link>
                          </div>
                        ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;

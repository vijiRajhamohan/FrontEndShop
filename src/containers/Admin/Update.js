import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AdminNav from "../../components/AdminNav";
import { useParams } from "react-router-dom";
// Edit FoodList function
export function Update() {
    // state management
    const { id } = useParams();
    const [food, setFood] = useState(null);

    // edit food api call
    const update = async () => {
        try {
            const { data } = await axios.get(`https://pettishopnew.herokuapp.com/api/productsLists/${id}`);
            setFood(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    // useEffect use refresh data
    useEffect(() => {
        update();
    });

    return (
        <div className="container">
            {food ? (
                <EditFoodForm food={food} />
            ) : (
                <div className="progress mt-3">
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

// Edit Food list form function
export function EditFoodForm({ food }) {
    // navigate to page
     const navigate = useNavigate();
    // state management
    const [base64code, setbase64code] = useState("");
    const [img, setImg] = useState("");

    // image handle function
    const imghandleSubmit = (e) => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
    };

    // image file converted to string
    const onLoad = (fileString) => {
        setImg(fileString);
        setbase64code = fileString;
    };

    // image file reader
    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            onLoad(reader.result);
        };
    };
    // state management
    const [image, setImage] = useState(food.image);
    const [category, setCategory] = useState(food.category);
    const [name, setName] = useState(food.name);
    const [quantity, setQuantity] = useState(food.quantity);
    const [price, setPrice] = useState(food.price);

    // edit food update form and api call
    const update = () => {
        const updateFood = {
            image: img,
            category: category,
            name: name,
            quantity: quantity,
            price: price,

        };
        fetch(`https://pettishopnew.herokuapp.com/api/productsDetails/${food._id}`, {
            method: "PUT",
            body: JSON.stringify(updateFood),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => navigate("/productsadmin"));
    };

    return (
        <div>
            <AdminNav />
        <div className="container">
                <div className="row" >
                    <div className="col-sm-6">
                        {/* <div className="col-md-6 col-lg-6 col-xl-5"> */}
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            alt=""
                            className="img-fluid"
                        />
                        {/* </div>  */}
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <h2 style={{ color: "black", fontFamily: "timesnewroman" }}>
                                        ProductDetails
                                    </h2>
                                    <input type="file" onChange={imghandleSubmit} />
                                    <input
                                        className="mt-2 form-control"
                                        value={img}
                                        type="text"
                                        placeholder="image"
                                        onChange={(event) => setImage(event.target.value)}
                                    />
                                    <input
                                        className="mt-2 form-control"
                                        value={name}
                                        type="text"
                                        placeholder="name"
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                    <input
                                        className="mt-2 form-control"
                                        value={category}
                                        type="text"
                                        placeholder="category"
                                        onChange={(event) => setCategory(event.target.value)}
                                    />
                                    <input
                                        className="mt-2 form-control"
                                        value={quantity}
                                        type="text"
                                        placeholder="quantity"
                                        onChange={(event) => setQuantity(event.target.value)}
                                    />
                                    <input
                                        className="mt-2 form-control"
                                        value={price}
                                        type="number"
                                        placeholder="Price"
                                        onChange={(event) => setPrice(event.target.value)}
                                    />
                                    <button
                                        className="btn btn-outline-success fw-bold mt-2 form-control"
                                        onClick={update}
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
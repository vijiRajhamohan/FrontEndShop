import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";

export function UserOrderInfo() {
    const { id } = useParams();
    const [orders, setOrders] = useState({});
    //   const [isLoading, setIsLoading] = useState(true);

    const getOrderInfo = async () => {
        try {
            const { data } = await axios.get(
                `https://pettishopnew.herokuapp.com/api/order/${id}`
            );
            setOrders(data);
            console.log(data);
            //   setIsLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getOrderInfo();
    }, [id]);
    console.log(orders);
    return (
        <div className="container">
            <Navigation />
            <h6 className="text-center text-danger fw-bold mt-3">
                User Order details
            </h6>
            <div className="row table-responsive">
                <table className="text-center table">
                    <thead>
                        <tr>
                            <th>ProductId</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.product &&
                            orders.product.map((p, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{p._id}</td>
                                        <td>{p.name}</td>
                                        <td>{p.category}</td>
                                        <td>{p.price}</td>
                                        <td>{p.quantity}</td>
                                        <td>{p.price * p.quantity}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

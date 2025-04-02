import React, {useEffect} from "react";
import '../../App.css';
import {useNavigate} from "react-router-dom";

function Products() {
    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = localStorage.getItem("loggedIn")
        if (!loggedIn) {
            alert("Please login first !!")
            navigate("/login")
        }
    }, [navigate])
    return (
        <div className="products">
            <h2>Welcome to the Product List</h2>
        </div>
    )
}

export default Products

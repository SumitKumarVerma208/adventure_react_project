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
    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        alert("Logged Out!");
        navigate("/login")
    };
    return (
        <div className="products">
            <h2>Welcome to the Product List</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Products

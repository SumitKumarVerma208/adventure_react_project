import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import CardItem from "../CardItem.jsx";

function Login() {
    const [user, setUser] = useState({username: "", password: ""})
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const storeUser = JSON.parse(localStorage.getItem("user"));

        if (storeUser && storeUser.username === user.username && storeUser.password === user.password) {
            localStorage.setItem("loggedIn", "true")
            alert("Login Successful!")
            navigate("/products")
        } else {
            alert("Invalid Username or Password")
        }
    }
    return (
        <div>
            <div className="login">
                <h2>Login</h2>
            </div>
            <div className='login_cards'>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <form onSubmit={handleLogin} className="login-form">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    required
                                    onChange={(e) => setUser({
                                        ...user, username: e.target.value
                                    })}/>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    onChange={(e) => setUser({
                                        ...user, password: e.target.value
                                    })}/>
                                <button type="submit">Login</button>
                            </form>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login

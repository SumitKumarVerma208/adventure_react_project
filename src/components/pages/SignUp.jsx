import React, {useState} from "react";
import '../../App.css';
import {useNavigate} from "react-router-dom";

function SignUp() {
    const [user, setUser] = useState({username: "", password: ""});
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(user))
        navigate("/login");
    };
    return (
        <div>
            <div className="sign-up">
                <h2>Register</h2>
            </div>
            <div className="signup_cards">
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <form onSubmit={handleRegister} className="signup-form">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    required
                                    onChange={(e) => setUser({
                                        ...user, username: e.target.value
                                    })}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    onChange={(e) => setUser({
                                        ...user, password: e.target.value
                                    })}
                                />
                                <button type="submit">Register</button>
                            </form>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp

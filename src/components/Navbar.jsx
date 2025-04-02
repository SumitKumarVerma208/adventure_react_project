import React, {useEffect, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css"
import './Navbar.css'
import {Button} from "./Button.jsx";

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const navigate = useNavigate();
    const loggedIn = localStorage.getItem("loggedIn")
    const handleClick = () => {
        setClick(!click)
    }
    const closeMobileMenu = () => {
        setClick(false)
    }
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton();
    }, [])
    window.addEventListener('resize', showButton);

    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        alert("Logged Out!");
        navigate("/login")
    }

    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL <i className='fab fa-typo3'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/login' className='nav-links' onClick={closeMobileMenu}>
                                Login
                            </NavLink>

                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                    {
                        loggedIn ? button && <Button buttonStyle='btn--outline' onClick={handleLogout}>Logout</Button> : ""
                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar

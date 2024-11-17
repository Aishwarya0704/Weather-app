import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
    const userName = localStorage.getItem('user-info');
    const navigate = useNavigate();

    function Logout() {
        localStorage.clear();
        navigate('/login');
        window.location.reload();
    }

    return (
        <div className="header">
            <nav className="navigation">
                {
                    localStorage.getItem('idToken') ?
                        <>  
                            <NavLink >{userName.toUpperCase()}</NavLink>
                            {/* <NavLink to="/weather">Weather</NavLink> */}
                            <NavLink onClick={Logout}>Logout</NavLink>
                        </>
                        :
                        <>
                            <NavLink to="/">Register</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </>
                }
            </nav>
        </div>
    )
}


//
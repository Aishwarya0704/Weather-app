import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { useDispatch } from "react-redux";
import { LoginAction } from "../redux/Actions/LoginAction";


export const Login = ({ showToast }) => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    async function handleLoginFormSubmit(e) {
        e.preventDefault();
        dispatch(
            LoginAction(user),
        );
        if (localStorage.getItem("idToken")) {
            showToast("Logged In Successfully!")
            navigate('/weather');
        }
    }

    return (
        <>
            <Header />
            <div className="super-bg">
                <div className="main">
                    <div className="form-box">
                        <h2>Login</h2>
                        <form onSubmit={handleLoginFormSubmit} action="POST">
                            <div className="input-box">
                                <input type="email" name="email" value={user.email} onChange={handleOnChange} required />
                                <label>Email</label>
                            </div>
                            <div className="input-box">
                                <input type="password" name="password" value={user.password} onChange={handleOnChange} required />
                                <label>Password</label>
                            </div>
                            <div className="remember-forgot">
                                <label className="label"><input type="checkbox" />Remember Me</label>
                                <Link to="/forgotPassword">Forgot Password?</Link>
                            </div>
                            <input type="submit" className="button-login" value="Login" ></input>
                            <div className="register-link">
                                <p>Don't have an account?</p>
                                <Link to="/">Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}


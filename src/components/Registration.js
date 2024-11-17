import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Header } from "./Header";
import { useDispatch } from "react-redux";
import { RegistrationAction } from "../redux/Actions/RegistrationAction";

export const Registration = () => {
    const [user, setUser] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    async function handleRegistrationFormSubmit(e) {
        e.preventDefault();
        dispatch(
            RegistrationAction(user),
            navigate('/login'),
        );
    };

    return (
        <>
            <Header />
            <div className="super-bg">
                <div className="main">
                    <div className="form-box">
                        <h2>Register</h2>
                        <form onSubmit={handleRegistrationFormSubmit}>
                            <div className="input-box">
                                <input name="username" type="text" value={user.username} onChange={handleOnChange} required />
                                <label>Username</label>
                            </div>
                            <div className="input-box">
                                <input name="firstName" type="text" value={user.firstName} onChange={handleOnChange} required />
                                <label>First Name</label>
                            </div>
                            <div className="input-box">
                                <input name="lastName" type="text" value={user.lastName} onChange={handleOnChange} required />
                                <label>Last Name</label>
                            </div>
                            <div className="input-box">
                                <input name="email" type="email" value={user.email} onChange={handleOnChange} required />
                                <label>Email</label>
                            </div>
                            <div className="input-box">
                                <input name="phoneNumber" type="number" value={user.phoneNumber} onChange={handleOnChange} required />
                                <label>Phone number</label>
                            </div>
                            <div className="input-box">
                                <input name="password" type="password" value={user.password} onChange={handleOnChange} required />
                                <label>Password</label>
                            </div>
                            <button type="submit" className="button-register">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
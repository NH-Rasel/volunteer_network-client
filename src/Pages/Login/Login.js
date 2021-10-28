import React from 'react';
import { Link } from 'react-router-dom';
import '../Register/Register.css';
import icon from '../../images/btn_google_light_focus_ios.svg'
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <img style={{ width: '300px', marginBottom: '20px' }} src="https://i.ibb.co/3BXwgWB/Group-1329.png" alt="" />
            <div className="register-form">
                <h3 className="fw-bolder mb-5">Login to your account</h3>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                    <label for="floatingPassword">Password</label>
                </div>
                <div className="d-grid mb-3">
                    <button className="btn btn-primary" type="button">Login</button>
                </div>
                <div className="mb-3">
                    <p>Or continue with</p>
                    <button onClick={signInUsingGoogle} style={{ border: 'none', backgroundColor: 'white' }}><Link><img style={{ width: '60px' }} src={icon} alt="" /></Link></button>
                </div>
                <div>
                    <p>Need an account? <Link to="/register"> Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
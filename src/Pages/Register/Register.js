import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="container">
            <img style={{ width: '300px', marginBottom: '20px' }} src="https://i.ibb.co/3BXwgWB/Group-1329.png" alt="" />
            <div className="register-form">
                <h3 className="fw-bolder mb-5">Register as a Volunteer</h3>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                    <label for="floatingPassword">Password</label>
                </div>
                <div className="form-floating mb-3">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example" required>
                        <option selected>Select an option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Works with selects</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Description" id="floatingTextarea2"></textarea>
                    <label for="floatingTextarea2">Description</label>
                </div>
                <div className="d-grid mb-3">
                    <button className="btn btn-primary" type="button">Register</button>
                </div>
                <div>
                    <p>Already have an account?<Link to="/login"> Login</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Register;
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="container mt-5">
            <h2 className="fw-bold">I GROW BY HELPING PEOPLE IN NEED</h2>
            <div className="search-field">
                <form className="d-flex">
                    <input className="form-control w-50" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Home;
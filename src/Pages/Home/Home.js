import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Event from './Event/Event';
import './Home.css';

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="fw-bold">I GROW BY HELPING PEOPLE IN NEED</h2>
            <div className="search-field">
                <form className="d-flex">
                    <input className="form-control w-50" type="search" placeholder="Search.." aria-label="Search" />
                    <button style={{ padding: '0px 25px' }} className="btn btn-primary" type="submit">Search</button>
                </form>
            </div>
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 mb-4">
                {
                    events.map(event => <Event
                        key={event.id}
                        event={event}
                    ></Event>)
                }
            </div>
        </div>
    );
};

export default Home;
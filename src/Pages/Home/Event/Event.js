import React from 'react';
import { Card } from 'react-bootstrap';

const Event = ({ event }) => {
    const { title, img } = event;
    const bg = [
        "orange",
        "orange2",
        "blue",
        "blue2",
        "green",
        "green2",
        "brown",
        "brown2",
    ];
    const randomBg = bg[Math.floor(Math.random() * 8)];
    return (
        <div className="col">
            <Card className="event">
                <Card.Img style={{ height: '250px' }} variant="top" src={img} />
                <Card.Body style={{ height: '80px' }} className={`${randomBg}  event__body`}>
                    <Card.Title className="event__body--title">{title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Event;
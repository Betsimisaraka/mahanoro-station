import React from 'react';

export default function MyBookingContainer() {
    return (
        <div>
            <h4>My booking</h4>
            <ul>
                <li>
                    <p>🚍</p>
                    <div>
                        <p>Destination</p>
                        <p>Date, time</p>
                    </div>
                    <div>
                        <p>Seats</p>
                        <p>Price</p>
                    </div>
                    <button>Cancel</button> 
                </li>
            </ul>
        </div>
    )
}

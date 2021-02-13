import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Trip() {
    const cities = useSelector(state => state.cities);
    console.log(cities);
    const { tripId } = useParams();
    console.log(tripId);

    return (
        <div>
            <h2>Trip</h2>
        </div>
    )
}

export default Trip;

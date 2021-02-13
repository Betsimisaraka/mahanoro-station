import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cities() {
    const destinations = useSelector(state => state.destinations);

    return (
        <div>
            {destinations.map(city => (
                <Link to={`/city/${city.city}`} key={city.id}>
                    <h2>{city.city}</h2>
                </Link>
            ))}
        </div>
    )
}

export default Cities

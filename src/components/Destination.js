import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCities } from '../actions';

function Destination() {
    const cities = useSelector(state => state.cities);
    const destinations = useSelector(state => state.destinations);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCities());
    }, [])

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

export default Destination

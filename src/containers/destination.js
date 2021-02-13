import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCities } from '../actions';

function DestinationContainer() {
    const { destination } = useParams();
    console.log(destination);
    const cities = useSelector(state => state.cities);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCities());
    }, [])

    const filterCities = cities.filter(city => city.destination === destination);

    return (
        <div>
            <h2>Next trips to: <span>{destination}</span></h2>
            <ul>     
                {filterCities.map(city => (
                    <li key={city.id}>
                        <h2>{city.departureTime}</h2>
                        {/* {city.seats.map(seat => (
                            <p key={seat.id}>{seat.isAvailable ? "seats are availabel" : "seats are not availablle"}</p>
                        ))} */}
                        <Link to={`/trip/${city.id}`}>
                            <button type="button">Book a place</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DestinationContainer;

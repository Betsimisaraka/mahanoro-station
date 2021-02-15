import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCities } from '../actions';
import { foramtDate, formatDate } from '../Utils/dateFormat';

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
                {filterCities.map(city => {
                    const date = new Date(city.departureTime);
                    const options = {weekday: 'long'}
                    const getDayName = date.toLocaleDateString('en-US', options);
                    const getFullDate = date.toLocaleDateString();
                    const getTime = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

                    const availableSeates = city.seats.reduce((a, b) => b.isAvailable ? ++a : a, 0);
                    console.log(availableSeates);

                    return (
                        <li key={city.id}>
                            <div>
                                <p>{getDayName}</p>
                                <p>{getTime}</p>
                            </div>
                            <h2>{getFullDate}</h2>
                            <p><span>{availableSeates}</span> seats lefts</p>
                            
                            <Link to={`/trip/${city.id}`}>
                                <button type="button">Book a place</button>
                            </Link>
                        </li>
                    )
                    
                })}
            </ul>
        </div>
    )
}

export default DestinationContainer;

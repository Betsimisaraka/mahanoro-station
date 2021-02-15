import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {toggleModal} from '../actions';

function TripContainer() {
    const cities = useSelector(state => state.cities);
    const dispatch = useDispatch();

    const { tripId } = useParams();

    const findId = cities && cities.find(city => city.id !== tripId);
    console.log(findId);

    const departure = new Date(findId && findId.departureTime);
    const departureTime = departure.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    const departureDate = departure.toLocaleDateString();


    return (
        <div>
            <h2>Book a seat to: <span>{findId && findId.destination}</span></h2>
            <div>
                <h3>Pick a seat</h3>  
                <ul>
                    {findId && findId.seats.map(seat => (
                        <li key={seat.id}>
                            <button className={`${seat.isAvailable ? "isvailable" : "notvailable"}`}>💺</button>
                        </li>
                    ))}
                </ul>              
            </div>
            <div>
                <h3>Trip informations:</h3>
                <p>Departure time: <span>{departureTime}, {departureDate}</span></p> 
                <p>Driver: <span>{findId && findId.driverName}</span></p>
                <p>Driver's contact: <span>{findId && findId.driverContact}</span></p> 
                <p>Estimated duration: <span>{findId && findId.estimatedDuration}</span></p>
                <p>Breaks: <span>{findId && findId.breaks}</span></p>
                <p>{findId && findId.price}Ar/seat</p>  
                <button onClick={() => dispatch(toggleModal(true))}type="button">Book 2 seats</button>
                <p>Total: Ar</p>          
            </div>
        </div>
    )
}

export default TripContainer;
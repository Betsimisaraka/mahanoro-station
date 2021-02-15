import React, {useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {setCountSeats, toggleModal} from '../actions';

function TripContainer() {
    const cities = useSelector(state => state.cities);
    const countSeats = useSelector(state => state.countSeats);
    const selected = useSelector(state => state.selected);
    const dispatch = useDispatch();
    const btnRef = useRef(null);
    const { tripId } = useParams();

    useEffect(() => {
        if (selected) {
            btnRef.current.classList.add('selected');
        }
    }, [])

    const findId = cities && cities.find(city => city.id !== tripId);
    const departure = new Date(findId && findId.departureTime);
    const departureTime = departure.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    const departureDate = departure.toLocaleDateString();

    const totalPrice = findId && findId.price * countSeats;

    return (
        <div>
            <h2>Book a seat to: <span>{findId && findId.destination}</span></h2>
            <div>
                <h3>Pick a seat</h3>  
                <ul>
                    {findId && findId.seats.map(seat => (
                        <li key={seat.id}>
                            <button 
                                ref={btnRef} 
                                onClick={() => {
                                    if (seat.isAvailable) {
                                        return dispatch(setCountSeats(seat.id))
                                    } else {
                                        return null;
                                    }
                                }} 
                                className={`${seat.isAvailable ? "isvailable" : "notvailable"}`}
                            >💺</button>
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
                <button onClick={() => dispatch(toggleModal(true))}type="button">Book <span>{countSeats}</span> seats</button>
                <p>Total: <span>{totalPrice ? totalPrice : 0}</span> Ar</p>          
            </div>
        </div>
    )
}

export default TripContainer;
import React, {useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Trip, Seats, TripInfo } from '../components';
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
        <Trip>
            <Trip.Title>Book a seat to: <Trip.Span>{findId && findId.destination}</Trip.Span></Trip.Title>
            <Seats>
                <Seats.Title>Pick a seat</Seats.Title>  
                <Seats.Base>
                    {findId && findId.seats.map(seat => (
                        <Seats.Group key={seat.id}>
                            <Seats.Button 
                                onClick={() => {
                                    if (seat.isAvailable) {
                                        return dispatch(setCountSeats(seat.id))
                                    } else {
                                        return null;
                                    }
                                }} 
                                className={`${seat.isAvailable ? "isvailable" : "notvailable"}`}
                            >💺</Seats.Button>
                        </Seats.Group>
                    ))}
                </Seats.Base>              
            </Seats>
            <TripInfo>
                <TripInfo.Title>Trip informations:</TripInfo.Title>
                <TripInfo.Time>Departure time: <span>{departureTime}, {departureDate}</span></TripInfo.Time> 
                <TripInfo.Name>Driver: <span>{findId && findId.driverName}</span></TripInfo.Name>
                <TripInfo.Contact>Driver's contact: <span>{findId && findId.driverContact}</span></TripInfo.Contact> 
                <TripInfo.Duration>Estimated duration: <span>{findId && findId.estimatedDuration}</span></TripInfo.Duration>
                <TripInfo.Break>Breaks: <span>{findId && findId.breaks}</span></TripInfo.Break>
                <TripInfo.Price>{findId && findId.price}Ar/seat</TripInfo.Price>  
                <TripInfo.Book onClick={() => dispatch(toggleModal(true))}type="button">Book <span>{countSeats}</span> seats</TripInfo.Book>
                <TripInfo.Total>Total: <span>{totalPrice ? totalPrice : 0}</span> Ar</TripInfo.Total>          
            </TripInfo>
        </Trip>
    )
}

export default TripContainer;
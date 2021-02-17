import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { resetTotal, setCountSeats, resetCount, setTotal, toggleModal, addToBooking } from '../actions';
import { TripInfo } from '../components';

export default function TripInfoContainer({ findId }) {
    const countSeats = useSelector(state => state.countSeats);
    const total = useSelector(state => state.total);
    const booking = useSelector(state => state.booking);
    console.log(booking);
    const dispatch = useDispatch();

    const departure = new Date(findId && findId.departureTime);
    const departureTime = departure.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    const departureDate = departure.toLocaleDateString();

        const totalPrice = findId && findId.price * countSeats;
        dispatch(setTotal(totalPrice))
    
    function reseting() {
        dispatch(toggleModal(true));
        dispatch(resetCount())
        dispatch(resetTotal());
    }

    return (
        <TripInfo>
            <TripInfo.Title>Trip informations:</TripInfo.Title>
            <TripInfo.Time>Departure time: <span>{departureTime}, {departureDate}</span></TripInfo.Time> 
            <TripInfo.Name>Driver: <span>{findId && findId.driverName}</span></TripInfo.Name>
            <TripInfo.Contact>Driver's contact: <span>{findId && findId.driverContact}</span></TripInfo.Contact> 
            <TripInfo.Duration>Estimated duration: <span>{findId && findId.estimatedDuration}</span></TripInfo.Duration>
            <TripInfo.Break>Breaks: <span>{findId && findId.breaks}</span></TripInfo.Break>
            <TripInfo.Price>{findId && findId.price}Ar/seat</TripInfo.Price>  
            <TripInfo.Book onClick={reseting}type="button">Book <span>{countSeats}</span> seats</TripInfo.Book>
            <TripInfo.Total>Total: <span>{total}</span> Ar</TripInfo.Total>          
        </TripInfo>
    )
}

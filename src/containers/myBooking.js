import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToBooking } from '../actions';
import { MyBooking } from '../components';

export default function MyBookingContainer() {
    const countSeats = useSelector(state => state.countSeats);
    const booking = useSelector(state => state.booking);
    console.log(booking);

    const dispatch = useDispatch();

    function handleNewBooking() {
        const newBooking = {
                city: '',
                date: '',
                time: '',
                price: '',
                seats: countSeats,
            }
            console.log(newBooking);
        dispatch(addToBooking(newBooking));
    }

    useEffect(() => {
        handleNewBooking();
    }, [])

    return (
        <MyBooking>
            <MyBooking.Title>My booking</MyBooking.Title>
            <MyBooking.Base>
                {
                    booking.map(book => (
                        <MyBooking.Frame>
                            <MyBooking.Icon src="../images/noto-v1_bus.svg" alt="Bus"/>
                            <MyBooking.Group>
                                <MyBooking.Destination>Destination</MyBooking.Destination>
                                <MyBooking.Departure>Date, time</MyBooking.Departure>
                            </MyBooking.Group>
                            <MyBooking.Group>
                                <MyBooking.Seats>{book.seats} seats</MyBooking.Seats>
                                <MyBooking.Price>Price</MyBooking.Price>
                            </MyBooking.Group>
                            <MyBooking.CancelBtn>Cancel</MyBooking.CancelBtn> 
                        </MyBooking.Frame>
                    ))
                }
            </MyBooking.Base>
        </MyBooking>
    )
}

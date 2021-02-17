import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToBooking, removeFromBooking } from '../actions';
import { MyBooking } from '../components';

export default function MyBookingContainer() {
    const countSeats = useSelector(state => state.countSeats);
    const booking = useSelector(state => state.booking);
    const total = useSelector(state => state.total);

    const dispatch = useDispatch();

    function handleNewBooking() {
        const newBooking = {
                id: Date.now(),
                city: '',
                date: '',
                time: '',
                price: total,
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
                {booking.length <= 0 ? <p>No booking</p> :
                    (
                        booking.map(book => (
                            <MyBooking.Frame key={book.id}>
                                <MyBooking.Icon src="../images/noto-v1_bus.svg" alt="Bus"/>
                                <MyBooking.Group>
                                    <MyBooking.Destination>Destination</MyBooking.Destination>
                                    <MyBooking.Departure>Date, time</MyBooking.Departure>
                                </MyBooking.Group>
                                <MyBooking.Group>
                                    <MyBooking.Seats>{book.seats} {book.seats <= 1 ? "seat" : "seats"}</MyBooking.Seats>
                                    <MyBooking.Price>{book.price} Ar</MyBooking.Price>
                                </MyBooking.Group>
                                <MyBooking.CancelBtn onClick={() => dispatch(removeFromBooking(book.id))}>Cancel</MyBooking.CancelBtn> 
                            </MyBooking.Frame>
                        ))
                    )
                }
            </MyBooking.Base>
        </MyBooking>
    )
}

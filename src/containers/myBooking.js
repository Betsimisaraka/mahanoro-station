import React from 'react';
import { MyBooking } from '../components';

export default function MyBookingContainer() {
    return (
        <MyBooking>
            <MyBooking.Title>My booking</MyBooking.Title>
            <MyBooking.Base>
                <MyBooking.Frame>
                    <MyBooking.Icon>🚍</MyBooking.Icon>
                    <MyBooking.Group>
                        <MyBooking.Destination>Destination</MyBooking.Destination>
                        <MyBooking.Departure>Date, time</MyBooking.Departure>
                    </MyBooking.Group>
                    <MyBooking.Group>
                        <MyBooking.Seats>Seats</MyBooking.Seats>
                        <MyBooking.Price>Price</MyBooking.Price>
                    </MyBooking.Group>
                    <MyBooking.CancelBtn>Cancel</MyBooking.CancelBtn> 
                </MyBooking.Frame>
            </MyBooking.Base>
        </MyBooking>
    )
}

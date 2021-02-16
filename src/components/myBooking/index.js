import React from 'react';

import {Container, Title, Base, Group, Frame, Icon, Destination, Departure, Seats, Price, CancelBtn } from './styles/myBooking';

export default function MyBooking({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

MyBooking.Title = function MyBookingTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

MyBooking.Base = function MyBookingBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
}

MyBooking.Frame = function MyBookingFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

MyBooking.Icon = function MyBookingIcon({ ...restProps }) {
    return <Icon {...restProps} />
}

MyBooking.Group = function MyBookingGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

MyBooking.Destination = function MyBookingDestination({ children, ...restProps }) {
    return <Destination {...restProps}>{children}</Destination>
}

MyBooking.Departure = function MyBookingDeparture({ children, ...restProps }) {
    return <Departure {...restProps}>{children}</Departure>
}

MyBooking.Seats = function MyBookingSeats({ children, ...restProps }) {
    return <Seats {...restProps}>{children}</Seats>
}

MyBooking.Price = function MyBookingPrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>
}

MyBooking.CancelBtn = function MyBookingCancelBtn({ children, ...restProps }) {
    return <CancelBtn {...restProps}>{children}</CancelBtn>
}





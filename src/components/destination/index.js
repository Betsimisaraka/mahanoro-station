import React from 'react';

import {Container, Title, Base, Frame, Group, Day, Time, Date, Seats, Book, Link, Span} from './styles/destination';

export default function Destination({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Destination.Title = function DestinationTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Destination.Base = function DestinationBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
}

Destination.Frame = function DestinationFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Destination.Group = function DestinationGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Destination.Day = function DestinationDay({ children, ...restProps }) {
    return <Day {...restProps}>{children}</Day>
}

Destination.Time = function DestinationTime({ children, ...restProps }) {
    return <Time {...restProps}>{children}</Time>
}

Destination.Date = function DestinationDate({ children, ...restProps }) {
    return <Date {...restProps}>{children}</Date>
}

Destination.Seats = function DestinationSeats({ children, ...restProps }) {
    return <Seats {...restProps}>{children}</Seats>
}

Destination.Link = function DestinationLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Destination.Span = function DestinationSpan({ children, ...restProps }) {
    return <Span {...restProps}>{children}</Span>
}

Destination.Book = function DestinationBook({ children, ...restProps }) {
    return <Book {...restProps}>{children}</Book>
}
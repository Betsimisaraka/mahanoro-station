import React from 'react';

import {Container, Title, Time, Name, Contact, Duration, Break, Price, Book, Total } from './styles/tripInfo';

export default function TripInfo({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

TripInfo.Title = function TripInfoTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

TripInfo.Time = function TripInfoTime({ children, ...restProps }) {
    return <Time {...restProps}>{children}</Time>
}

TripInfo.Name = function TripInfoName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>
}

TripInfo.Contact = function TripInfoContact({ children, ...restProps }) {
    return <Contact {...restProps}>{children}</Contact>
}

TripInfo.Duration = function TripInfoDuration({ children, ...restProps }) {
    return <Duration {...restProps}>{children}</Duration>
}

TripInfo.Break = function TripInfoBreak({ children, ...restProps }) {
    return <Break {...restProps}>{children}</Break>
}

TripInfo.Price = function TripInfoPrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>
}

TripInfo.Book = function TripInfoBook({ children, ...restProps }) {
    return <Book {...restProps}>{children}</Book>
}

TripInfo.Total = function TripInfoTotal({ children, ...restProps }) {
    return <Total {...restProps}>{children}</Total>
}
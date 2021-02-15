import React from 'react';

import {Container, Title, Span } from './styles/trip';

export default function Trip({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Trip.Title = function TripTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Trip.Span = function TripSpan({ children, ...restProps }) {
    return <Span {...restProps}>{children}</Span>
}


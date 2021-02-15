import React from 'react';

import {Container, Title, Base, Group, Button } from './styles/seats';

export default function Seats({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Seats.Title = function SeatsTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Seats.Base = function SeatsBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
}

Seats.Group = function SeatsGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Seats.Button = function SeatsButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

import React from 'react';

import {Container, Title, Group, Small } from './styles/account';

export default function Account({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Account.Title = function AccountTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Account.Small = function AccountSmall({ children, ...restProps }) {
    return <Small {...restProps}>{children}</Small>
}

Account.Group = function AccountGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}
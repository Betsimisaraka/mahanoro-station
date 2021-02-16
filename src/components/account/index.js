import React from 'react';

import {Container, Title, Group, Small, Frame, Image } from './styles/account';

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

Account.Image = function AccountImage({ ...restProps }) {
    return <Image {...restProps} />
}

Account.Frame = function AccountFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}
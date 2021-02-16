import React from 'react';
import {Container, Title, Small, Link } from './styles/header';

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Header.Small = function HeaderSmall({ children, ...restProps }) {
    return <Small {...restProps}>{children}</Small>
}

Header.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}
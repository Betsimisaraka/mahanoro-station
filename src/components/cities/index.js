import React from 'react';
import {Container, Title, Link, SubTitle } from './styles/cities';

export default function Cities({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Cities.Title = function CitiesTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Cities.SubTitle = function CitiesSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Cities.Link = function CitiesSmall({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}
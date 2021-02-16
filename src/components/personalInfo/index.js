import React from 'react';

import {Container, Title, Base, Group, Submit, Label, Input } from './styles/personalInfo';

export default function PersonalInfo({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

PersonalInfo.Title = function PersonalInfoTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

PersonalInfo.Base = function PersonalInfoBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
}

PersonalInfo.Group = function PersonalInfoGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

PersonalInfo.Label = function PersonalInfoLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}

PersonalInfo.Input = function PersonalInfoInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>
}

PersonalInfo.Submit = function PersonalInfoSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>
}


import React from 'react';

import { Container, CloseBtn, Frame, Title, Description, ComfirmBtn, Group } from './styles/modal';

export default function ComfirmModal({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

ComfirmModal.CloseBtn = function ComfirmModalCloseBtn({ children, ...restProps }) {
    return <CloseBtn {...restProps}>{children}</CloseBtn>
}

ComfirmModal.Frame = function ComfirmModalFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

ComfirmModal.Group = function ComfirmModalGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

ComfirmModal.Title = function ComfirmModalTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

ComfirmModal.Description = function ComfirmModaldescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>
}

ComfirmModal.ComfirmBtn = function ComfirmModalComfirmBtn({ children, ...restProps }) {
    return <ComfirmBtn {...restProps}>{children}</ComfirmBtn>
}
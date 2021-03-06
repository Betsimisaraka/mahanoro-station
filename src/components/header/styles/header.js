import styled from 'styled-components';
import {Link as RouterLink} from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #0F0E17;
    padding-top: 28px;
    padding-bottom: 29px;
    padding-right: 68px;
    padding-left: 68px;
`;

export const Title = styled.h1`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    color: #FFFFFE;
    padding-left: 30px;
`;

export const Small = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #A7A9BE;
    &:active {
        color: #FF8906;
    }
`;

export const Link = styled(RouterLink)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

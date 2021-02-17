import styled from 'styled-components';
import {Link as RouterLink} from 'react-router-dom';

export const Container = styled.div`
    & div:first-child {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 700px;
        margin-left: auto;
        margin-right: auto;
    }
    @media (min-width: 1000px) {
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Title = styled.h2`
    padding-left: 68px;
`;

export const Base = styled.ul`
`;

export const Frame = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
`;

export const Group = styled.div``;

export const Day = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    color: #FF8906;
`;

export const Time = styled.p`
     font-family: 'Rubik';
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    color: #FF8906;
`;

export const Date = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    color: #000000;
`;

export const Seats = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    color: #000000;
    span {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 43px;
        color: #E53170;
    }
`;

export const Span = styled.span``;

export const Link = styled(RouterLink)``;

export const Book = styled.button`
    background: #E53170;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    color: #FFFFFF;
    padding: 25px 50px;
    border: none;
    &:disabled {
        opacity: 0.1;
    }
`;

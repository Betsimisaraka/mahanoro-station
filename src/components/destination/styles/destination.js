import styled from 'styled-components';
import {Link as RouterLink} from 'react-router-dom';

export const Container = styled.div`
    @media (min-width: 1000px) {
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Title = styled.h2``;

export const Base = styled.ul``;

export const Frame = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const Group = styled.div``;

export const Day = styled.p``;

export const Time = styled.p``;

export const Date = styled.p``;

export const Seats = styled.p``;

export const Span = styled.span``;

export const Link = styled(RouterLink)``;

export const Book = styled.button``;

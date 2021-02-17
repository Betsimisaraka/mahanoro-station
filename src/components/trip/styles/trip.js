import styled from 'styled-components';

export const Container = styled.div`
    
    @media (min-width: 1000px) {
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Title = styled.h2`
    grid-column: 1 / 3;
`;

export const Span = styled.span``;

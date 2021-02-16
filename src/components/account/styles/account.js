import styled from 'styled-components';

export const Container = styled.div`
    padding-bottom: 73px;
`;

export const Title = styled.h2`
    padding-left: 70px;
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Small = styled.span``;
export const Frame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    max-width: 598px;
    margin-left: auto;
    margin-right: auto;
`;

export const Image = styled.img`
    align-self: center;
`;

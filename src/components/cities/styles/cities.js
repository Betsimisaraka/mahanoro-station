import styled from 'styled-components';
import {Link as RouterLink} from 'react-router-dom'; 

export const Container = styled.div`

    @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 85px;
        row-gap: 38px;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 200px;
    }
    div {
        grid-column: 1 / 3;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

export const Title = styled.h2`
    padding-left: 52px;
`;

export const Link = styled(RouterLink)`
    background: #0F0E17;
    padding-top: 28px;
    padding-bottom: 28px;
    padding-left: 33px;
    padding-right: 78px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SubTitle = styled.h3`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0;
    padding-left: 31px;
`;

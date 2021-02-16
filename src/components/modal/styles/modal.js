import styled from 'styled-components';

export const Container = styled.div`
    background: #FFFFFF;
    box-sizing: border-box;
    width: 600px;
    text-align: center;
`;

export const CloseBtn = styled.button`
   text-align: end;
   border: none;
   background-color: transparent;
`;

export const Frame = styled.div``;

export const Group = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center
`;

export const Title = styled.h3`
    padding-left: 24px;
`;

export const Description = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    text-align: start;
`;

export const ComfirmBtn = styled.button`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    padding: 27px;
    border: none;
    background: #E53170;
`;

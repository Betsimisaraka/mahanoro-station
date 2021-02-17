import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Rubik', Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    h2 {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 76px;
        color: #000000;
    }
    h2 span{
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 300;
        font-size: 64px;
        line-height: 76px;
        color: #E53170;
    }
    h3 {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 43px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #000000;
    }

    h4 {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #0F0E17;
    }
    a {
        text-decoration: none;
    }

    fieldset {
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0;
        padding: 0;
    }
    .isvailable, .notvailable {
    border: none
    }

    .isvailable {
        background-color: transparent;
    }

    .isvailable:active {
        background-color: yellow;
    }

    .notvailable {
        background-color: red;
    }
    .selected {
        background-color: yellow;
    }
`;
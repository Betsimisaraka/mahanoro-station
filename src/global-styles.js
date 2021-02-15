import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Rubik', Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }
    ul {
        list-style: none;
    }

    h2 {
        font-family: Rubik;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 76px;
        color: #000000;
    }
    h3 {
        font-family: Rubik;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 43px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #000000;
    }

    h4 {
        font-family: Rubik;
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
    .isvailable, .notvailable {
    border: none
    }

    .isvailable {
        background-color: transparent;
    }

    .notvailable {
        background-color: red;
    }
    .selected {
        background-color: yellow;
    }
`;
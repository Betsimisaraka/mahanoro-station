import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Rubik', Helvetica, sans-serif;
    }
    ul {
        list-style: none;
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
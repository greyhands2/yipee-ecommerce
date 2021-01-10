import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`

    body {
        font-family: 'Open Sans Condensed';
        padding: 0 40px;

        @media screen and (max-width: 800px) {
           padding: 0 10px; 
        }
    }

    a {
        text-decoration: none;
        color: #000000;
        outline: none;
    }

    * {
        box-sizing: border-box;
    }

`;
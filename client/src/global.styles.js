import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`

    body {
        font-family: 'Open Sans Condensed';
        padding: 0 40px;

        @media screen and (max-width: 800px) {
           padding: 0 10px; 
        }
    }

.button {
  text-decoration: none;
   outline:0 !important;
   outline-offset: none !important;
   
}


.button:focus {
  text-decoration: none;
   outline:0 !important;
   outline-offset: none !important;
}

.button:hover {
  text-decoration: none;
   outline:0 !important;
   outline-offset: none !important;
}

.button:visited {
  text-decoration: none;
   outline:0 !important;
   outline-offset: none !important;
}

.button:link {
  text-decoration: none;
   outline:0 !important;
   outline-offset: none !important;
}


.button:active {
  text-decoration: none;
   outline:0 !important;
   outline-offset: none !important;
}


.a {
  text-decoration: none;
   outline:0 !important;
   outline-offset: none !important;
}

.a:focus {
  text-decoration: none;
   outline:0 !important;
   outline-offset: none !important;
}

.a:hover {
  text-decoration: none;
   outline:0 !important;
   outline-offset: none !important;
   
}

.a:visited {
  text-decoration: none;
   outline:0 !important;
   outline-offset: none !important;
}

.a:link {
  text-decoration: none;
   outline:0 !important;
   outline-offset: none !important;
}


.a:active {
  text-decoration: none;
   outline:0 !important;
   outline-offset: none !important;
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
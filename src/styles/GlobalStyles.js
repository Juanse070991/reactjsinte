/*import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --blancotransp: rgba(250,250,250,0.2);
    --blancotransp2: rgba(250,250,250,0.6);
    --azultransp: rgba(0,0,110,0.2);
    --fondocarta: rgba(250,250,250,0.9);
    --azul: rgb(0, 48, 73);
    --rojo: rgb(214, 40, 40);
    --naranja: rgb(247, 127, 0);
    --amarillo: rgb(252, 191, 73);
    --blanco: rgb(234, 226, 183);
    --naranjatransp:  rgba(247,127,0, 0.4);

    --fontroboto:  'Roboto', sans-serif;
    --fontlato: 'Lato', sans-serif;
    --fontgrande: 'Permanent Marker', cursive;

    --azul1: rgb(0, 0, 255);
    --azul2: rgb(0, 0, 204);
    --azul3: rgb(0, 0, 153);
    --azul4: rgb(0, 0, 102);
    --azul5: rgb(0, 0, 51);
    --azul6: rgb(0, 0, 0);

    --clarito: rgb(31, 175, 138);
    --verdeoscuro: rgb(23, 157, 7);
    --clarito1: rgb(147, 201, 140);
    --clarito2: rgb(126, 205, 117);
    --verdebrillo: rgb(28, 253, 1);
    --rojo: rgb(209, 21, 6);

}
body {
    background:url(https://res.cloudinary.com/dpxe6utid/image/upload/v1668126872/drinksCo/cardbacknegro_xg0oac.jpg);
    color: wheat;
    font-family: var(--fontroboto);
    width: 100%;
 
    
  
}
a {
    text-decoration: none;
    color: wheat;
}
`;*/



import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
    --orange-bg: #2f2618;
    --orange: #ff9d01;
    --magenta: #FF005C;
    --gray-bg: #2b2b2c;
  --btn-gradient: linear-gradient(83deg, rgb(209, 21, 6), rgb(0, 0, 0));
  --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
  }
  html{
    scroll-behavior: smooth;
  }
    body {
    margin: 0;
    padding: 0;
    box-size: border-box;
    background-image: url("https://res.cloudinary.com/ddfzor3mh/image/upload/v1678569126/fondo-de-la-estrella-del-rock-de-grunge-45215083_ayj77m.jpg");
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden 
    @media (min-width: 481px) and  (max-width: 768px){
      width: 768px;
      }
    }
    a {
    text-decoration: none;
    }
    a:visited {
    color: white;
    }
    li {
    list-style: none;
    }

    
`;

import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Futura';
        src: url('/fonts/FuturaPRO-CondExtraBoldObl.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html {
        --red: #ff0000;
        --black: #393939;
        --grey: #a0a0a0;
        --gray: var(--grey);
        --darkGrey: #454545;
        --darkGray: var(--darkGrey);
        --offWhite: #ededed;
        --aquaGreen: #2AFEC5;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
        box-sizing: border-box;
        font-size: 62.5%;
        padding: 0;
        margin: 0;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: Roboto Mono, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height:2;
        background-color: #fafafa;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: "Futura";
        letter-spacing: -6px;
        color: var(--black);
    }
    a {
        text-decoration: none;
        color: var(--black);
    }
    a:hover {
        text-decoration: underline;
    }
    button {
        font-family: Roboto Mono, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`
export default GlobalStyles

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;300&display=swap');
    @font-face {
        font-family: 'Futura Bold';
        src: url('/fonts/Futura LT Condensed Bold Oblique.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html {
        --red: #ff0000;
        --black: #393939;
        --grey: #a0a0a0;
        --gray: var(--grey);
        --lightGrey: #c8c8c8;
        --darkGrey: #4d4d4d;
        --darkGray: var(--darkGrey);
        --offWhite: #ededed;
        --mainColor: #303030;
        --secColor: #1CC2FF;
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
        height: 100%;
        overflow: ${({ isMobileMenuOpen }) =>
          isMobileMenuOpen ? "hidden" : "visible"};

    }
    .noOverflow {
        overflow-x: hidden;
    }
    @media (max-width: 800px) {
        .heroVideo {
            display: none;
        }
        .mobileImage {
            display: none;
        }
    }
    @media (min-width: 801px) {
        .heroImage {
            display: none;
        }
        .mobileVideo {
            display: none;
        }
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: "Futura Bold";
        letter-spacing: -.1rem;
        color: var(--secColor);
        text-transform: uppercase;
    }
    a {
        text-decoration: none;
        color: var(--secColor);
        font-family: Roboto Mono;

    }
    p, li, a {
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 300;
        letter-spacing: .05rem;
    }
    a:hover {
        text-decoration: underline;
    }
    button {
        font-family: Roboto Mono, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    main {
        min-height: 600px;
    }
    .mobileHeading {
        font-size: 8rem;
        line-height: 7rem;
        color: #fff;
        text-shadow: 0 0 10px rgba(20, 20, 20, .5);
        padding: 0 2rem;
    }
    .footer {
        padding-bottom: 20rem;
        background-color: var(--mainColor);
        @media (max-width: 800px) {
            padding-top: 4rem;
    }
        .footerInner {
            display: grid;
            grid-template-columns: 3fr 2fr 2fr 2fr 2fr;
            grid-template-rows: auto auto;
            max-width: 1000px;
            margin: 0 auto;
            padding-top: 25rem;
            @media (max-width: 800px) {
                display: flex;
                flex-wrap: wrap;
            }
            .logoCopyright {
                position: relative;
                top: -8.5rem;
                @media (max-width: 800px) {
                    width: 100%;
                    text-align: center;
                }
                img {
                    margin-bottom: 2rem;
                }
                p {
                    color: #fff;
                    font-size: 1.2rem;
                    margin: 0;
                    letter-spacing: 0.07rem;
                    font-weight: 300;
                }
            }
            .navigation,
            .adventures {
                @media (max-width: 800px) {
                    width: 100%;
                    text-align: center;
                    margin-bottom: 5rem;
                }
                h4 {
                    letter-spacing: 0.5px;
                    color: var(--secColor);
                    text-transform: none;
                    font-size: 1.4rem;
                    @media (max-width: 800px) {
                      font-size: 1.6rem !important;
                    }
                    font-family: --apple-system, BlinkMacSystemFont, "Segoe UI",
                        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                        "Helvetica Neue", sans-serif;
                    font-weight: 400;
                    margin: 0;
                    &.winter {
                      margin-top: 40px;
                    }
                }
                ul {
                    list-style: none;
                    margin: 0;
                    margin-top: 1rem;
                    padding: 0;
                    li {
                        line-height: 2.8rem;
                        @media (max-width: 800px) {
                          line-height: 4rem;
                        }
                        a, span {
                            color: #fff;
                            font-size: 1.2rem;
                            @media (max-width: 800px) {
                              font-size: 1.6rem;
                            }
                            font-family: --apple-system, BlinkMacSystemFont,
                                "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
                                "Open Sans", "Helvetica Neue", sans-serif;
                            font-weight: 200;
                            letter-spacing: 0.05rem;
                        }
                    }
                }
                .social {
                  margin-top: 40px;
                }
            }
            .policies {
                @media (max-width: 800px) {
                    width: 100%;
                    text-align: center;
                }
                img {
                    margin-right: 2rem;
                    @media (max-width: 800px) {
                        margin: 0 1rem;
                    }
                }
                .policyLinks {
                    ul {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        margin-top: 1rem;
                        li {
                            line-height: 2.8rem;
                            @media (max-width: 800px) {
                              line-height: 4rem;
                              font-size: 1.6rem;
                            }
                            a {
                                font-size: 1rem;
                                @media (max-width: 800px) {
                                  line-height: 4rem;
                                  font-size: 1.3rem;
                                }
                                color: #fff;
                                text-transform: uppercase;
                                letter-spacing: 0.1rem;
                            }
                        }
                    }
                }
            }
            .getInTouch {
                margin-top: 8rem;
                grid-column: 2 / 5;
                @media (max-width: 800px) {
                    width: 100%;
                    text-align: center;
                }
                h3 {
                    letter-spacing: 0.5px;
                    color: var(--secColor);
                    text-transform: none;
                    font-size: 1.6rem;
                    font-family: --apple-system, BlinkMacSystemFont, "Segoe UI",
                        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                        "Helvetica Neue", sans-serif;
                    font-weight: 400;
                    margin: 0;
                }
                a,
                span {
                    text-decoration: underline;
                    font-family: --apple-system, BlinkMacSystemFont, "Segoe UI",
                        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                        "Helvetica Neue", sans-serif;
                    color: #fff;
                    font-size: 1.9rem;
                }
                span {
                    display: block;
                }
            }
        }
    }
    .map {
        position: relative;
        top: 10rem;
        padding: 0 8rem;
        @media (max-width: 800px) {
            padding: 0 3rem;
        }
    }
    .header {
        margin: 0 auto;
        padding: 4rem 3rem;
        width: 100%;
        font-size: 1rem;
        max-width: 1200px;
        display: grid;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 99;
        .navContainer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-align: center;
        }
        a,
        button, 
        span {
            position: relative;
            text-transform: uppercase;
            font-weight: 400;
            font-size: 1.3rem;
            background: none;
            border: 0;
            color: #fff;
            cursor: pointer;
            @media (max-width: 700px) {
                font-size: 10px;
                padding: 0 10px;
            }
        }
        button {
            font-family: Roboto Mono;
            font-weight: 400;
            filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2));
        }
        a, span {
            font-family: "Futura Bold";
            font-size: 1.8rem;
            text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
        }
        span {
            cursor: default;
        }
        a:hover, .dropDownLink:hover {
            text-decoration: none;
            color: var(--secColor);
        }
        .active {
            color: var(--secColor);
        }
        .bookNow {
            background-color: var(--secColor);
            padding: 1.5rem 2.5rem;
            border-radius: 3px;
            margin-left: 3rem;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
        }
        .navRight {
            display: flex;
            align-items: center;
            a, span {
                margin-left: 4rem;
            }
        }
        .topNavPhone {
            position: absolute;
            top: 0.5rem;
            right: 0;
            margin-right: 30px;
            a:hover {
                color: var(--secColor);
            }
            span, a {
                font-family: Roboto Mono, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-size: 1.4rem;
            }
        }
        @media (max-width: 800px) {
            .navRight {
                display: none;
            }
        }
        .dropdown {
            position: relative;
            display: inline-block;
        }
        .dropdownContent {
            display: none;
            position: absolute;
            z-index: 1;
            /* width: 30rem; */
            padding: 3rem;
            background-color: #fff;
            box-shadow: 0 0 10px  #00000033;
            border-radius: 10px;
            .gridContainer {
              display: flex;
              .col {
                width: 150px;
                border-right: 1px solid #e8e8e8;
                padding-left: 30px;
                &:first-child {
                  padding: 0;
                }
                &:last-child {
                  border-right: none;
                  padding-right: -3rem;
                }
                h3 {
                  text-align: left;
                  letter-spacing: 0;
                  margin: 0;
                  margin-bottom: 1rem;
                  &.topMargin {
                    margin-top: 40px;
                  }
                }
              }
            }
            .gridContainer2 .col {
              width: 200px !important;
            }
        }
        .adventures {
          left: -420px;
        }
        .dropdownContent a,
        .dropdownContent span {
            padding: 0.5rem 0 0;
            text-decoration: none;
            display: block;
            text-align: left;
            color: #fff;
            font-family: --apple-system, BlinkMacSystemFont, "Segoe UI",
                        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                        "Helvetica Neue", sans-serif;
            text-transform: none;
            font-weight: 400;
            font-size: 1.2rem;
            color: #bbb !important;
            text-shadow: none;
            margin-left: 0;

        }
        .dropdown:hover .dropdownContent {
            display: block;
        }
        .dropdown:hover a, .dropdown:hover span {
            color: #a8a8a8;
        }
        .dropdown:hover .dropDownLink,
        .dropdownContent a:hover {
            color: var(--secColor) !important;
        }
        @media (max-width: 1300px) {
            /* width: 100%; */
            /* justify-content: center; */
            font-size: 1.5rem;
        }
        @media (max-width: 800px) {
            .hamburgerMenu {
                display: block;
            }
        }
        @media (min-width: 801px) {
            .hamburgerMenu {
                display: none;
            }
        }
        .hamburgerMenu {
            :hover {
                cursor: pointer;
            }
            span {
                display: block;
                width: 2.9rem;
                height: 0.3rem;
                margin-bottom: 0.7rem;
                position: relative;
                background: #fcfcfc;
                border-radius: 0.2rem;
                z-index: 9999;
                transform-origin: top left;
                transition: transform 0.4s cubic-bezier(0.77, 0.2, 0.05, 1),
                    opacity 0.4s cubic-bezier(0.77, 0.2, 0.05, 1);
                :nth-child(1) {
                    transform: ${({ isMobileMenuOpen }) =>
                      isMobileMenuOpen
                        ? "rotate(45deg) translate(0, -1px)"
                        : "rotate(0) translate(0, 0)"};
                }
                :nth-child(2) {
                    opacity: ${({ isMobileMenuOpen }) =>
                      isMobileMenuOpen && "0"};
                }
                :nth-child(3) {
                    transform: ${({ isMobileMenuOpen }) =>
                      isMobileMenuOpen
                        ? "rotate(-45deg) translate(0, -1px)"
                        : "rotate(0) translate(0, 0)"};
                }
            }
        }
    }
    .mobileMenuStyles {
      position: fixed;
      width: 100vw;
      height: 100vh;
      z-index: 9998;
      left: -200vw;
      transition: left 0.4s cubic-bezier(0.77, 0.2, 0.05, 1);
      top: 0;
      overflow: hidden;
      .inner {
        height: 100%;
        background-color: var(--mainColor);
        display: flex;
        overflow-y: scroll;
        align-items: flex-start;
        text-align: left;
        padding-top: 150px;
        padding-left: 30px;
        ul {
          margin: 0;
          margin-bottom: 150px;
            padding: 0;
            li {
              list-style: none;
              /* line-height: 6rem; */
              margin-top: 8px;
              ul {
                margin-bottom: 0;
                li {
                  text-transform: none;
                  line-height: 5rem;
                  a {
                    margin-left: 80px;
                    font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
                    font-size: 20px;
                    color: #BFBFBF;
                    text-transform: none;
                  }
                }
                .winter {
                  margin-left: 80px;
                  font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
                  font-size: 20px;
                  color: #BFBFBF;
                  text-transform: none;
                }
                li:first-child {
                  font-family: "Roboto Mono";
                  text-transform: uppercase;
                  font-size: 20px;
                  color: var(--secColor);
                  margin-left: 40px;
                }
              }
              a {
                font-size: 3.3rem;
                color: #eee;
                &:hover {
                  color: var(--secColor);
                }
              }
            }
            li.mobileTel span {
              font-size: 2.5rem;
              font-family: "Futura Bold";
              color: #eee;
              position: relative;
              bottom: -2.5rem;
            }
            li.mobileTel a {
              font-size: 2.5rem;
            }
          }
        }
      }
      .isOpen {
        left: 0;
      }
      .custom-shape-divider-top-1622058599 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        z-index: 0;
    }
    .custom-shape-divider-top-1622058599 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 128px;
    }
    .custom-shape-divider-top-1622058599 .shape-fill {
        fill: #fafafa;
    }
    .custom-shape-divider-bottom-1622061969 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
        z-index: 0;
    }
    .custom-shape-divider-bottom-1622061969 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 128px;
    }
    .custom-shape-divider-bottom-1622061969 .shape-fill {
        fill: #fafafa;
    }
    .negMargin {
        /* margin-top: -18rem; */
    }
`;
export default GlobalStyles;

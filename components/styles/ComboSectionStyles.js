import styled from "styled-components"

export const ComboSectionStyles = styled.div`
    margin-bottom: -20rem;
    p {
        padding: 0 3rem;
    }
    @media (max-width: 800px) {
        margin-top: 15rem;
    }
    .grey {
        background-color: #f3f3f3;
    }
    h3 {
        font-size: 4.5rem;
        text-align: center;
        position: relative;
        /* top: -15rem; */
        color: var(--mainColor);
        @media (max-width: 800px) {
            font-size: 3.5rem;
            margin-bottom: 7rem;
            line-height: 4rem;
        }
    }
    p {
        position: relative;
        /* top: -20rem; */
        text-align: center;
        margin: 0 auto;
        font-size: 1.7rem;
        color: #b2b2b2;
        max-width: 70rem;
        @media (max-width: 800px) {
            font-size: 1.5rem;
        }
    }
    @media (max-width: 800px) {
        /* .reverse {
            flex-direction: column-reverse;
        } */
    }
    @media (min-width: 801px) {
        .reverse {
            direction: rtl;
            > * {
                direction: ltr;
            }
            .comboImage {
                transform: rotate(3deg) !important;
            }
        }
    }
    .comboSection {
        padding: 5rem 3rem 0;
        position: relative;
    }
    .comboSectionInner {
        display: grid;
        margin: 0 auto;
        max-width: 1000px;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 10rem;
        @media (max-width: 800px) {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 3rem;
        }
        .number {
            font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
                sans-serif;
            font-style: oblique;
            font-size: 2.5rem;
            font-weight: 600;
            color: #e3e3e3;
        }
        h4 {
            font-size: 4rem;
            margin-top: 0;
            position: relative;
            color: var(--mainColor);
            line-height: 4rem;
        }
        p {
            position: relative;
            /* top: -8rem; */
            font-size: 1.4rem;
            color: #b2b2b2;
            text-align: left;
        }
        ul {
            list-style: none;
            position: relative;
            padding: 0;
            margin: 2rem 0 1rem;
            li {
                font-size: 1.3rem;
                color: #707070;
                img {
                    margin-right: 1.6rem;
                    position: relative;
                    top: 0.3rem;
                }
            }
        }
        .button {
            text-align: center;
            cursor: pointer;
            position: relative;
            background-color: var(--secColor);
            border-radius: 3px;
            width: 12rem;
            padding: 1rem;
            span,
            a {
                color: #fff;
                font-weight: 400;
                text-transform: uppercase;
                font-size: 1.3rem;
                font-family: Roboto Mono;
            }
        }
        .comboImage {
            align-items: center;
            margin-bottom: -20rem;
            width: 100%;
            transform: rotate(-3deg);
            z-index: 1;
            @media (max-width: 800px) {
                margin-bottom: -30rem;
            }
        }
        @media (max-width: 800px) {
            .priceStrikeout {
                position: relative;
                top: 10;
            }
        }
        .star {
            position: relative;
            top: -40rem;
            left: -3rem;
        }
        @media (max-width: 800px) {
            .star {
                position: relative;
                top: -30rem;
            }
        }
        .save {
            position: relative;
            top: -47.5rem;
            left: 0.3rem;
            span {
                font-family: "Futura Bold", --apple-system, BlinkMacSystemFont,
                    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                    "Helvetica Neue", sans-serif;
                color: #fff;
                text-transform: uppercase;
                font-weight: 600;
            }
            .dollarSign {
                position: relative;
                text-align: center;
                top: -3.8rem;
                font-size: 2rem;
                left: -1.8rem;
            }
            @media (max-width: 800px) {
                .dollarSign {
                    position: relative;
                    top: 6rem;
                }
            }
            .amount {
                font-size: 4rem;
                letter-spacing: -0.3rem;
                text-align: center;
                position: relative;
                left: -2.1rem;
                top: -2.4rem;
            }
            @media (max-width: 800px) {
                .amount {
                    position: relative;
                    top: 7.5rem;
                }
            }
            .cents {
                font-size: 1.5rem;
                position: relative;
                top: -3.9rem;
                left: -1.5rem;
            }
            .strikeout {
                display: block;
                width: 5.9rem;
                height: 0.2rem;
                position: relative;
                background: #f00;
                border-radius: 0.1rem;
                position: relative;
                left: -1rem;
                top: -6.7rem;
            }
            @media (max-width: 800px) {
                .strikeout {
                    position: relative;
                    top: 3.5rem;
                }
            }
            .strikeLeft {
                transform: rotate(-20deg) !important;
            }
            .strikeRight {
                transform: rotate(20deg) !important;
            }
        }
        .priceContainer {
            text-align: left;
            position: relative;
            margin-bottom: -3rem;
            @media (max-width: 800px) {
                /* text-align: center; */
            }
            span {
                font-family: --apple-system, BlinkMacSystemFont, "Segoe UI",
                    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                    "Helvetica Neue", sans-serif;
                color: #5c5c5c;
                font-weight: 600;
                line-height: 14rem;
            }
            .dollarSign {
                font-size: 4rem;
                position: relative;
                top: -3.7rem;
            }
            .amount {
                font-size: 10rem;
            }
            .currency {
                font-size: 1.5rem;
                position: relative;
                top: -5.5rem;
            }
        }
    }
    .button {
        text-align: center;
        cursor: pointer;
        position: relative;
        /* top: -6rem; */
        background-color: var(--secColor);
        border-radius: 3px;
        width: 12rem;
        padding: 1rem;
        span {
            color: #fff;
            font-weight: 400;
            text-transform: uppercase;
            font-size: 1.3rem;
        }
    }
    .viewAll {
        margin: 10rem auto;
    }
`

import styled from "styled-components"

export const BookAdventureStyles = styled.div`
    background-color: #fafafa;
    padding: 5rem 3rem 5rem;
    margin: 0;
    text-align: center;
    position: relative;
    top: -18rem;
    h3 {
        margin: 5rem 0 7rem;
        font-size: 5rem;
        color: #6a6a6a;
        letter-spacing: -0.1rem;
        @media (max-width: 800px) {
            font-size: 3.5rem;
            margin-bottom: 5rem;
            line-height: 4rem;
        }
    }
    p {
        max-width: 70rem;
        text-align: left;
        margin: 1rem auto 3rem;
        font-size: 1.4rem;
        color: #a3a3a3;
        @media (max-width: 800px) {
            font-size: 1.5rem;
        }
    }
    .twoCol {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: -8rem;
        h3 {
            font-size: 4rem;
            text-align: left;
        }
        ul {
            list-style: none;
            text-align: left;
            padding-left: 0;
            li {
                font-size: 1.3rem;
                color: #a3a3a3;
                margin-bottom: 2rem;
                line-height: 1rem;
                img {
                    margin-right: 1.6rem;
                    position: relative;
                    top: 0.3rem;
                }
            }
        }
        .left,
        .right {
            align-self: center;
        }
        .left {
            padding: 0 7rem;
        }
        .right {
            padding: 0 7rem;
            h3 {
                color: #6a6a6a;
            }
        }
        .imageRotate {
            transform: rotate(-3deg);
        }
        .priceContainer {
            text-align: left;
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
        .button {
            text-align: center;
            cursor: pointer;
            position: relative;
            top: -2rem;
            background-color: #2afec5;
            border-radius: 3px;
            width: 12rem;
            padding: 1rem;
            span {
                color: #555;
                font-weight: 400;
                text-transform: uppercase;
                font-size: 1.3rem;
            }
        }
    }
`

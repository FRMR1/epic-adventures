import styled from "styled-components"

export const AdventuresStyles = styled.div`
    margin-bottom: -5rem;
    position: relative;
    top: -20rem;
    padding: 0 3rem;
    @media (max-width: 800px) {
        margin-top: 15rem;
    }
    h3 {
        font-size: 4.5rem;
        text-align: center;
        padding-top: 6rem;
        margin-bottom: 2rem;
        @media (max-width: 800px) {
            font-size: 3.5rem;
            margin-bottom: 7rem;
            line-height: 4rem;
        }
    }
    p {
        text-align: center;
        margin: 0 auto;
        font-size: 1.7rem;
        color: #b2b2b2;
        max-width: 70rem;
        margin-bottom: 7rem;
        @media (max-width: 800px) {
            font-size: 1.5rem;
        }
    }
    @media (max-width: 800px) {
        .reverse {
            flex-direction: column-reverse;
        }
    }
    .adventureSection {
        display: grid;
        margin: 0 auto;
        max-width: 1000px;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 10rem;
        @media (max-width: 800px) {
            display: flex;
            flex-wrap: wrap;
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
            position: relative;
            top: -7rem;
            color: var(--mainColor);
        }
        p {
            position: relative;
            top: -12rem;
            font-size: 1.4rem;
            color: #b2b2b2;
            text-align: left;
            margin-bottom: 0;
        }
        ul {
            list-style: none;
            position: relative;
            top: -10rem;
            padding: 0;
            margin: 0;
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
            /* margin: 0 auto; */
            top: -7rem;
            background-color: var(--mainColor);
            border-radius: 3px;
            width: 12rem;
            padding: 1rem;
            span {
                color: #fff;
                font-weight: 300;
                text-transform: uppercase;
                font-size: 1.3rem;
            }
        }
        .adventuresImage {
            align-items: center;
            width: 100%;
            @media (max-width: 800px) {
                margin-bottom: -10rem;
            }
        }
    }
`

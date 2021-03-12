import styled from "styled-components"

export const ComboSectionStyles = styled.div`
    margin-bottom: 15rem;
    padding: 0 3rem;
    h3 {
        font-size: 4.5rem;
        text-align: center;
        position: relative;
        top: -15rem;
        @media (max-width: 800px) {
            font-size: 3.5rem;
            margin-bottom: 7rem;
            line-height: 4rem;
        }
    }
    p {
        position: relative;
        top: -20rem;
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
        .reverse {
            flex-direction: column-reverse;
        }
    }
    .comboSection {
        display: grid;
        margin: 0 auto;
        max-width: 1000px;
        grid-template-columns: 1fr 1fr;
        position: relative;
        align-items: center;
        top: -10rem;
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
            color: #d0d0d0;
        }
        h4 {
            font-size: 4rem;
            position: relative;
            top: -7rem;
            color: #5c5c5c;
        }
        p {
            position: relative;
            top: -12rem;
            font-size: 1.4rem;
            color: #b2b2b2;
            text-align: left;
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
            background-color: #4a4a4a;
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
        .comboImage {
            align-items: center;
            width: 100%;
        }
    }
`
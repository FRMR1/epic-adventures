import styled from "styled-components"

export const CardSectionStyles = styled.div`
    margin-bottom: 25rem;
    padding: 0 3rem;
    @media (max-width: 800px) {
        margin-top: 15rem;
    }
    h3 {
        font-size: 4.5rem;
        text-align: center;
        position: relative;
        line-height: 4rem;
        margin-bottom: 8rem;
        color: var(--mainColor);
        @media (max-width: 800px) {
            font-size: 4rem;
        }
    }
    p {
        position: relative;
        text-align: center;
        margin: 0 auto;
        font-size: 1.7rem;
        color: #b2b2b2;
        max-width: 70rem;
        @media (max-width: 800px) {
            font-size: 1.4rem;
        }
    }
    .cards {
        .card {
            background-color: #f4f4f4;
            margin: 0 2rem;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
            border-radius: 10px;
            padding-bottom: 3rem;
            min-width: 200px;
            margin-bottom: 3rem;
            @media (max-width: 800px) {
                margin: 0;
            }
            .cardDesc {
                padding: 2rem;
                position: relative;
                top: -12px;
            }
            .cardImage {
                img {
                    border-radius: 10px 10px 0 0;
                    width: 100%;
                }
            }
            h4 {
                font-size: 4rem;
                text-align: center;
                margin: 3rem 0;
                color: #555;
                line-height: 4rem;
            }
            h5 {
                letter-spacing: -0.4rem;
                color: #555;
                font-size: 6rem;
                text-align: center;
                margin: 2rem 0 0;
                font-weight: 800;
                font-family: --apple-system, BlinkMacSystemFont, "Segoe UI",
                    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                    "Helvetica Neue", sans-serif;
                span {
                    font-size: 3rem;
                    font-weight: 800;
                    position: relative;
                    top: -1.8rem;
                    left: -0.5rem;
                }
            }
            .comingSoon {
                font-family: "Futura Bold";
                font-size: 4.2rem;
                letter-spacing: -0.2rem;
                color: var(--secColor);
                margin: 4rem 0 0;
            }
            p {
                top: 0;
                font-size: 1.4rem;
                color: #797979;
                margin-bottom: 4rem;
            }
            ul {
                list-style: none;
                margin: 0;
                padding: 0;
                text-align: center;
                li {
                    font-size: 1.3rem;
                    color: #555;
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
                margin: 0 auto;
                background-color: var(--secColor);
                border-radius: 3px;
                width: 12rem;
                padding: 1rem;
                span {
                    color: #fff;
                    font-weight: 400;
                    text-transform: uppercase;
                    font-size: 1.3rem;
                    font-family: Roboto Mono;
                }
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
        span {
            color: #fff;
            font-weight: 400;
            text-transform: uppercase;
            font-size: 1.3rem;
        }
    }
    .viewAll {
        margin: 5rem auto 0;
    }
`

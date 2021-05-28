import styled from "styled-components"

export const CardSectionStyles = styled.div`
    margin-bottom: 17rem;
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
        display: grid;
        margin: 0 auto;
        max-width: 1000px;
        grid-template-columns: 1fr 1fr 1fr;
        position: relative;
        margin-top: 10rem;
        gap: 7%;
        @media (max-width: 800px) {
            display: flex;
            flex-wrap: wrap;
        }
        .card {
            background-color: #eaeaea;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.07);
            border-radius: 20px;
            padding-bottom: 3rem;
            min-width: 200px;
            margin-bottom: 3rem;
            .cardDesc {
                padding: 2rem;
                position: relative;
                top: -12px;
            }
            .cardImage {
                img {
                    border-radius: 20px 20px 0 0;
                }
            }
            h4 {
                font-size: 4rem;
                text-align: center;
                margin: 3rem 0;
                color: #555;
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
            p {
                top: 0;
                font-size: 1.4rem;
                color: #aaa;
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

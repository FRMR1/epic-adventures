import styled from "styled-components"

export const CardSectionStyles = styled.div`
    margin-bottom: 15rem;
    h3 {
        font-size: 4.5rem;
        text-align: center;
        position: relative;
        top: -15rem;
    }
    p {
        position: relative;
        top: -20rem;
        text-align: center;
        margin: 0 auto;
        font-size: 1.7rem;
        color: #b2b2b2;
        max-width: 70rem;
    }
    .cards {
        display: grid;
        margin: 0 auto;
        max-width: 1000px;
        grid-template-columns: 1fr 1fr 1fr;
        position: relative;
        top: -10rem;
        gap: 10rem;
        .card {
            background-color: #fff;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.07);
            border-radius: 20px;
            height: 900px;
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
            }
            h5 {
                letter-spacing: -0.4rem;
                color: #5c5c5c;
                font-size: 6rem;
                text-align: center;
                margin: 0;
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
                color: #707070;
                margin-bottom: 4rem;
            }
            ul {
                list-style: none;
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
                /* position: relative; */
                margin: 0 auto;
                /* top: -12rem; */
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
        }
    }
`

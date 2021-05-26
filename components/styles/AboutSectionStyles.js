import styled from "styled-components"

export const AboutSectionStyles = styled.div`
    background-color: ${(props) => (props.grey ? "#f3f3f3" : "#fafafa")};
    position: relative;
    top: -16rem;
    padding: 8rem 3rem 0;
    /* margin-bottom: 18rem; */
    @media (max-width: 800px) {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        padding-top: 17rem;
    }
    h3 {
        margin: 0;
        font-size: 5rem;
        color: var(--mainColor);
        letter-spacing: -0.1rem;
        text-align: center;
        @media (max-width: 800px) {
            font-size: 3.5rem;
            margin-bottom: 5rem;
            line-height: 4rem;
            text-align: center;
        }
    }
    p {
        max-width: 70rem;
        margin: 1rem auto;
        font-size: 1.7rem;
        color: #b2b2b2;
        @media (max-width: 800px) {
            font-size: 1.5rem;
        }
    }
    .bold {
        font-weight: 600;
    }
    .small {
        font-size: 1.5rem;
    }
    .big {
        font-size: 2rem;
        text-align: center;
    }
    .twoCol {
        margin-top: 3rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        @media (max-width: 800px) {
            display: flex;
            flex-wrap: wrap;
            text-align: center;
            flex-direction: column-reverse;
        }
        h3 {
            font-size: 4rem;
            text-align: left;
            @media (max-width: 800px) {
                text-align: center;
            }
        }
        ul {
            list-style: none;
            text-align: left;
            padding-left: 0;
            li {
                font-size: 1.5rem;
                color: #7b7b7b;
                margin-bottom: 2rem;
                display: grid;
                grid-template-columns: auto auto;
                line-height: 3.3rem;
                img {
                    margin-right: 1.6rem;
                    position: relative;
                    top: 1rem;
                }
            }
        }
        .left {
            padding: 0 7rem;
        }
        .right {
            padding: 0 7rem;
            @media (max-width: 800px) {
                width: 100%;
            }
            h3 {
                color: #6a6a6a;
            }
        }
        .imageRotate {
            transform: rotate(5deg);
            /* img {
                filter: drop-shadow(30px 10px 4px #4444dd);
            } */
        }

        .left,
        .right {
            align-self: center;
            @media (max-width: 800px) {
                padding: 0;
            }
        }
    }
    .bottomSection {
        margin-bottom: -52rem;
        padding: 12rem 0 30rem;
        @media (max-width: 800px) {
            padding-top: 5rem;
        }
    }
`

import styled from "styled-components"

export const AdventureSectionStyles = styled.div`
    background-color: #fafafa;
    padding: 5rem 3rem 5rem;
    margin: 0;
    margin-bottom: -30rem;
    text-align: center;
    position: relative;
    top: -18rem;
    @media (max-width: 800px) {
        top: -12rem;
    }
    h3 {
        margin: 0;
        font-size: 5rem;
        color: var(--mainColor);
        letter-spacing: -0.1rem;
        @media (max-width: 800px) {
            font-size: 3.5rem;
            margin-bottom: 5rem;
            line-height: 4rem;
        }
    }
    p {
        max-width: 70rem;
        margin: 1rem auto;
        font-size: 1.7rem;
        color: #a3a3a3;
        @media (max-width: 800px) {
            font-size: 1.5rem;
        }
    }
    .twoCol {
        margin-top: 8rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 3rem;
        @media (max-width: 800px) {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column-reverse;
        }
        h3 {
            font-size: 4rem;
            text-align: left;
        }
        ul {
            list-style: none;
            text-align: left;
            padding-left: 0;
            li {
                font-size: 1.5rem;
                color: #a3a3a3;
                margin-bottom: 2rem;
                display: grid;
                grid-template-columns: 25px auto;
                line-height: 4rem;
                img {
                    margin-right: 1.6rem;
                    position: relative;
                    top: 1.3rem;
                }
            }
        }
        .left,
        .right {
            align-self: center;
        }
        .left {
            padding: 0 7rem;
            @media (max-width: 800px) {
                padding: 0;
            }
        }
        .right {
            padding: 0 7rem;
            @media (max-width: 800px) {
                padding: 0;
                width: 100%;
            }
            h3 {
                color: #6a6a6a;
            }
            .imageRotate {
                transform: rotate(5deg);
            }
        }
    }
`

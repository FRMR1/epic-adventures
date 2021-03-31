import styled from "styled-components"

export const LightSectionStyles = styled.div`
    background-color: #f4f4f4;
    padding: 5rem 3rem 5rem;
    margin: 0;
    position: relative;
    top: -18rem;
    h3 {
        margin: 0;
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
        margin: 1rem auto;
        font-size: 1.7rem;
        color: #848484;
        @media (max-width: 800px) {
            font-size: 1.5rem;
        }
    }
    .twoCol {
        display: grid;
        grid-template-columns: 1fr 1fr;
        @media (max-width: 800px) {
            display: flex;
            flex-wrap: wrap;
            text-align: center;
        }
        .left {
            padding: 0 7rem;
            @media (max-width: 800px) {
                padding: 0;
                width: 100%;
            }
        }
        .right {
            padding: 0 7rem;
            align-self: center;
            @media (max-width: 800px) {
                padding: 0;
                width: 100%;
            }
        }
    }
    .center {
        text-align: center;
    }
`

import styled from "styled-components"

export const TestimonialStyles = styled.div`
    margin-bottom: -5rem;
    background-color: var(--mainColor);
    position: relative;
    margin-top: -2rem;
    padding: 10rem 5rem;
    @media (max-width: 800px) {
        margin-top: -1rem;
        margin-bottom: 0rem;
    }
    h2 {
        font-size: 10rem;
        line-height: 9rem;
        color: #2bfec5;
        position: relative;
        margin: 0 0 4rem;
        @media (max-width: 800px) {
            font-size: 3.5rem;
            margin-bottom: 7rem;
            line-height: 4rem;
        }
    }
    p {
        margin: 0 auto;
        text-align: center;
        font-size: 2rem;
        max-width: 20%;
        color: #999;
        max-width: 70rem;
        margin-bottom: 3rem;
        @media (max-width: 800px) {
            font-size: 1.5rem;
        }
    }
    .faceContainer {
        margin: 0 auto;
        width: 2rem;
    }
    .customerName {
        font-size: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 6rem;
        color: #fff;
    }
`

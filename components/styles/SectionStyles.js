import styled from "styled-components"

export const SectionStyles = styled.div`
    background-color: #303030;
    padding: 10rem 3rem 11rem;
    margin: 0;
    position: relative;
    top: -18rem;
    h3 {
        margin: 0;
        font-size: 5rem;
        color: #f0f0f0;
        letter-spacing: -0.1rem;
        text-align: center;
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
        text-align: center;
        @media (max-width: 800px) {
            font-size: 1.5rem;
        }
    }
    .locationLogos {
        margin: 0 auto;
        text-align: center;
        grid-template-columns: auto auto;
        max-width: 350px;
        display: grid;
        gap: 3rem;
        margin-bottom: 4rem;
    }
`

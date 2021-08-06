import styled from "styled-components"

export const SectionStyles = styled.div`
    background-color: var(--mainColor);
    position: relative;
    margin: 0;
    margin-top: -2rem;
    padding: 10rem 3rem 11rem;
    z-index: 5;
    @media (max-width: 800px) {
        margin-top: -1rem;
    }
    h3 {
        margin: 0;
        font-size: 5rem;
        color: var(--secColor);
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
        color: var(--lightGrey);
        text-align: center;
        @media (max-width: 800px) {
            font-size: 1.5rem;
        }
    }
    .locationLogos {
        margin: 0 auto;
        text-align: center;
        /* grid-template-columns: auto auto;
        max-width: 350px;
        display: grid;
        gap: 3rem; */
        margin-bottom: 4rem;
        /* justify-items: center; */
    }
    .author {
        color: var(--secColor);
    }
    .authorYear {
        color: #656565;
        font-size: 1.4rem;
    }
    .quote {
        color: #979797;
    }
    .quote,
    .authorYear {
        font-style: italic;
    }
`

import styled from "styled-components"

export const AdventureHeadingStyles = styled.div`
    background-color: var(--mainColor);
    position: relative;
    margin-bottom: -5rem;
    margin-top: -2rem;
    padding: 10rem 5rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    z-index: 3;
    @media (max-width: 800px) {
        /* display: flex; */
        /* flex-wrap: wrap; */
        display: block;
        margin-top: -1rem;
        padding: 1rem;
    }
    .imageContainer {
        transform: rotate(-7deg);
        width: 100%;
        padding: 5em;
    }
    .pContainer {
        align-self: center;
        padding: 3rem;
        @media (max-width: 800px) {
            position: relative;
            /* top: -5rem; */
            /* margin-bottom: -10rem; */
        }
    }
    h2 {
        font-size: 10rem;
        line-height: 9rem;
        color: var(--secColor);
        position: relative;
        margin: 0 0 4rem;
        @media (max-width: 800px) {
            font-size: 5rem;
            margin-bottom: 7rem;
            line-height: 4rem;
            text-align: center;
            position: relative;
            /* top: -15rem; */
        }
    }
    p {
        margin: 0 auto;
        font-size: 1.7rem;
        max-width: 20%;
        color: #afafaf;
        max-width: 70rem;
        margin-bottom: 10rem;
        @media (max-width: 800px) {
            font-size: 1.5rem;
            text-align: center;
        }
    }
`

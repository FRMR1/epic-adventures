import styled from "styled-components"

export const AdventureHeadingStyles = styled.div`
    margin-bottom: -5rem;
    background-color: var(--purple);
    position: relative;
    top: -18rem;
    padding: 10rem 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 800px) {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 0rem;
        top: -7rem;
    }
    .imageContainer {
        transform: rotate(-7deg);
        width: 100%;
    }
    .pContainer {
        align-self: center;
        @media (max-width: 800px) {
            position: relative;
            top: -5rem;
            margin-bottom: -10rem;
        }
    }
    h2 {
        font-size: 10rem;
        line-height: 9rem;
        color: #2bfec5;
        position: relative;
        margin: 0 0 4rem;
        @media (max-width: 800px) {
            font-size: 5rem;
            margin-bottom: 7rem;
            line-height: 4rem;
            text-align: center;
            position: relative;
            top: -15rem;
        }
    }
    p {
        margin: 0 auto;
        font-size: 1.7rem;
        max-width: 20%;
        color: var(--lightGrey);
        max-width: 70rem;
        margin-bottom: 10rem;
        @media (max-width: 800px) {
            font-size: 1.5rem;
            text-align: center;
        }
    }
`

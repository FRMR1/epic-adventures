import styled from "styled-components"

export const TextSectionStyles = styled.div`
    position: relative;
    padding: 0 3rem;
    top: -10rem;
    margin-bottom: -8rem;
    h3 {
        text-align: center;
        font-size: 5rem;
        margin-bottom: 2rem;
        color: var(--mainColor);
        @media (max-width: 800px) {
            font-size: 3.5rem;
            margin-bottom: 5rem;
            line-height: 4rem;
            text-align: center;
        }
    }
    p {
        text-align: center;
        color: #b2b2b2;
        font-size: 1.7rem;
        max-width: 800px;
        margin: 0 auto;
        @media (max-width: 800px) {
            font-size: 1.5rem;
        }
    }
    .button {
        text-align: center;
        cursor: pointer;
        position: relative;
        margin: 4rem auto 0;
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
`

import styled from "styled-components"

export const ReadyToBookStyles = styled.div`
    position: relative;
    z-index: 1;
    top: 16rem;
    z-index: 5;
    background-color: #fff;
    display: grid;
    grid-template-columns: auto auto;
    border-radius: 30px;
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    padding: 4rem 6rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
    @media (max-width: 800px) {
        display: flex;
        flex-wrap: wrap;
    }
    h4 {
        font-size: 3rem;
        margin: 0;
        padding: 0;
        letter-spacing: -0.1rem;
        line-height: 6rem;
        color: var(--mainColor);
        @media (max-width: 800px) {
            text-align: center;
        }
    }
    p {
        color: #b2b2b2;
        letter-spacing: 0.04rem;
        margin: 0;
        padding: 0;
        @media (max-width: 800px) {
            text-align: center;
        }
    }
    a:hover {
        text-decoration: none;
    }
    .bookNow {
        background-color: var(--secColor);
        color: #fff;
        padding: 1.2rem 3rem;
        justify-self: end;
        align-self: center;
        text-align: center;
        border-radius: 3px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
        font-family: Roboto Mono;
        font-weight: 400;
        text-transform: uppercase;
        cursor: pointer;
        @media (max-width: 800px) {
            margin: 2rem auto 0;
        }
    }
`

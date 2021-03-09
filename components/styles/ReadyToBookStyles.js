import styled from "styled-components"

export const ReadyToBookStyles = styled.div`
    position: relative;
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
    h4 {
        font-size: 3rem;
        margin: 0;
        padding: 0;
        letter-spacing: -2px;
        line-height: 33px;
    }
    p {
        color: #b2b2b2;
        margin: 0;
        padding: 0;
    }
    a:hover {
        text-decoration: none;
    }
    .bookNow {
        background-color: var(--aquaGreen);
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
    }
`

import styled from "styled-components"

export const PhotoPackageStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
    margin: 0 auto -20rem;
    gap: 10rem;
    padding: 0 3rem;
    @media (max-width: 800px) {
        display: flex;
        flex-wrap: wrap;
    }
    h3 {
        font-size: 3.5rem;
        letter-spacing: -1.5px;
        margin: 0;
        color: var(--purple);
        line-height: 4rem;
        margin-bottom: 3rem;
        @media (max-width: 800px) {
            text-align: center;
        }
    }
    p {
        margin: 0 auto;
        font-size: 1.4rem;
        color: #b2b2b2;
        max-width: 70rem;
        @media (max-width: 800px) {
            text-align: center;
        }
    }
    .button {
        text-align: center;
        cursor: pointer;
        position: relative;
        margin-top: 3rem;
        background-color: var(--purple);
        border-radius: 3px;
        width: 12rem;
        padding: 1rem;
        span {
            color: #fff;
            font-weight: 300;
            text-transform: uppercase;
            font-size: 1.3rem;
        }
        @media (max-width: 800px) {
            margin: 3rem auto 0;
        }
    }
    .photoPackageDesc {
        text-align: left;
        position: relative;
        top: -15rem;
        align-self: center;
    }
    .photoPackageImg {
        position: relative;
        width: 100%;
        top: -15rem;
        @media (max-width: 800px) {
            margin-bottom: -10rem;
        }
    }
`

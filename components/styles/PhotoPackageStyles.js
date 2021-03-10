import styled from "styled-components"

export const PhotoPackageStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
    margin: 0 auto -20rem;
    gap: 10rem;
    h3 {
        font-size: 3.5rem;
        letter-spacing: -1.5px;
        margin: 0;
        color: #5c5c5c;
    }
    p {
        margin: 0 auto;
        font-size: 1.4rem;
        color: #b2b2b2;
        max-width: 70rem;
    }
    a {
        font-weight: 400;
        font-size: 1.7rem;
        position: relative;
        top: 2rem;
        color: #6c6c6c;
    }
    .photoPackageDesc {
        text-align: left;
        position: relative;
        top: -15rem;
        align-self: center;
    }
    .photoPackageImg {
        position: relative;
        top: -15rem;
    }
`

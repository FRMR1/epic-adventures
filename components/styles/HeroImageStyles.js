import styled from "styled-components"

export const HeroImageStyles = styled.div`
    background-image: linear-gradient(grey, grey), url("/jpg/bg.jpg");
    background-blend-mode: screen;
    width: 100%;
    min-height: 100vh;
    z-index: -1;
    background-size: cover;
    margin: 0;
    .heroText {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        width: 100%;
    }
    h2 {
        font-family: "Futura";
        text-transform: uppercase;
        text-align: center;
        display: block;
        font-size: 12rem;
    }
    .bg {
        font-size: 17rem;
        opacity: 0.2;
    }
`

import styled from "styled-components"

export const HeroImageStyles = styled.div`
    background-image: linear-gradient(grey, grey);
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
        width: 100%;
    }
    h2 {
        font-family: "Futura Bold";
        text-transform: uppercase;
        text-align: center;
        display: block;
        font-size: 12rem;
        color: #424242;
        @media (max-width: 800px) {
            font-size: 5rem;
        }
    }
    .bg {
        font-size: 14rem;
        opacity: 0.2;
        @media (max-width: 800px) {
            font-size: 6rem;
        }
    }
    .video-responsive {
        overflow: hidden;
        padding-bottom: 56.25%;
        position: relative;
        height: 0;
    }

    .video-responsive iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }
`

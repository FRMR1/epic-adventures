import Head from "next/head"
import styled from "styled-components"

const HeroImage = styled.div`
    background-image: linear-gradient(white, black), url("/jpg/bg.jpg");
    background-blend-mode: saturation;
    width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background-size: cover;
    position: absolute;
    h2 {
        font-family: "Futura";
        text-transform: uppercase;
        font-size: 12rem;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        /* transform: translateY(-50%, -50%); */
    }
`

export default function Home() {
    return (
        <>
            <Head>
                <title>Epic Adventures</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroImage>
                <h2>Live epic.</h2>
            </HeroImage>
        </>
    )
}

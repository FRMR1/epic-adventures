import Head from "next/head"
import styled from "styled-components"

const HeroImage = styled.div`
    background-image: linear-gradient(white, black), url("/jpg/bg.jpg");
    background-blend-mode: saturation;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
    background-size: cover;
    position: absolute;
`

const HeroH2 = styled.h2`
    font-family: "Futura";
    text-transform: uppercase;
    font-size: 12rem;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    /* transform: translateY(-50%, -50%); */
`

export default function Home() {
    return (
        <>
            <Head>
                <title>Epic Adventures</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroImage>
                <HeroH2>Live epic.</HeroH2>
            </HeroImage>
        </>
    )
}

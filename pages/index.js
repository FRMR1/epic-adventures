import Head from "next/head"
import Image from "next/image"
import { HeroImageStyles } from "../components/styles/HeroImageStyles"
import { SectionStyles } from "../components/styles/SectionStyles"

export default function Home() {
    return (
        <>
            <Head>
                <title>Epic Adventures</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroImageStyles>
                <div className="heroText">
                    <h2>Live epic.</h2>
                </div>
                <div className="heroText">
                    <h2 className="bg">Live epic.</h2>
                </div>
            </HeroImageStyles>
            <SectionStyles>
                <Image src="/svg/divider-top.svg" alt="" layout="fill" />
                <h3>MAKE YOUR NEXT ADVENTURE EPIC.</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </SectionStyles>
        </>
    )
}

import Head from "next/head"
import Nav from "../components/Nav"
import { HeroVideoStyles } from "../components/styles/HeroVideoStyles"
import { HeroImageStyles } from "../components/styles/HeroImageStyles"
import MediaQuery from "react-responsive"
import dynamic from "next/dynamic"

const YoutubeEmbed = dynamic(() => import("../components/YoutubeEmbed"), {
    ssr: false,
})

export default function Home() {
    return (
        <>
            <Head>
                <title>Epic Adventures | Banff & Golden</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <MediaQuery minWidth={801}>
                <HeroVideoStyles>
                    <YoutubeEmbed />
                </HeroVideoStyles>
            </MediaQuery>
            <MediaQuery maxWidth={800}>
                <HeroImageStyles>
                    <div className="heroText">
                        <h2>The journey begins summer 2021</h2>
                    </div>
                </HeroImageStyles>
            </MediaQuery>
        </>
    )
}

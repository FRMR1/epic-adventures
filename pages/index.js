import Head from "next/head"
import Nav from "../components/Nav"
import { HeroVideoStyles } from "../components/styles/HeroVideoStyles"
import { HeroImageStyles } from "../components/styles/HeroImageStyles"
import { useMediaQuery } from "react-responsive"
import dynamic from "next/dynamic"

const YoutubeEmbed = dynamic(() => import("../components/YoutubeEmbed"), {
    ssr: false,
})

export default function Home() {
    // Responsive
    const isMobile = useMediaQuery({ query: "(max-width: 800px)" })

    return (
        <>
            <Head>
                <title>Epic Adventures | Banff & Golden</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            {!isMobile && (
                <HeroVideoStyles>
                    <YoutubeEmbed />
                </HeroVideoStyles>
            )}
            {isMobile && (
                <HeroImageStyles>
                    <div className="heroText">
                        <h2>The journey begins summer 2021</h2>
                    </div>
                </HeroImageStyles>
            )}
        </>
    )
}

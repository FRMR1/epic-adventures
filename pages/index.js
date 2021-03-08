import Head from "next/head"
import Image from "next/image"
import { HeroImageStyles } from "../components/styles/HeroImageStyles"
import { SectionStyles } from "../components/styles/SectionStyles"
import { TopDividerStyles } from "../components/styles/TopDividerStyles"
import { BottomDividerStyles } from "../components/styles/BottomDividerStyles"
import { CardSectionStyles } from "../components/styles/CardSectionStyles"
import Card from "../components/Card"

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
            <TopDividerStyles>
                <img src="/svg/divider-top.svg" width="100%" />
            </TopDividerStyles>
            <SectionStyles>
                <h3>MAKE YOUR NEXT ADVENTURE EPIC.</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </SectionStyles>
            <BottomDividerStyles>
                <img src="/svg/divider-bottom.svg" width="100%" />
            </BottomDividerStyles>
            <CardSectionStyles>
                <h3>Experience Epic Adventures</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <div className="cards">
                    <Card
                        title="Rafting"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        bullets={[
                            "Loreum ipsum dolor",
                            "Loreum ipsum dolor",
                            "Loreum ipsum dolor",
                        ]}
                        price="129"
                        slug="rafting"
                    />
                    <Card
                        title="Skydiving"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        bullets={[
                            "Loreum ipsum dolor",
                            "Loreum ipsum dolor",
                            "Loreum ipsum dolor",
                        ]}
                        price="199"
                        slug="skydiving"
                    />
                    <Card
                        title="Swing"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        bullets={[
                            "Loreum ipsum dolor",
                            "Loreum ipsum dolor",
                            "Loreum ipsum dolor",
                        ]}
                        price="99"
                        slug="swing"
                    />
                </div>
            </CardSectionStyles>
        </>
    )
}

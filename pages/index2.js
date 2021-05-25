import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Nav from "../components/Nav"
import Combo from "../components/Combo"
import { HeroVideoStyles } from "../components/styles/HeroVideoStyles"
import { SectionStyles } from "../components/styles/SectionStyles"
import { TopDividerStyles } from "../components/styles/TopDividerStyles"
import { BottomDividerStyles } from "../components/styles/BottomDividerStyles"
import { ReadyToBookStyles } from "../components/styles/ReadyToBookStyles"
import { CardSectionStyles } from "../components/styles/CardSectionStyles"
import { PhotoPackageStyles } from "../components/styles/PhotoPackageStyles"
import { ComboSectionStyles } from "../components/styles/ComboSectionStyles"
import { FooterDividerStyles } from "../components/styles/FooterDividerStyles"
import { useMediaQuery } from "react-responsive"
import Card from "../components/Card"
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
            <HeroVideoStyles>
                <YoutubeEmbed />
                {/* <div className="heroText">
                    <h2>Live epic.</h2>
                </div>
                <div className="heroText">
                    <h2 className="bg">Live epic.</h2>
                </div> */}
            </HeroVideoStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top.svg" width="100%" />
            </TopDividerStyles>
            <SectionStyles>
                <h3>Make your next adventure epic.</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
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
                        title="ATV Off-Road"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        bullets={[
                            "Loreum ipsum dolor",
                            "Loreum ipsum dolor",
                            "Loreum ipsum dolor",
                        ]}
                        price="99"
                        slug="atv"
                    />
                </div>
            </CardSectionStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top2.svg" width="100%" />
            </TopDividerStyles>
            <SectionStyles>
                <div className="locationLogos">
                    <img
                        src="/svg/epicbanff.svg"
                        width={isMobile ? "110" : "150"}
                        alt="Epic Banff"
                    />
                    <img
                        src="/svg/epicgolden.svg"
                        width={isMobile ? "110" : "150"}
                        alt="Epic Golden"
                    />
                </div>
                <h3>Serving Banff and Golden</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                </p>
            </SectionStyles>
            <BottomDividerStyles>
                <img src="/svg/divider-bottom2.svg" width="100%" />
            </BottomDividerStyles>
            <ComboSectionStyles>
                <h3>Epic Combos</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                </p>
                <Combo
                    number="01"
                    title="Epic Golden Pass"
                    description="Lorem ipsum delor, Lorem ipsum delor, Lorem ipsum delor, Lorem ipsum delor"
                    reverse={false}
                    price="656"
                    save=""
                    image="/images/epicsummer.png"
                    bullets={[
                        "Lorem ipsum delor",
                        "Lorem ipsum delor",
                        "Lorem ipsum delor",
                    ]}
                />
                <Combo
                    number="02"
                    title="ATV & Rafting"
                    description="Lorem ipsum delor, Lorem ipsum delor, Lorem ipsum delor, Lorem ipsum delor"
                    reverse={true}
                    price="292"
                    save=""
                    image="/images/epicsummer.png"
                    bullets={[
                        "Lorem ipsum delor",
                        "Lorem ipsum delor",
                        "Lorem ipsum delor",
                    ]}
                />
                <Combo
                    number="03"
                    title="Skydiving & Rafting Express"
                    description="Lorem ipsum delor, Lorem ipsum delor, Lorem ipsum delor, Lorem ipsum delor"
                    reverse={false}
                    price="367"
                    save=""
                    image="/images/epicsummer.png"
                    bullets={[
                        "Lorem ipsum delor",
                        "Lorem ipsum delor",
                        "Lorem ipsum delor",
                    ]}
                />
                <Combo
                    number="04"
                    title="ATV & Skydiving"
                    description="Lorem ipsum delor, Lorem ipsum delor, Lorem ipsum delor, Lorem ipsum delor"
                    reverse={true}
                    price="509"
                    save=""
                    image="/images/epicsummer.png"
                    bullets={[
                        "Lorem ipsum delor",
                        "Lorem ipsum delor",
                        "Lorem ipsum delor",
                    ]}
                />
            </ComboSectionStyles>
            <PhotoPackageStyles>
                <div className="photoPackageImg">
                    <Image
                        src="/images/epicsummer.png"
                        layout="responsive"
                        width="100%"
                        height="auto"
                        objectFit="contain"
                        alt="Epic Summer Pass"
                    />
                </div>
                <div className="photoPackageDesc">
                    <h3>Epic Photo & Video Package</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                    <Link href="#">
                        <div className="button">
                            <span>Learn More</span>
                        </div>
                    </Link>
                </div>
            </PhotoPackageStyles>
            <ReadyToBookStyles>
                <div>
                    <h4>Ready to book?</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
                <a className="bookNow">Book Now</a>
            </ReadyToBookStyles>
            <FooterDividerStyles>
                <img src="/svg/divider-top2.svg" width="100%" />
            </FooterDividerStyles>
        </>
    )
}

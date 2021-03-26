import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Nav from "../components/Nav"
import { HeroImageStyles } from "../components/styles/HeroImageStyles"
import { SectionStyles } from "../components/styles/SectionStyles"
import { TopDividerStyles } from "../components/styles/TopDividerStyles"
import { BottomDividerStyles } from "../components/styles/BottomDividerStyles"
import { ReadyToBookStyles } from "../components/styles/ReadyToBookStyles"
import { CardSectionStyles } from "../components/styles/CardSectionStyles"
import { PhotoPackageStyles } from "../components/styles/PhotoPackageStyles"
import { ComboSectionStyles } from "../components/styles/ComboSectionStyles"
import { FooterDividerStyles } from "../components/styles/FooterDividerStyles"
import Card from "../components/Card"

export default function Home() {
    return (
        <>
            <Head>
                <title>Epic Adventures | Banff & Golden</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
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
                <h3>Make your next adventure epic.</h3>
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
            <TopDividerStyles>
                <img src="/svg/divider-top2.svg" width="100%" />
            </TopDividerStyles>
            <SectionStyles>
                <div className="locationLogos">
                    <img
                        src="/svg/epicbanff.svg"
                        width="150"
                        alt="Epic Banff"
                    />
                    <img
                        src="/svg/epicgolden.svg"
                        width="150"
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
                <div className="comboSection reverse">
                    <div>
                        <span className="number">01</span>
                        <h4>Epic Summer Pass</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet
                            </li>
                        </ul>
                        <Link href="/adventures/combos/epic-summer-pass">
                            <div className="button">
                                <span>More Info</span>
                            </div>
                        </Link>
                    </div>
                    <div className="comboImage">
                        <Image
                            src="/images/epicsummer.png"
                            layout="responsive"
                            width="100%"
                            height="auto"
                            objectFit="contain"
                            alt="Epic Summer Pass"
                        />
                    </div>
                </div>
                <div className="comboSection">
                    <div className="comboImage">
                        <Image
                            src="/images/epicsummer.png"
                            layout="responsive"
                            width="100%"
                            height="auto"
                            objectFit="contain"
                            alt="Epic Summer Pass"
                        />
                    </div>
                    <div>
                        <span className="number">02</span>
                        <h4>Rafting/Skydiving</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet
                            </li>
                        </ul>
                        <Link href="/adventures/combos/rafting-skydiving">
                            <div className="button">
                                <span>More Info</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="comboSection reverse">
                    <div>
                        <span className="number">03</span>
                        <h4>Swing/Rafting</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet
                            </li>
                        </ul>
                        <Link href="/adventures/combos/swing-rafting">
                            <div className="button">
                                <span>More Info</span>
                            </div>
                        </Link>
                    </div>
                    <div className="comboImage">
                        <Image
                            src="/images/epicsummer.png"
                            layout="responsive"
                            width="100%"
                            height="auto"
                            objectFit="contain"
                            alt="Epic Summer Pass"
                        />
                    </div>
                </div>
                <div className="comboSection">
                    <div className="comboImage">
                        <Image
                            src="/images/epicsummer.png"
                            layout="responsive"
                            width="100%"
                            height="auto"
                            objectFit="contain"
                            alt="Epic Summer Pass"
                        />
                    </div>
                    <div>
                        <span className="number">04</span>
                        <h4>Skydiving/Swing</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet
                            </li>
                        </ul>
                        <Link href="/adventures/combos/skydiving-swing">
                            <div className="button">
                                <span>More Info</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </ComboSectionStyles>
            <PhotoPackageStyles>
                <div className="photoPackageImg">
                    <Image
                        src="/images/epicsummer.png"
                        layout="responsive"
                        width="100%"
                        height="auto"
                        objectFit="contain"
                        alt="Epic Photo/Video Package"
                    />
                </div>
                <div className="photoPackageDesc">
                    <h3>Epic Photo/Video Package</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                    <Link href="#">
                        <a>Learn more</a>
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

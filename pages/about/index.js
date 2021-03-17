import Image from "next/image"
import Head from "next/head"
import { HeroImageStyles } from "../../components/styles/HeroImageStyles"
import { LightSectionStyles } from "../../components/styles/LightSectionStyles"
import { TopDividerStyles } from "../../components/styles/TopDividerStyles"
import { ReadyToBookStyles } from "../../components/styles/ReadyToBookStyles"
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles"
import { AboutSectionStyles } from "../../components/styles/AboutSectionStyles"
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles"

const About = () => {
    return (
        <>
            <Head>
                <title>Epic Adventures | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroImageStyles>
                <div className="heroText">
                    <h2>About Epic.</h2>
                </div>
                <div className="heroText">
                    <h2 className="bg">About Epic.</h2>
                </div>
            </HeroImageStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top-light.svg" width="100%" />
            </TopDividerStyles>
            <LightSectionStyles>
                <div className="twoCol">
                    <div className="left">
                        <Image
                            src="/images/epicsummer.png"
                            layout="responsive"
                            width="100%"
                            height="auto"
                            objectFit="contain"
                            alt="Epic Adventures"
                        />
                    </div>
                    <div className="right">
                        <h3>Some cool tagline</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </LightSectionStyles>
            <BottomDividerStyles>
                <img src="/svg/divider-bottom-light.svg" width="100%" />
            </BottomDividerStyles>
            <AboutSectionStyles>
                <h3>Bla bla bla bla.</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <div className="twoCol">
                    <div className="left">
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <Image
                            src="/images/epicsummer.png"
                            layout="responsive"
                            width="100%"
                            height="auto"
                            objectFit="contain"
                            alt="Epic Adventures"
                        />
                    </div>
                </div>
                <h3 className="center">Some cool tagline</h3>
                <p className="center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                </p>
            </AboutSectionStyles>
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

export default About

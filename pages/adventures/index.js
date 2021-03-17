import Head from "next/head"
import Image from "next/image"
import { HeroImageStyles } from "../../components/styles/HeroImageStyles"
import { SectionStyles } from "../../components/styles/SectionStyles"
import { TopDividerStyles } from "../../components/styles/TopDividerStyles"
import { ReadyToBookStyles } from "../../components/styles/ReadyToBookStyles"
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles"
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles"
import { AdventuresStyles } from "../../components/styles/AdventuresStyles"
import { TextSectionStyles } from "../../components/styles/TextSectionStyles"

const Adventures = () => {
    return (
        <>
            <Head>
                <title>Epic Adventures | Adventures</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroImageStyles>
                <div className="heroText">
                    <h2>Adventures.</h2>
                </div>
                <div className="heroText">
                    <h2 className="bg">Adventures.</h2>
                </div>
            </HeroImageStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top-light.svg" width="100%" />
            </TopDividerStyles>
            <AdventuresStyles>
                <h3>Adventures.</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                </p>
                <div className="adventureSection reverse">
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
                        <div className="button">
                            <span>More Info</span>
                        </div>
                    </div>
                    <div className="adventuresImage">
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
                <div className="adventureSection">
                    <div className="adventuresImage">
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
                        <div className="button">
                            <span>More Info</span>
                        </div>
                    </div>
                </div>
                <div className="adventureSection reverse">
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
                        <div className="button">
                            <span>More Info</span>
                        </div>
                    </div>
                    <div className="adventuresImage">
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
                <div className="adventureSection">
                    <div className="adventuresImage">
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
                        <div className="button">
                            <span>More Info</span>
                        </div>
                    </div>
                </div>
            </AdventuresStyles>
            <BottomDividerStyles>
                <img src="/svg/divider-bottom-light.svg" width="100%" />
            </BottomDividerStyles>
            <TextSectionStyles>
                <h3>Do more, pay less.</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                </p>
            </TextSectionStyles>
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

export default Adventures

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { HeroImageStyles } from "../../components/styles/HeroImageStyles"
import { TestimonialStyles } from "../../components/styles/TestimonialStyles"
import { TopDividerStyles } from "../../components/styles/TopDividerStyles"
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles"
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles"
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles"
import { AdventureSectionStyles } from "../../components/styles/AdventureSectionStyles"
import { BookAdventureStyles } from "../../components/styles/BookAdventureStyles"
import { ReadyToBookStyles } from "../../components/styles/ReadyToBookStyles"

const Rafting = () => {
    return (
        <>
            <Head>
                <title>Epic Adventures | Rafting</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroImageStyles image="rafting2">
                <div className="heroText">
                    <h2>Rafting.</h2>
                </div>
                <div className="heroText">
                    <h2 className="bg">Rafting.</h2>
                </div>
            </HeroImageStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top.svg" width="100%" />
            </TopDividerStyles>
            <AdventureHeadingStyles>
                <div className="imageContainer">
                    <Image
                        src="/images/rafting.jpg"
                        layout="responsive"
                        width="100%"
                        height="auto"
                        objectFit="contain"
                        alt="Rafting"
                    />
                </div>
                <div className="pContainer">
                    <h2>Rafting Adventure</h2>
                    <p>
                        Half floating, half big white water in the upper and
                        middle canyons. If you're looking for Rocky Mountain
                        scenery and boat swamping rapids, this is the perfect
                        balance.
                    </p>
                </div>
            </AdventureHeadingStyles>
            <BottomDividerStyles>
                <img src="/svg/divider-bottom.svg" width="100%" />
            </BottomDividerStyles>
            <BookAdventureStyles>
                <h3>Ready to book your adventure?</h3>
                <div className="twoCol">
                    <div className="left">
                        <div className="imageRotate">
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
                    <div className="right">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
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
                        <div className="priceContainer">
                            <span className="dollarSign">$</span>
                            <span className="amount">99</span>
                            <span className="currency">CAD</span>
                        </div>
                        <Link href="/bookings">
                            <div className="button">
                                <span>Book Now</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </BookAdventureStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top.svg" width="100%" />
            </TopDividerStyles>
            <TestimonialStyles>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
                </p>
                <div className="faceContainer">
                    <img src="/svg/face.svg" width="30px" />
                </div>
                <p className="customerName">
                    Satisfied Epic Adventures Customer
                </p>
            </TestimonialStyles>
            <BottomDividerStyles>
                <img src="/svg/divider-bottom.svg" width="100%" />
            </BottomDividerStyles>
            <AdventureSectionStyles>
                <div className="twoCol">
                    <div className="left">
                        <h3>What's Included</h3>
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
                        <div className="imageRotate">
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
                </div>
            </AdventureSectionStyles>
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

export default Rafting

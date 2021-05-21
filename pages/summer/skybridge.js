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
                <title>Epic Adventures | Golden Skybridge</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroImageStyles image="skybridge">
                <div className="heroText">
                    <h2>Golden Skybridge.</h2>
                </div>
                <div className="heroText">
                    <h2 className="bg">Golden Skybridge.</h2>
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
                    <h2>Golden Sky Bridge</h2>
                    <p>
                        As you perch 426 feet above an expansive canyon,
                        engulfed by the Columbia Valley, the epic views from
                        Golden’s newest, must-visit attraction will take your
                        breath away. The Golden Skybridge rewards with views of
                        the Rocky and Purcell mountain ranges like you’ve never
                        seen before, while a crashing river and 200-foot
                        waterfall thunders below.
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
                            Slow down and experience the wonder of this untamed
                            wilderness as you wander along the canyon ridge on
                            our three kilometres of nature trails. As you make
                            your way through the silent forest, stop to enjoy a
                            moment of awe at each of the viewing platforms, Tree
                            top village and refuel at the Village Grill.
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

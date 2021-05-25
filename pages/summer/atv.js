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

const Swing = () => {
    return (
        <>
            <Head>
                <title>Epic Adventures | ATV Off-Road</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroImageStyles image="atv">
                <div className="heroText">
                    <h2>ATV Off-Road</h2>
                </div>
                <div className="heroText">
                    <h2 className="bg">ATV Off-Road.</h2>
                </div>
            </HeroImageStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top.svg" width="100%" />
            </TopDividerStyles>
            <AdventureHeadingStyles>
                <div className="imageContainer">
                    <Image
                        src="/images/atv4.jpg"
                        layout="responsive"
                        width="100%"
                        height="auto"
                        objectFit="contain"
                        alt="ATV Off-Road"
                    />
                </div>
                <div className="pContainer">
                    <h2>ATV Off Road</h2>
                    <p>
                        Venture off the beaten path and experience Golden’s back
                        country up close on your own all-terrain vehicle. Led by
                        a seasoned adventure tour guide, you’ll come across
                        winding rivers and streams, grand expanses of native
                        wildflowers, stunning mountain vistas and the chance to
                        spot local wildlife in their natural environment.
                    </p>
                </div>
            </AdventureHeadingStyles>
            <BottomDividerStyles>
                <img src="/svg/divider-bottom.svg" width="100%" />
            </BottomDividerStyles>
            <BookAdventureStyles>
                <h3>Canadian Off-Road Adventures</h3>
                <div className="twoCol">
                    <div className="left">
                        <div className="imageRotate">
                            <Image
                                src="/images/atv3.jpg"
                                layout="responsive"
                                width="100%"
                                height="auto"
                                objectFit="contain"
                                alt="ATV Off-Road"
                            />
                        </div>
                    </div>
                    <div className="right">
                        <p>
                            Good for adventurous beginners, with single track
                            trails for the more advanced riders. This trip takes
                            you through dense forests and up into the mountains,
                            passing glacier fed streams and oceans of
                            wildflowers mid-season. You may even spot some local
                            wildlife (deer, bear, moose, marmots and more). No
                            prior ATV experience is necessary; guides will cater
                            to each driver and passenger to make a fun and safe
                            backcountry experience for every skill level. Ride
                            as either a driver or a passenger, and expect to be
                            dusty, dirty and happy upon your return.
                        </p>
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Duration: 3 hours (approx.)
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                10AM – 1PM or 2PM – 5PM
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet
                            </li>
                        </ul>
                        <div className="priceContainer">
                            <span className="dollarSign">$</span>
                            <span className="amount">219</span>
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
                    “Had a blast! This trip was so much fun and the views were
                    incredible. The guides are excellent and know their stuff
                    and all the places to take you for the most memorable day.
                    We will be back!”
                </p>
                <div className="faceContainer">
                    <img src="/svg/face.svg" width="30px" />
                </div>
                <p className="customerName">Allison P, August 2020</p>
            </TestimonialStyles>
            <BottomDividerStyles>
                <img src="/svg/divider-bottom.svg" width="100%" />
            </BottomDividerStyles>
            <AdventureSectionStyles>
                <div className="twoCol">
                    <div className="left">
                        <h3>Additional Details</h3>
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Please note that you must bring with you a valid
                                ID and a major credit card.
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Trip durations include shuttle time, gear up and
                                machine orientation.
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Dress for the weather – extra layers and
                                appropriate footwear (no sandals or flip-flops).
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <div className="imageRotate">
                            <Image
                                src="/images/atv2.jpg"
                                layout="responsive"
                                width="100%"
                                height="auto"
                                objectFit="contain"
                                alt="ATV Off-Road"
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

export default Swing

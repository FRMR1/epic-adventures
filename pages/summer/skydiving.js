import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import GoogleMap from "../../components/GoogleMap"
import ReadyToBook from "../../components/ReadyToBook"
import { HeroImageStyles } from "../../components/styles/HeroImageStyles"
import { TestimonialStyles } from "../../components/styles/TestimonialStyles"
import { TopDividerStyles } from "../../components/styles/TopDividerStyles"
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles"
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles"
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles"
import { AdventureSectionStyles } from "../../components/styles/AdventureSectionStyles"
import { BookAdventureStyles } from "../../components/styles/BookAdventureStyles"
import { ReadyToBookStyles } from "../../components/styles/ReadyToBookStyles"

const Skydiving = () => {
    return (
        <>
            <Head>
                <title>Epic Adventures | Skydiving</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroImageStyles image="skydiving">
                <div className="heroText">
                    <h2>Skydiving.</h2>
                </div>
                <div className="heroText">
                    <h2 className="bg">Skydiving.</h2>
                </div>
            </HeroImageStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top.svg" width="100%" />
            </TopDividerStyles>
            <AdventureHeadingStyles>
                <div className="imageContainer">
                    <Image
                        src="/images/skydiving2.JPG"
                        layout="responsive"
                        width="100%"
                        height="auto"
                        objectFit="contain"
                        alt="Skydiving"
                    />
                </div>
                <div className="pContainer">
                    <h2>Skydiving</h2>
                    <p>
                        Experience the thrill of free falling at over 120 MPH
                        and a view of the Rocky Mountains from 10,000 ft! Expect
                        sensory overload as your mind, body and soul fight
                        against every natural self-preserving urge. Fit for
                        anyone with the will to say yes, from the beginner ready
                        to confront their fear to the experienced thrill seeker.
                    </p>
                </div>
            </AdventureHeadingStyles>
            <BottomDividerStyles>
                <img src="/svg/divider-bottom.svg" width="100%" />
            </BottomDividerStyles>
            <BookAdventureStyles>
                <h3>Skydive Extreme Yeti</h3>
                <div className="twoCol">
                    <div className="left">
                        <div className="imageRotate">
                            <Image
                                src="/images/skydiving3.JPG"
                                layout="responsive"
                                width="100%"
                                height="auto"
                                objectFit="contain"
                                alt="Skydiving"
                            />
                        </div>
                    </div>
                    <div className="right">
                        <p>
                            After a 20-minute scenic flight to altitude, you’ll
                            nudge towards the edge of the plane and make the
                            jump with an experienced tandem instructor. Keep
                            your head up, smile at your personal hand cam and
                            take in the stunning surroundings. After an
                            exhilarating freefall, the five-minute canopy ride
                            to earth will give you indescribable 360° views of
                            glacier-capped mountain ranges and intersecting
                            rivers.
                        </p>
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Duration: 2 hours (approx.)
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                9AM, 11AM, 1PM, 3PM, 5PM
                            </li>
                        </ul>
                        <div className="priceContainer">
                            <span className="dollarSign">$</span>
                            <span className="amount">320</span>
                            <span className="currency">CAD</span>
                        </div>
                        <Link href="https://epicadventuregroup.rezdy.com/catalog/433392/skydive">
                            <a target="_blank" rel="noreferrer">
                                <div className="button">
                                    <span>Book Now</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </BookAdventureStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top.svg" width="100%" />
            </TopDividerStyles>
            <TestimonialStyles>
                <p>
                    “I had an incredible time skydiving! I reccommend this to
                    anyone looking to skydive for the first time! It was one of
                    the best life experiences! The staff were very knowledgeable
                    and knew what they were doing! Made us all feel safe.”
                </p>
                <div className="faceContainer">
                    <img src="/svg/face.svg" width="30px" />
                </div>
                <p className="customerName">Juan G, July 2020</p>
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
                                You will be provided with goggles, optional
                                gloves,hat and jumpsuit. Make sure to wear warm
                                layers and flat closed-toed shoes. If you wear
                                glasses, we have goggles that fit over the top.
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Skydiving is a very weather dependent activity
                                and cancellations due to unsuitable weather
                                conditions may occur. Full refunds will be
                                provided if your time slot cannot be
                                rescheduled.
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Must be at least 19 Years old and under 230 lbs.
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <div className="imageRotate">
                            <Image
                                src="/images/skydiving4.JPG"
                                layout="responsive"
                                width="100%"
                                height="auto"
                                objectFit="contain"
                                alt="Skydiving"
                            />
                        </div>
                    </div>
                </div>
            </AdventureSectionStyles>
            <GoogleMap
                location={{ lat: 51.30054, lng: -116.98498 }}
                zoom={15}
            />
            <ReadyToBook />
            <FooterDividerStyles>
                <img src="/svg/divider-top2.svg" width="100%" />
            </FooterDividerStyles>
        </>
    )
}

export default Skydiving

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import GoogleMap from "../../components/GoogleMap"
import SuggestedCombo from "../../components/SuggestedCombo"
import ReadyToBook from "../../components/ReadyToBook"
import { HeroImageStyles } from "../../components/styles/HeroImageStyles"
import { HeroVideoStyles } from "../../components/styles/HeroVideoStyles"
import { TestimonialStyles } from "../../components/styles/TestimonialStyles"
import { TopDividerStyles } from "../../components/styles/TopDividerStyles"
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles"
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles"
import { SuggestedCombosStyles } from "../../components/styles/SuggestedCombosStyles"
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles"
import { AdventureSectionStyles } from "../../components/styles/AdventureSectionStyles"
import { BookAdventureStyles } from "../../components/styles/BookAdventureStyles"
import dynamic from "next/dynamic"

const YoutubeEmbed = dynamic(() => import("../../components/YoutubeEmbed"), {
    ssr: false,
})

const Skydiving = () => {
    return (
        <>
            <Head>
                <title>Epic Adventures | Skydiving</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="heroVideo">
                <HeroVideoStyles>
                    <YoutubeEmbed source="/video/skydive.mp4" />
                </HeroVideoStyles>
            </div>
            <div className="heroImage">
                <HeroImageStyles image="skydiving">
                    <div className="heroText">
                        <h2>Skydiving.</h2>
                    </div>
                </HeroImageStyles>
            </div>
            <TopDividerStyles>
                <img
                    src="/svg/divider-top.svg"
                    width="101%"
                    style={{ marginLeft: "-.1rem" }}
                />
            </TopDividerStyles>
            <AdventureHeadingStyles>
                <div className="imageContainer">
                    <Image
                        src="/images/skydiving2.jpg"
                        layout="responsive"
                        width="100%"
                        height="auto"
                        objectFit="contain"
                        alt="Skydiving"
                    />
                </div>
                <div className="pContainer">
                    <h2>Experience Human Flight</h2>
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
            <BottomDividerStyles marginTop="4.7rem">
                <img
                    src="/svg/divider-bottom.svg"
                    width="101%"
                    style={{ marginLeft: "-.1rem" }}
                />
            </BottomDividerStyles>
            <BookAdventureStyles marginBottom={true}>
                <h3>Tandem Skydive</h3>
                <div className="twoCol">
                    <div className="left">
                        <div className="imageRotate">
                            <Image
                                src="/images/skydiving6.jpg"
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
                    </div>
                </div>
            </BookAdventureStyles>
            <TopDividerStyles>
                <img
                    src="/svg/divider-top.svg"
                    width="101%"
                    style={{ marginLeft: "-.1rem" }}
                />
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
                <p className="customerName">Juan G., July 2020</p>
                <p>
                    “Amazing views, amazing weather, amazing staff. Everybody
                    there went out of their way to make our experience
                    memorable. Couldn't say enough good things. 5 stars”
                </p>
                <div className="faceContainer">
                    <img src="/svg/face.svg" width="30px" />
                </div>
                <p className="customerName">Mikey O., August 2020</p>
            </TestimonialStyles>
            <BottomDividerStyles>
                <img
                    src="/svg/divider-bottom.svg"
                    width="101%"
                    style={{ marginLeft: "-.1rem" }}
                />
            </BottomDividerStyles>
            <AdventureSectionStyles>
                <div className="twoCol">
                    <div className="left">
                        <h3>Additional Details</h3>
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Must be at least 19 Years old and under 230 lbs.
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
                                <span>
                                    Schueduled closures of the Trans-Canada
                                    Highway are planned through the late spring.
                                    Visit{" "}
                                    <a
                                        href="https://drivebc.ca"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        drivebc.ca
                                    </a>{" "}
                                    for more information and for the latest road
                                    reports and conditions.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <div className="imageRotate">
                            <Image
                                src="/images/skydiving5.jpg"
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
            <SuggestedCombosStyles>
                <h3>Suggested Combos</h3>
                <div className="cards">
                    <SuggestedCombo
                        title="Stairway to Heaven"
                        description="Test your nerves with a jump from an airplane from 10,000 ft and enjoy the trails, suspension bridges and treetop village of the NEW Golden Skybridge."
                        bullets={[
                            "Skydiving and Golden Skybridge",
                            "6 hours (approx.)",
                            "Must be 19 years or older",
                        ]}
                        image="combo7"
                        price="348"
                        url="https://epicadventuregroup.rezdy.com/444969/stairway-to-heaven-skydive-golden-skybridge"
                    />
                    <SuggestedCombo
                        title="Top of the World"
                        description="A day above the clouds! A jump from an airplane from 10,000 ft above the beautiful town of Golden, then scale the kicking horse mountain to 7,700 ft for panoramic views you can't forget!"
                        bullets={[
                            "Skydiving and Kicking Horse gondola",
                            "6 hours (approx.)",
                            "Must be 19 years or older",
                        ]}
                        price="360"
                        image="combo8"
                        url="https://epicadventuregroup.rezdy.com/444956/top-of-the-world-skydive-gondola-kicking-horse-resort"
                    />
                    <SuggestedCombo
                        title="Double Trouble"
                        description="Skydive for breakfast and raft the express (half day) trip in the afternoon. This day trip is an adrenaline filled memory, showcasing the best Golden has to offer!"
                        bullets={[
                            "Skydiving and rafting express",
                            "6 hours (approx.)",
                            "Must be 19 years or older",
                        ]}
                        price="396"
                        image="combo6"
                        url="https://epicadventuregroup.rezdy.com/443892/double-trouble-skydive-raft-express-combo"
                    />
                </div>
            </SuggestedCombosStyles>
            <ReadyToBook />
            <FooterDividerStyles>
                <img
                    src="/svg/divider-top2.svg"
                    width="101%"
                    style={{ marginLeft: "-.1rem" }}
                />
            </FooterDividerStyles>
        </>
    )
}

export default Skydiving

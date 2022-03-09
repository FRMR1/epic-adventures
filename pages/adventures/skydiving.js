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
import { CardSectionStyles } from "../../components/styles/CardSectionStyles"
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles"
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles"
import { SuggestedCombosStyles } from "../../components/styles/SuggestedCombosStyles"
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles"
import { AdventureSectionStyles } from "../../components/styles/AdventureSectionStyles"
import { BookAdventureStyles } from "../../components/styles/BookAdventureStyles"
import dynamic from "next/dynamic"
import { MobileVideoStyles } from "../../components/styles/MobileVideoStyles"
import Carousel from "react-multi-carousel"
import Card from "../../components/Card"
import "react-multi-carousel/lib/styles.css"

const CloudflareVideo = dynamic(
    () => import("../../components/CloudflareVideo"),
    {
        ssr: false,
    }
)

const HeroImageSlider = dynamic(
    () => import("../../components/HeroImageSlider"),
    {
        ssr: false,
    }
)

const Skydiving = () => {
    // Cloudflare URL for video
    const videoURL = "225299687d98d673503b19426a2955ef"

    // Responsive breakpoints
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <>
            <Head>
                <title>Epic Adventures | Skydiving</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="heroVideo">
                <HeroVideoStyles>
                    <CloudflareVideo source={videoURL} />
                </HeroVideoStyles>
            </div>
            <HeroImageSlider
                title="Skydiving"
                images={["SKY1", "SKY2", "SKY3", "SKY4"]}
            />
            <TopDividerStyles>
                <img
                    src="/svg/divider-top.svg"
                    width="101%"
                    style={{ marginLeft: "-.1rem" }}
                />
            </TopDividerStyles>
            <AdventureHeadingStyles>
                <div className="imageContainer mobileImage">
                    <img src="/images/logos/extremeyeti.png" />
                </div>
                {/* <div className="mobileVideo">
                    <MobileVideoStyles>
                        <CloudflareVideo source={videoURL} />
                    </MobileVideoStyles>
                </div> */}
                <div className="pContainer">
                    <h2>Skydive the Rockies</h2>
                    <p>
                        Take the challenge and skydive over the Canadian
                        Rockies. This unique and once in a lifetime opportunity
                        to jump over one of the world's most beautiful
                        locations. With Mountain views as far as the eye can
                        see, the flight to altitude is unforgettable. Skydive
                        Extreme Yeti has been offering Skydives over the Rocky
                        Mountains for over 10 years. Operating out of Golden B.C
                        Airport this unforgettable leap of faith is one to take
                        home and tell your friends or bring them with you. The
                        drop zone is located 1.5 hours drive west of the town of
                        Banff and is the closest mountain skydiving in Banff,
                        Jasper, Lake Louise and Canmore.
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

            <CardSectionStyles>
                <div className="cards">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        swipeable={true}
                        draggable={true}
                        containerClass="padding-100-px"
                    >
                        <Card
                            title="Technology"
                            description="Tandem skydiving is a safe activity, but it does have inherent risks. Having the highest quality, well-maintained, and state of the art equipment is essential to the operation."
                            imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/0dd05d22-7277-4179-b81d-e5a424c71300/public"
                        />
                        <Card
                            title="Training"
                            description="Tandem skydiving is easy and accessible to anyone with a sense of adventure. The highly experienced skydive instructors will show you exactly what to do to make your dive safe and enjoyable."
                            imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/8540f0ea-13db-45a9-2682-02fb152b3800/public"
                        />
                        <Card
                            title="Flight"
                            description="Enjoy the ride up, as the airport gets smaller and the mountains become more unbelievable! These views cannot be beat."
                            imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/95a71a3f-6e3e-4451-e396-fecf4c437300/public"
                        />
                        <Card
                            title="Skydive"
                            description="One of the most memorable parts of the experience is when you leave the plane and take on the world. It's a feeling you will never forget, should we go again?"
                            imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/b523b875-ab5f-4259-3c1d-b9751d606500/public"
                        />
                        <Card
                            title="Parachuting"
                            description="And just like that, a parachute opens above your head and everything is quiet. You get time to take in those views, talk about what just happened and descend back to the airport."
                            imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/7ea0cf81-ca22-4524-23d6-a28eba164400/public"
                        />
                        <Card
                            title="Landing"
                            description="The landing is soft and easy, with a couple of practices in the sky, your instructor will safely land you both at the airport."
                            imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/a45c1c16-675c-4e13-a3a5-5cee310af300/public"
                        />
                        <Card
                            title="Safety"
                            description="Customer experience and safety is a number one priority, using state of the art technology, highly experienced instructors and high industry standards, you can have confidence with your skydive."
                            imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/a1bf0929-9986-4c96-df49-538f63d86400/public"
                        />
                        <Card
                            title="Book in Advance"
                            description="Slots fill fast as this experience is extremely popular, be sure to get your spot."
                            imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/61423076-b46e-4905-23f4-6e59dc961300/public"
                        />
                        <Card
                            title="Waiver Forms"
                            description="Download and read waiver forms before your trip."
                            imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e1ed9771-4ab4-4689-8257-3390a94ced00/public"
                        />
                    </Carousel>
                </div>
            </CardSectionStyles>

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

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import ReadyToBook from "../../components/ReadyToBook"
import SuggestedCombo from "../../components/SuggestedCombo"
import GoogleMap from "../../components/GoogleMap"
import Divider from "../../components/Divider"
import Divider2 from "../../components/Divider2"
import { HeroImageStyles } from "../../components/styles/HeroImageStyles"
import { TestimonialStyles } from "../../components/styles/TestimonialStyles"
import { TopDividerStyles } from "../../components/styles/TopDividerStyles"
import { SuggestedCombosStyles } from "../../components/styles/SuggestedCombosStyles"
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles"
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles"
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles"
import { AdventureSectionStyles } from "../../components/styles/AdventureSectionStyles"
import { BookAdventureStyles } from "../../components/styles/BookAdventureStyles"
import { HeroVideoStyles } from "../../components/styles/HeroVideoStyles"
import { HeroImageSlider } from "../../components/HeroImageSlider"
import { MobileVideoStyles } from "../../components/styles/MobileVideoStyles"
import dynamic from "next/dynamic"

const YoutubeEmbed = dynamic(() => import("../components/YoutubeEmbed"), {
    ssr: false,
})

const Rafting = () => {
    // Cloudinary video URL
    const videoURL =
        "https://res.cloudinary.com/epicadventuregroup-com/video/upload/v1628277188/EPIC-RAFTING-AD_lm8wbm.mp4"

    return (
        <div>
            <Head>
                <title>Epic Adventures | Rafting</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="heroVideo">
                <HeroVideoStyles>
                    <YoutubeEmbed source={videoURL} />
                </HeroVideoStyles>
            </div>
            <HeroImageSlider
                title="Rafting"
                images={["RAFT1", "RAFT2", "RAFT3", "RAFT4"]}
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
                    <Image
                        src="/images/rafting3.jpg"
                        layout="responsive"
                        width="100%"
                        height="auto"
                        objectFit="contain"
                        alt="Rafting"
                    />
                </div>
                <div className="mobileVideo">
                    <MobileVideoStyles>
                        <YoutubeEmbed source={videoURL} />
                    </MobileVideoStyles>
                </div>
                <div className="pContainer">
                    <h2>Kicking Horse River</h2>
                    <p>
                        Rafting on the mighty Kicking Horse River, Western
                        Canada’s best rafting day trip is an experience you
                        can’t miss. This Canadian classic will take you down
                        exhilarating rapids through unforgettable scenery and
                        gives you the chance to spot local wildlife as you
                        travel down the Kicking Horse. Enjoy nature’s highway in
                        a raft! With rapids like Shotgun Rapids, Roller Coaster
                        & Man Eater, your raft guide will teach you everything
                        you need to know to get you and your team down the river
                        safely and with all the laughs.
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
            <BookAdventureStyles grey={false}>
                <h3>White Water Discovery</h3>
                <div className="twoCol">
                    <div className="left">
                        <div className="imageRotate">
                            <Image
                                src="/images/rafting6.jpg"
                                layout="responsive"
                                width="100%"
                                height="auto"
                                objectFit="contain"
                                alt="Rafting"
                            />
                        </div>
                    </div>
                    <div className="right">
                        <p>
                            The Discovery trip takes you on a full-day journey
                            from the calm upper canyon in the morning into big
                            crashing whitewater in the middle canyon. Accessible
                            and fun for the whole family, this popular trip
                            includes a riverside BBQ lunch of juicy burgers and
                            sizzling smokies – with options for veggie and GF
                            rafters too.
                        </p>
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Duration: 5 hours (approx.)
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                9AM – 2PM
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lunch included
                            </li>
                        </ul>
                        <div className="priceContainer">
                            <span className="dollarSign">$</span>
                            <span className="amount">159</span>
                            <span className="currency">CAD</span>
                        </div>
                        <Link href="https://epicadventuregroup.rezdy.com/catalog/433391/rafting">
                            <a target="_blank" rel="noreferrer">
                                <div className="button">
                                    <span>Book Now</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </BookAdventureStyles>
            <BookAdventureStyles
                grey={true}
                paddingTop={true}
                marginBottom={true}
            >
                <Divider />
                <h3>White Water Express</h3>
                <div className="twoCol">
                    <div className="left">
                        <div className="imageRotate">
                            <Image
                                src="/images/rafting7.jpg"
                                layout="responsive"
                                width="100%"
                                height="auto"
                                objectFit="contain"
                                alt="Rafting"
                            />
                        </div>
                    </div>
                    <div className="right">
                        <p>
                            Skip the easy waters and get right to it with an
                            exhilarating half-day of whitewater rapids. The
                            Express is a quick fix of excitement down the most
                            lively stretch of the Kicking Horse river and the
                            perfect option if you are just passing through or
                            want to fit in more adventures before day’s end.
                        </p>
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Duration: 3 hours (approx.)
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                11AM – 2PM or 3:30PM – 6:15PM
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lunch not included
                            </li>
                        </ul>
                        <div className="priceContainer">
                            <span className="dollarSign">$</span>
                            <span className="amount">99</span>
                            <span className="currency">CAD</span>
                        </div>
                        <Link href="https://epicadventuregroup.rezdy.com/catalog/433391/rafting">
                            <a target="_blank" rel="noreferrer">
                                <div className="button">
                                    <span>Book Now</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <Divider2 />
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
                    “The guides were so knowledgeable and fun. The views were
                    fantastic. The whole experience was a blast. Being on the
                    water was thrilling and safe. It was one of the highlights
                    of our trip to the Canadian Rockies.”
                </p>
                <div className="faceContainer">
                    <img src="/svg/face.svg" width="30px" />
                </div>
                <p className="customerName">Braeden, August 2020</p>
                <p>
                    “Guides were so knowledgeable and fun. Views were fantastic.
                    Whole experience was a blast. Being on the water was
                    thrilling and safe. It was one of the highlights of our trip
                    to the Canadian Rockies.”
                </p>
                <div className="faceContainer">
                    <img src="/svg/face.svg" width="30px" />
                </div>
                <p className="customerName">David, September 2020</p>
            </TestimonialStyles>
            <BottomDividerStyles marginTopMobile="0rem" marginTop="5rem">
                <img
                    src="/svg/divider-bottom.svg"
                    width="101%"
                    style={{ marginLeft: "-.1rem" }}
                />
            </BottomDividerStyles>
            <AdventureSectionStyles grey={false}>
                <div className="twoCol">
                    <div className="left">
                        <h3>Additional Details</h3>
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                No experience required. Our guides will let you
                                know exactly what to do!
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Must be at least 12 years old and at least 90
                                lbs.
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
                                src="/images/rafting2.jpg"
                                layout="responsive"
                                width="100%"
                                height="auto"
                                objectFit="contain"
                                alt="Rafting"
                            />
                        </div>
                    </div>
                </div>
            </AdventureSectionStyles>
            <GoogleMap
                location={{ lat: 51.30307, lng: -116.94781 }}
                zoom={15}
            />
            <SuggestedCombosStyles>
                <h3>Suggested Combos</h3>
                <div className="cards">
                    <SuggestedCombo
                        title="Don't Tell Mom!"
                        description="Raft the Kicking Horse River and experience nature's highway with white knuckle fun with provided lunch: it's a Golden classic. Then finish the day experiencing human flight and a jump above the clouds at 10,000 ft above the town of Golden."
                        bullets={[
                            "Rafting and skydiving",
                            "Duration: full day",
                            "Must be 19 years or older",
                        ]}
                        image="combo9"
                        price="445"
                        url="https://epicadventuregroup.rezdy.com/444202/dont-tell-mom-raft-full-day-skydive-combo"
                    />
                    <SuggestedCombo
                        title="Mud Express"
                        description="Looking for an alternative way to travel? Take a morning ride through the mountains on an ATV, then take a trip on nature's highway on the Kicking Horse River half-day trip!"
                        bullets={[
                            "Rafting express and ATV off-road",
                            "8 hours (approx.)",
                            "Must be 12 years or older",
                        ]}
                        price="292"
                        image="combo2"
                        url="https://epicadventuregroup.rezdy.com/443893/mud-express-atv-raft-express-combo"
                    />
                    <SuggestedCombo
                        title="Espresso"
                        description="Get wet and scale the clouds. Raft Western Canada's epic Kicking Horse River, exhilarating rapids, river views and a gondola ride to 7,700 ft for panoramic views you won't forget."
                        bullets={[
                            "Rafting and Kicking Horse gondola",
                            "6 hours (approx.)",
                            "Must be 12 years or older",
                        ]}
                        price="141"
                        image="combo10"
                        url="https://epicadventuregroup.rezdy.com/444960/espresso-raft-express-gondola-kicking-horse-resort"
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
        </div>
    )
}

export default Rafting

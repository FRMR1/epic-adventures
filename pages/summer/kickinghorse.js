import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import SuggestedCombo from "../../components/SuggestedCombo"
import GoogleMap from "../../components/GoogleMap"
import Divider from "../../components/Divider"
import Divider2 from "../../components/Divider2"
import ReadyToBook from "../../components/ReadyToBook"
import { TestimonialStyles } from "../../components/styles/TestimonialStyles"
import { TopDividerStyles } from "../../components/styles/TopDividerStyles"
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles"
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles"
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles"
import { SuggestedCombosStyles } from "../../components/styles/SuggestedCombosStyles"
import { AdventureSectionStyles } from "../../components/styles/AdventureSectionStyles"
import { BookAdventureStyles } from "../../components/styles/BookAdventureStyles"
import { HeroImageSlider } from "../../components/HeroImageSlider"

const KickingHorse = () => {
    return (
        <>
            <Head>
                <title>Epic Adventures | Kicking Horse Resort</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroImageSlider
                title="Kicking Horse Resort"
                images={["KHR1", "KHR2", "KHR3", "KHR4"]}
                needsVideo={true}
            />
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
                        src="/images/kickinghorse2.jpg"
                        layout="responsive"
                        width="100%"
                        height="auto"
                        objectFit="contain"
                        alt="Kicking Horse Resort"
                    />
                </div>
                <div className="pContainer">
                    <h2>Mountain Magic</h2>
                    <p>
                        The Golden Eagle Express Gondola takes you on a climb to
                        a ridge overlooking 3 mountain ranges. You’ll spot
                        wildlife and may even get a glimpse of Kicking Horse
                        Mountain Resort’s resident grizzly bear! Once at the
                        summit, you can explore the many ridges and bowls by
                        foot providing stunning views of the surrounding Purcell
                        and Rocky Mountains. If your feeling the need for speed,
                        try your skills on some of Canada's most spectacular
                        downhill tracks operated by the resort.
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
            <BookAdventureStyles>
                <h3>Golden Eagle Express Gondola</h3>
                <div className="twoCol">
                    <div className="left">
                        <div className="imageRotate">
                            <Image
                                src="/images/kickinghorse3.jpg"
                                layout="responsive"
                                width="100%"
                                height="auto"
                                objectFit="contain"
                                alt="Kicking Horse Resort"
                            />
                        </div>
                    </div>
                    <div className="right">
                        <p>
                            Take a trip above the clouds as you ascend to 7,700
                            feet. Take in panoramic views of the Rocky
                            Mountains, the Columbia River Wetlands and the town
                            of Golden.
                        </p>
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Listed price is for adult ticket
                            </li>
                        </ul>
                        <div className="priceContainer">
                            <span className="dollarSign">$</span>
                            <span className="amount">46</span>
                            <span className="currency">CAD</span>
                        </div>
                        <Link href="https://epicadventuregroup.rezdy.com/catalog/433726/kicking-horse-mountain">
                            <a target="_blank" rel="noreferrer">
                                <div className="button">
                                    <span>Book Now</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </BookAdventureStyles>
            <BookAdventureStyles grey={true}>
                <Divider />
                <h3>Adventure Pass</h3>
                <div className="twoCol">
                    <div className="left">
                        <div className="imageRotate">
                            <Image
                                src="/images/kickinghorse6.jpg"
                                layout="responsive"
                                width="100%"
                                height="auto"
                                objectFit="contain"
                                alt="Kicking Horse Resort"
                            />
                        </div>
                    </div>
                    <div className="right">
                        <p>
                            Get a guided tour to the home of local celebrity Boo
                            the Bear at his Grizzly Bear Refuge and scale the
                            mountain on the Golden Eagle Express Gondola for
                            Epic views of the columbia wetland, the town of
                            Golden and surrounding Rocky Mountains.
                        </p>
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Listed price is for adult ticket
                            </li>
                        </ul>
                        <div className="priceContainer">
                            <span className="dollarSign">$</span>
                            <span className="amount">51</span>
                            <span className="currency">CAD</span>
                        </div>
                        <Link href="https://epicadventuregroup.rezdy.com/catalog/433726/kicking-horse-mountain">
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
            <BookAdventureStyles marginBottom={true}>
                <h3>Mountain Bike Pass</h3>
                <div className="twoCol">
                    <div className="left">
                        <div className="imageRotate">
                            <Image
                                src="/images/kickinghorse5.jpg"
                                layout="responsive"
                                width="100%"
                                height="auto"
                                objectFit="contain"
                                alt="Kicking Horse Resort"
                            />
                        </div>
                    </div>
                    <div className="right">
                        <p>
                            Take on the Rocky Mountains and bike some of
                            Canada's most epic trails! This mountain caters for
                            all riders, includes Golden Eagle Gondola and
                            Catamount Chair. Optional bike and gear rental can
                            be arranged on site.
                        </p>
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Listed price is for adult ticket
                            </li>
                        </ul>
                        <div className="priceContainer">
                            <span className="dollarSign">$</span>
                            <span className="amount">62</span>
                            <span className="currency">CAD</span>
                        </div>
                        <Link href="https://epicadventuregroup.rezdy.com/catalog/433726/kicking-horse-mountain">
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
                <img
                    src="/svg/divider-top.svg"
                    width="101%"
                    style={{ marginLeft: "-.1rem" }}
                />
            </TopDividerStyles>
            <TestimonialStyles>
                <p>
                    “Gondola ride up the mountain was amazing! We got to see Boo
                    the bear. Views were incredible. Staff is amazing. Highly
                    recommend doing this while in Golden.”
                </p>
                <div className="faceContainer">
                    <img src="/svg/face.svg" width="30px" />
                </div>
                <p className="customerName">Becky, June 2020</p>
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
                                src="/images/kickinghorse4.jpg"
                                layout="responsive"
                                width="100%"
                                height="auto"
                                objectFit="contain"
                                alt="Golden Skybridge"
                            />
                        </div>
                    </div>
                </div>
            </AdventureSectionStyles>
            <GoogleMap
                location={{ lat: 51.299869537353516, lng: -117.05529022216797 }}
                zoom={15}
                negMargin={true}
            />
            <SuggestedCombosStyles>
                <h3>Suggested Combos</h3>
                <div className="cards">
                    <SuggestedCombo
                        title="Top of the World"
                        description="A day above the clouds! A jump from an airplane from 10,000 ft above the beautiful town of Golden, then scale the kicking horse mountain to 7,700 ft for panoramic views you can't forget!"
                        bullets={[
                            "Skydiving and Kicking Horse gondola",
                            "6 hours (approx.)",
                            "Must be 19 years or older",
                        ]}
                        price="351"
                        image="combo8"
                        url="https://epicadventuregroup.rezdy.com/444956/top-of-the-world-skydive-gondola-kicking-horse-resort"
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
                    <SuggestedCombo
                        title="Mountaineer"
                        description="Off-road ATV through the stunning Rocky Mountains with river crossings, dense mountain forests and maybe even encounter the local wildlife, then scale the clouds with a gondola ride to 7,700 ft for panoramic views you can't forget."
                        bullets={[
                            "ATV off-road and Kicking Horse gondola",
                            "6 hours (approx.)",
                            "Must be 13 years or older",
                        ]}
                        price="250"
                        image="combo4"
                        url="https://epicadventuregroup.rezdy.com/444963/the-mountaineer-atv-gondola-kicking-horse-resort"
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

export default KickingHorse

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import SuggestedCombo from "../../components/SuggestedCombo"
import GoogleMap from "../../components/GoogleMap"
import Divider from "../../components/Divider"
import Divider2 from "../../components/Divider2"
import ReadyToBook from "../../components/ReadyToBook"
import { HeroImageStyles } from "../../components/styles/HeroImageStyles"
import { TestimonialStyles } from "../../components/styles/TestimonialStyles"
import { TopDividerStyles } from "../../components/styles/TopDividerStyles"
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles"
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles"
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles"
import { SuggestedCombosStyles } from "../../components/styles/SuggestedCombosStyles"
import { AdventureSectionStyles } from "../../components/styles/AdventureSectionStyles"
import { BookAdventureStyles } from "../../components/styles/BookAdventureStyles"
import { ReadyToBookStyles } from "../../components/styles/ReadyToBookStyles"

const Rafting = () => {
    return (
        <>
            <Head>
                <title>Epic Adventures | Kicking Horse Resort</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroImageStyles image="kickinghorse">
                <div className="heroText">
                    <h2>Kicking Horse Resort.</h2>
                </div>
            </HeroImageStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top.svg" width="100%" />
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
                    <h2>Kicking Horse Resort</h2>
                    <p>
                        Take a trip above the clouds as you ascend to 7,700
                        feet. Take in panoramic views of the Rocky Mountains,
                        the Columbia River Wetlands and the town of Golden.
                        During the journey, spot wildlife and even a glimpse of
                        Kicking Horse Mountain Resorts resident grizzly bear!
                    </p>
                </div>
            </AdventureHeadingStyles>
            <BottomDividerStyles>
                <img src="/svg/divider-bottom.svg" width="100%" />
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
                        <Link href="/bookings">
                            <div className="button">
                                <span>Book Now</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </BookAdventureStyles>
            <BookAdventureStyles grey={true}>
                <Divider />
                <h3>Avdventure Pass</h3>
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
                            Take a trip above the clouds as you ascend to 7,700
                            feet take in panoramic views of the Rocky Mountains,
                            the Columbia River Wetlands and get a guided tour to
                            the home of local celebrity Boo the Bear at his
                            Grizzly Bear Refuge.
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
                        <Link href="/bookings">
                            <div className="button">
                                <span>Book Now</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <Divider2 />
            </BookAdventureStyles>
            <BookAdventureStyles>
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
                            Take in panoramic views of the Rocky Mountains and
                            bike some of Canada&#39;s most Epic trails! This
                            mountain caters for all riders. Optional Bike and
                            Gear Rental can be arranged on site.
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
                                src="/images/kickinghorse4.jpg"
                                layout="responsive"
                                width="100%"
                                height="auto"
                                objectFit="contain"
                                alt="Kicking Horse Resort"
                            />
                        </div>
                    </div>
                </div>
            </AdventureSectionStyles>
            <GoogleMap
                location={{ lat: 51.299869537353516, lng: -117.05529022216797 }}
                zoom={15}
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
                <img src="/svg/divider-top2.svg" width="100%" />
            </FooterDividerStyles>
        </>
    )
}

export default Rafting

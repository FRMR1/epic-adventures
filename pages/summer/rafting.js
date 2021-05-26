import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import ReadyToBook from "../../components/ReadyToBook"
import SuggestedCombo from "../../components/SuggestedCombo"
import GoogleMap from "../../components/GoogleMap"
import { HeroImageStyles } from "../../components/styles/HeroImageStyles"
import { TestimonialStyles } from "../../components/styles/TestimonialStyles"
import { TopDividerStyles } from "../../components/styles/TopDividerStyles"
import { SuggestedCombosStyles } from "../../components/styles/SuggestedCombosStyles"
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles"
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles"
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles"
import { AdventureSectionStyles } from "../../components/styles/AdventureSectionStyles"
import { BookAdventureStyles } from "../../components/styles/BookAdventureStyles"

const Rafting = () => {
    return (
        <div>
            <Head>
                <title>Epic Adventures | Rafting</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroImageStyles image="rafting">
                <div className="heroText">
                    <h2>Rafting.</h2>
                </div>
            </HeroImageStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top.svg" width="100%" />
            </TopDividerStyles>
            <AdventureHeadingStyles>
                <div className="imageContainer">
                    <Image
                        src="/images/rafting3.jpg"
                        layout="responsive"
                        width="100%"
                        height="auto"
                        objectFit="contain"
                        alt="Rafting"
                    />
                </div>
                <div className="pContainer">
                    <h2>Rafting</h2>
                    <p>
                        Rafting on the mighty Kicking Horse River, Western
                        Canada’s best rafting day trip is an experience you
                        can’t miss. This Canadian classic will take you down
                        exhilarating rapids through unforgettable scenery and
                        gives you the chance to spot local wildlife as you
                        travel down the Kicking Horse.
                    </p>
                </div>
            </AdventureHeadingStyles>
            <BottomDividerStyles>
                <img src="/svg/divider-bottom.svg" width="100%" />
            </BottomDividerStyles>
            <BookAdventureStyles>
                <h3>White Water Discovery</h3>
                <div className="twoCol">
                    <div className="left">
                        <div className="imageRotate">
                            <Image
                                src="/images/rafting4.jpg"
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
            <BookAdventureStyles>
                <h3>White Water Express</h3>
                <div className="twoCol">
                    <div className="left">
                        <div className="imageRotate">
                            <Image
                                src="/images/rafting4.jpg"
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
            </BookAdventureStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top.svg" width="100%" />
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
                                No experience required. Our guides will let you
                                know exactly what to do!
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                <span>
                                    Please make sure to bring facemask/covering,
                                    swimsuit and towel.
                                </span>
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Must be at least 12 years old and at least 90
                                lbs.
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
                <img src="/svg/divider-top2.svg" width="100%" />
            </FooterDividerStyles>
        </div>
    )
}

export default Rafting

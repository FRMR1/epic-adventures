import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import SuggestedCombo from "../../components/SuggestedCombo"
import GoogleMap from "../../components/GoogleMap"
import ReadyToBook from "../../components/ReadyToBook"
import { HeroImageStyles } from "../../components/styles/HeroImageStyles"
import { TestimonialStyles } from "../../components/styles/TestimonialStyles"
import { TopDividerStyles } from "../../components/styles/TopDividerStyles"
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles"
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles"
import { SuggestedCombosStyles } from "../../components/styles/SuggestedCombosStyles"
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
            </HeroImageStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top.svg" width="100%" />
            </TopDividerStyles>
            <AdventureHeadingStyles>
                <div className="imageContainer">
                    <Image
                        src="/images/skybridge2.jpg"
                        layout="responsive"
                        width="100%"
                        height="auto"
                        objectFit="contain"
                        alt="Golden Skybridge"
                    />
                </div>
                <div className="pContainer">
                    <h2>Epicly Golden</h2>
                    <p>
                        Golden’s newest, must-visit attraction includes a
                        Treetop Village play park for families, an outdoor BBQ
                        and entertainment plaza at the Village Grill, trails and
                        viewing platforms throughout the park and two of
                        Canada's highest suspension bridges. This experience is
                        as Golden as it gets and will be home to a bungee swing
                        and ziplines across the canyon coming soon!
                    </p>
                </div>
            </AdventureHeadingStyles>
            <BottomDividerStyles>
                <img src="/svg/divider-bottom.svg" width="100%" />
            </BottomDividerStyles>
            <BookAdventureStyles>
                <h3>Golden Skybridge</h3>
                <div className="twoCol">
                    <div className="left">
                        <div className="imageRotate">
                            <Image
                                src="/images/skybridge3.jpg"
                                layout="responsive"
                                width="100%"
                                height="auto"
                                objectFit="contain"
                                alt="Golden Skybridge"
                            />
                        </div>
                    </div>
                    <div className="right">
                        <p>
                            Take in the Columbia Valley at 426’ from two of
                            Canada’s highest suspension bridges while a crashing
                            river and 200-foot waterfall thunder in the
                            expansive canyon below your feet. The epic views
                            will take your breath away with sights of the Rocky
                            and Purcell mountain ranges like you’ve never seen
                            before. Wander the canyon ridge on three kilometres
                            of nature trails through silent forest and untamed
                            wilderness and take a moment to breathe and enjoy
                            the stillness at each of the viewing platforms.
                        </p>
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Listed price is for adult ticket
                            </li>
                        </ul>
                        <div className="priceContainer">
                            <span className="dollarSign">$</span>
                            <span className="amount">37</span>
                            <span className="currency">CAD</span>
                        </div>
                        <Link href="https://epicadventuregroup.rezdy.com/catalog/434371/golden-skybridge">
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
                    "The Golden Skybridge will soon become an iconic experience
                    for Canadian and international visitors alike."
                </p>
                <div className="faceContainer">
                    <img src="/svg/face.svg" width="30px" />
                </div>
                <p className="customerName">Andrea Smith — Lonely Planet</p>
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
                                June – September: 9AM – 9PM
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                September – October: 10AM – 6PM
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
                                src="/images/skybridge4.jpg"
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
                location={{ lat: 51.469390869140625, lng: -117.10696411132812 }}
                zoom={15}
            />
            <SuggestedCombosStyles>
                <h3>Suggested Combos</h3>
                <div className="cards">
                    <SuggestedCombo
                        title="Ridge Rider"
                        description="Off-road ATV through the stunning Rocky Mountains with river crossings, dense mountain forests and maybe even encounter the local wildlife. Then head over to Golden's newest adventure with trails, suspension bridges and treetop village."
                        bullets={[
                            "ATV off-road and Golden Skybridge",
                            "6 hours (approx.)",
                            "Must be 6 years or older",
                        ]}
                        image="combo5"
                        price="242"
                        url="https://epicadventuregroup.rezdy.com/444981/ridge-rider-atv-golden-skybridge"
                    />
                    <SuggestedCombo
                        title="Stairway to Heaven"
                        description="Test your nerves with a jump from an airplane from 10,000 ft and enjoy the trails, suspension bridges and treetop village of the NEW Golden Skybridge."
                        bullets={[
                            "Skydiving and Golden Skybridge",
                            "6 hours (approx.)",
                            "Must be 19 years or older",
                        ]}
                        image="combo7"
                        price="342"
                        url="https://epicadventuregroup.rezdy.com/444969/stairway-to-heaven-skydive-golden-skybridge"
                    />
                    <SuggestedCombo
                        title="Canyon Fever"
                        description="Raft Western Canada's epic Kicking Horse River, exhilarating rapids, river views and provided lunch. Then head over to the Golden's newest adventure with trails, suspension bridges and a treetop village."
                        bullets={[
                            "Rafting and Golden Skybridge",
                            "6 hours (approx.)",
                            "Must be 12 years or older",
                        ]}
                        price="182"
                        image="combo11"
                        url="https://epicadventuregroup.rezdy.com/444975/canyon-fever-raft-full-day-golden-skybridge"
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

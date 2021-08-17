import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Nav from "../components/Nav"
import Combo from "../components/Combo"
import ReadyToBook from "../components/ReadyToBook"
import { HeroVideoStyles } from "../components/styles/HeroVideoStyles"
import { HeroImageStyles } from "../components/styles/HeroImageStyles"
import { SectionStyles } from "../components/styles/SectionStyles"
import { TopDividerStyles } from "../components/styles/TopDividerStyles"
import { BottomDividerStyles } from "../components/styles/BottomDividerStyles"
import { ReadyToBookStyles } from "../components/styles/ReadyToBookStyles"
import { CardSectionStyles } from "../components/styles/CardSectionStyles"
import { PhotoPackageStyles } from "../components/styles/PhotoPackageStyles"
import { ComboSectionStyles } from "../components/styles/ComboSectionStyles"
import { FooterDividerStyles } from "../components/styles/FooterDividerStyles"
import { useMediaQuery } from "react-responsive"
import Card from "../components/Card"
import dynamic from "next/dynamic"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
// import HeroImageSlider from "../components/HeroImageSlider"

const CloudflareVideo = dynamic(() => import("../components/CloudflareVideo"), {
    ssr: false,
})

const HeroImageSlider = dynamic(() => import("../components/HeroImageSlider"), {
    ssr: false,
})

export default function Home() {
    // Responsive
    const isMobile = useMediaQuery({ query: "(max-width: 800px)" })

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
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

    // Cloud flarevideo URL
    const videoURL = "0e546742a408011586e2c14b6c67d5df"

    return (
        <>
            <Head>
                <title>Epic Adventures | Banff & Golden</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="heroVideo">
                <HeroVideoStyles>
                    <CloudflareVideo source={videoURL} />
                </HeroVideoStyles>
            </div>
            <HeroImageSlider
                title="Live Epic"
                images={[
                    "LANDINGPG1",
                    "LANDINGPG2",
                    "LANDINGPG3",
                    "LANDINGPG4",
                    "LANDINGPG5",
                ]}
            />
            <TopDividerStyles home={true}>
                <img
                    src="/svg/divider-top.svg"
                    width="101%"
                    style={{ marginLeft: "-.1rem" }}
                />
            </TopDividerStyles>
            <SectionStyles>
                <h3>Experience Epic Adventures</h3>
                <p>
                    When it comes to adrenaline, adventure and experiencing all
                    the elements, we've got you covered! Tick off that bucket
                    list and experience more in Canada's Adventure Capital. We
                    connect you with the best and allow you to make unique
                    combination packages with exclusive savings on experiences
                    you'll never forget.
                </p>
            </SectionStyles>
            <BottomDividerStyles>
                <img
                    src="/svg/divider-bottom.svg"
                    width="101%"
                    style={{ marginLeft: "-.1rem" }}
                />
            </BottomDividerStyles>
            <CardSectionStyles>
                <h3>A Playground Awaits</h3>
                <div className="cards">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        swipeable={true}
                        draggable={true}
                        containerClass="margin-100-px"
                    >
                        <Card
                            title="Rafting"
                            description="Rafting on the mighty Kicking Horse River, Western Canada’s best rafting day trip is an experience you can’t miss."
                            bullets={[
                                "Full day and half-day trips",
                                "No experience required",
                            ]}
                            price="99"
                            slug="rafting"
                            imageUrl="rafting"
                        />
                        <Card
                            title="Skybridge"
                            description="Golden's newest must-visit attraction includes a Treetop Village, outdoor BBQ and entertainment plaza."
                            bullets={[
                                "Listed price is for adult ticket",
                                "Swing and zipline coming soon",
                            ]}
                            price="34"
                            slug="skybridge"
                            imageUrl="skybridge"
                        />
                        <Card
                            title="ATV Off-Road"
                            description="Venture off the beaten path and experience Golden’s back country up close on your own all-terrain vehicle."
                            bullets={[
                                "No experience required",
                                "Drive or ride as passenger",
                            ]}
                            price="219"
                            slug="atv"
                            imageUrl="atv"
                        />
                        <Card
                            title="Golden Eagle Express"
                            description="Take in panoramic views of the Rocky Mountains, the Columbia River Wetlands and the town of Golden."
                            bullets={["Family friendly", "Sightseeing"]}
                            price="46"
                            slug="kickinghorse"
                            imageUrl="kickinghorse3"
                        />
                        <Card
                            title="Mountain Bike Pass"
                            description="Take on the Rocky Mountains and bike some of Canada's most epic trails!"
                            bullets={[
                                "Bike and gear rental available",
                                "Kicking Horse Resort",
                            ]}
                            price="62"
                            slug="kickinghorse"
                            imageUrl="kickinghorse5"
                        />
                        <Card
                            title="Adventure Pass"
                            description="Get a guided tour to the home of the Grizzly Bear Refuge and scale the mountain on the Golden Eagle Express Gondola."
                            bullets={["Family friendly", "Sightseeing"]}
                            price="51"
                            slug="kickinghorse"
                            imageUrl="kickinghorse4"
                        />
                        <Card
                            title="Tandem Skydive"
                            description="Experience the thrill of free-falling at over 120MPH and a view of the Rocky Mountains from 10,000ft!"
                            bullets={[
                                "19 years or older",
                                "The only skydiving in the Rockies",
                            ]}
                            price="348"
                            slug="skydiving"
                            imageUrl="skydiving5"
                        />
                        <Card
                            title="Canyon Edge Challenge"
                            description="Put your strength and stamina to the test with our fun-for-all-ages ropes course."
                            bullets={[
                                "Admission & ropes course",
                                "Golden Skybridge",
                            ]}
                            price="54"
                            slug="skybridge"
                            imageUrl="ropecourse"
                        />
                        <Card
                            title="Giant Canyon Swing"
                            description="Freefall over the canyon edge before the swing kicks in, allowing thrill seekers to sway side to side above the canyon floor."
                            bullets={[
                                "Admission & ropes course",
                                "Golden Skybridge",
                            ]}
                            slug="skybridge"
                            comingSoon={true}
                            imageUrl="swing1"
                        />
                        <Card
                            title="Zipline"
                            description="The adventure-seekers in the group won’t want to miss the 1,500-foot zipline that provides a thrilling ride across the canyon."
                            bullets={[
                                "Zipline and admission",
                                "Golden Skybridge",
                            ]}
                            slug="skybridge"
                            comingSoon={true}
                            imageUrl="zipline"
                        />
                    </Carousel>
                </div>
                <Link href="/summer/">
                    <div className="button viewAll">
                        <span>View All</span>
                    </div>
                </Link>
            </CardSectionStyles>
            <TopDividerStyles>
                <img
                    src="/svg/divider-top2.svg"
                    width="101%"
                    style={{ marginLeft: "-.1rem" }}
                />
            </TopDividerStyles>
            <SectionStyles>
                <div className="locationLogos">
                    <img
                        src="/svg/epicgolden.svg"
                        width={isMobile ? "120" : "180"}
                        alt="Epic Golden"
                    />
                </div>
                <h3>The Adventure Capital of Canada</h3>
                <p>
                    Our adventures are located in beautiful Golden, BC. To get
                    here is easy: Golden is located on the Trans-Canada Highway
                    1 and Highway 95, and is less than 3 hours from Calgary and
                    1.5 hours from the Town of Banff. With all of our
                    experiences within a fifteen minute drive from the centre of
                    town, you'll see why Golden is the Adventure Capital of
                    Canada!
                </p>
            </SectionStyles>
            <BottomDividerStyles>
                <img
                    src="/svg/divider-bottom2.svg"
                    width="101%"
                    style={{ marginLeft: "-.1rem" }}
                />
            </BottomDividerStyles>
            <ComboSectionStyles>
                <h3>Epic Combos</h3>
                <p>
                    Experience more and take advantage of our exclusive products
                    and savings! We have put together some unforgettable moments
                    and memories for you to take advantage of during your trip
                    to Canada’s Adventure Capital.
                </p>
                <Combo
                    number="01"
                    title="Epic Golden Pass"
                    description="Got a couple days? Why not do it all! Raft the Kicking Horse River, experience human flight and get dusty off-road on your own ATV!"
                    reverse={false}
                    price="665"
                    url="https://epicadventuregroup.rezdy.com/443894/epic-golden-pass-raft-skydive-atv-2day"
                    save="707"
                    image="/images/combo1.jpg"
                    bullets={[
                        "Includes rafting, skydiving and ATV off-road (2 days)",
                        "8 hours (approx.)",
                        "Must be 19 Years or older",
                    ]}
                />
                <Combo
                    number="02"
                    title="Mud Express"
                    description="Looking for an alternative way to travel? Take a morning ride through the mountains on an ATV, then take a trip on nature's highway on the Kicking Horse River half-day trip!"
                    reverse={true}
                    price="292"
                    url="https://epicadventuregroup.rezdy.com/443893/mud-express-atv-raft-express-combo"
                    save="318"
                    image="/images/combo2.jpg"
                    bullets={[
                        "Includes rafting express and ATV off-road",
                        "8 hours (approx.)",
                        "Must be 12 years or older",
                    ]}
                />
                <Combo
                    number="03"
                    title="Dirt Dive"
                    description="Get dusty 4x4 on your own ATV with river crossings, dense mountain forests and maybe even an encounter with local wildlife. Then test your ability to fly with a skydive over the beautiful town of Golden."
                    reverse={false}
                    price="518"
                    url="https://epicadventuregroup.rezdy.com/443897/dirt-dive-atv-skydive-combo"
                    save="548"
                    image="/images/combo3.jpg"
                    bullets={[
                        "Includes ATV off-road and skydiving",
                        "6 hours (approx.)",
                        "Must be 19 years or older",
                    ]}
                />
                <Combo
                    number="04"
                    title="The Mountaineer"
                    description="Off-road ATV through the stunning Rocky Mountains with river crossings, dense mountain forests and maybe even encounter the local wildlife, then scale the clouds with a gondola ride to 7,700 ft for panoramic views you can't forget."
                    reverse={true}
                    price="250"
                    url="https://epicadventuregroup.rezdy.com/444963/the-mountaineer-atv-gondola-kicking-horse-resort"
                    save="265"
                    image="/images/combo4.jpg"
                    bullets={[
                        "Includes ATV off-road and Kicking Horse gondola",
                        "6 hours (approx.)",
                        "Must be 13 years or older",
                    ]}
                />
                <Combo
                    number="05"
                    title="Ridge Rider"
                    description="Off-road ATV through the stunning Rocky Mountains with river crossings, dense mountain forests and maybe even encounter the local wildlife. Then head over to Golden's newest adventure with trails, suspension bridges and treetop village."
                    reverse={false}
                    price="239"
                    save="253"
                    image="/images/combo5.jpg"
                    url="https://epicadventuregroup.rezdy.com/444981/ridge-rider-atv-golden-skybridge"
                    bullets={[
                        "Includes ATV off-road and Golden Skybridge",
                        "6 hours (approx.)",
                        "Must be 6 years or older",
                    ]}
                />
                <Combo
                    number="06"
                    title="Double Trouble"
                    description="Skydive for breakfast and raft the express (half day) trip in the afternoon. This day trip is an adrenaline filled memory, showcasing the best Golden has to offer!"
                    reverse={true}
                    price="396"
                    save="428"
                    image="/images/combo6.jpg"
                    url="https://epicadventuregroup.rezdy.com/443892/double-trouble-skydive-raft-express-combo"
                    bullets={[
                        "Includes skydiving and rafting express",
                        "6 hours (approx.)",
                        "Must be 19 years or older",
                    ]}
                />
                <Link href="/summer/combos">
                    <div className="button viewAll">
                        <span>View All</span>
                    </div>
                </Link>
            </ComboSectionStyles>
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

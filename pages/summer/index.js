import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Adventure from "../../components/Adventure"
import ReadyToBook from "../../components/ReadyToBook"

import { HeroImageStyles } from "../../components/styles/HeroImageStyles"
import { SectionStyles } from "../../components/styles/SectionStyles"
import { TopDividerStyles } from "../../components/styles/TopDividerStyles"
import { ReadyToBookStyles } from "../../components/styles/ReadyToBookStyles"
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles"
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles"
import { AdventuresStyles } from "../../components/styles/AdventuresStyles"
import { TextSectionStyles } from "../../components/styles/TextSectionStyles"

const Adventures = () => {
    return (
        <>
            <Head>
                <title>Epic Adventures | Summer Adventures</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroImageStyles image="rafting5">
                <div className="heroText">
                    <h2>Summer.</h2>
                </div>
            </HeroImageStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top.svg" width="100%" />
            </TopDividerStyles>
            <SectionStyles>
                <h3>A Playground Awaits</h3>
                <p>
                    A Canadian summer in the mountains is like no other:
                    spectacular views, glacier fed rivers and lakes, majestic
                    wildlife, wetlands and steep canyons! Add human creativity,
                    personality and a sense of adventure, you get a wild
                    opportunity to experience one of the world's most beautiful
                    locations in a very unique way!
                </p>
            </SectionStyles>
            <BottomDividerStyles>
                <img src="/svg/divider-bottom.svg" width="100%" />
            </BottomDividerStyles>
            <AdventuresStyles>
                <div className="heading">
                    <h3>Experience Epic Adventures</h3>
                    <p>
                        We have teamed up with Canada's best local talent for
                        quality, service, safety and value. Check them out!
                    </p>
                </div>
                <Adventure
                    number="01"
                    title="Rafting"
                    slug="rafting"
                    description="Rafting on the mighty Kicking Horse River, Western Canada’s best rafting day trip is an experience you can’t miss. This Canadian classic will take you down exhilarating rapids through unforgettable scenery and gives you the chance to spot local wildlife as you travel down the Kicking Horse. Enjoy nature’s highway in a raft!"
                    reverse={false}
                    image="/images/rafting.jpg"
                    bullets={[
                        "Includes rafting express and ATV off-road",
                        "8 hours (approx.)",
                        "Must be 12 years or older",
                    ]}
                />
                <Adventure
                    number="02"
                    title="Skydiving"
                    slug="skydiving"
                    description="Experience the thrill of free falling at over 120 MPH and a view of the Rocky Mountains from 10,000 ft! Expect sensory overload as your mind, body and soul fight against every natural self-preserving urge. Fit for anyone with the will to say yes, from the beginner ready to confront their fear to the experienced thrill seeker."
                    reverse={true}
                    image="/images/skydiving.jpg"
                    bullets={[
                        "Includes rafting express and ATV off-road",
                        "8 hours (approx.)",
                        "Must be 12 years or older",
                    ]}
                />
                <Adventure
                    number="03"
                    title="ATV Off-Road"
                    slug="atv"
                    description="Venture off the beaten path and experience Golden’s back country up close on your own all-terrain vehicle. Led by a seasoned adventure tour guide, you’ll come across winding rivers and streams, grand expanses of native wildflowers, stunning mountain vistas and the chance to spot local wildlife in their natural environment."
                    reverse={false}
                    image="/images/atv.jpg"
                    bullets={[
                        "Includes rafting express and ATV off-road",
                        "8 hours (approx.)",
                        "Must be 12 years or older",
                    ]}
                />
                <Adventure
                    number="04"
                    title="Kicking Horse Resort"
                    slug="kickinghorse"
                    description="The Golden Eagle Express Gondola takes you on an eighteen minute climb to a ridge overlooking three mountain ranges. During the journey, you’ll spot wildlife and may even get a glimpse of Kicking Horse Mountain Resort’s resident grizzly bear! Once at the summit, you can explore the many ridges and bowls by foot or by bike, each providing stunning views of the surrounding Purcell and Rocky
                    Mountains."
                    reverse={true}
                    image="/images/kickinghorse2.jpg"
                    bullets={[
                        "Includes rafting express and ATV off-road",
                        "8 hours (approx.)",
                        "Must be 12 years or older",
                    ]}
                />
                <Adventure
                    number="05"
                    title="Golden Sky Bridge"
                    slug="skybridge"
                    description="Take in the Columbia Valley at 426’ from two of Canada’s highest suspension bridges while a crashing river and 200-foot waterfall thunder in the expansive canyon below your feet. The epic views will take your breath away with sights of the Rocky and Purcell mountain ranges like you’ve never seen before. Wander the canyon ridge on three kilometres of nature trails through silent forest and untamed wilderness and take a moment to breathe and enjoy the stillness at each of the viewing platforms."
                    reverse={false}
                    image="/images/skybridge.jpg"
                    bullets={
                        [
                            // "Includes rafting express and ATV off-road",
                            // "8 hours (approx.)",
                            // "Must be 12 years or older",
                        ]
                    }
                />
            </AdventuresStyles>
            <TextSectionStyles>
                <h3>Experience more with epic combos</h3>
                <p>
                    Experience more and take advantage of our exclusive products
                    and savings! We have put together some unforgettable moments
                    and memories for you to take advantage of during your trip
                    to Canada’s Adventure Capital.
                </p>
                <Link href="/summer/combos">
                    <div className="button">
                        <span>More Info</span>
                    </div>
                </Link>
            </TextSectionStyles>
            <ReadyToBook />
            <FooterDividerStyles>
                <img src="/svg/divider-top2.svg" width="100%" />
            </FooterDividerStyles>
        </>
    )
}

export default Adventures

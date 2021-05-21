import Head from "next/head"
import Link from "next/link"
import Combo from "../../components/Combo"
import { HeroImageStyles } from "../../components/styles/HeroImageStyles"
import { TopDividerStyles } from "../../components/styles/TopDividerStyles"
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles"
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles"
import { ComboSectionStyles } from "../../components/styles/ComboSectionStyles"
import { TextSectionStyles } from "../../components/styles/TextSectionStyles"
import { ReadyToBookStyles } from "../../components/styles/ReadyToBookStyles"
import { SectionStyles } from "../../components/styles/SectionStyles"

const Combos = ({}) => {
    return (
        <>
            <Head>
                <title>Epic Adventures | Epic Combos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroImageStyles>
                <div className="heroText">
                    <h2>Epic Combos.</h2>
                </div>
                <div className="heroText">
                    <h2 className="bg">Epic Combos.</h2>
                </div>
            </HeroImageStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top.svg" width="100%" />
            </TopDividerStyles>
            <SectionStyles>
                <h3>Epic Combos.</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                </p>
            </SectionStyles>
            <BottomDividerStyles>
                <img src="/svg/divider-bottom.svg" width="100%" />
            </BottomDividerStyles>
            <ComboSectionStyles>
                <h3>Do more with epic combos</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <Combo
                    number="01"
                    title="Golden Shower"
                    description="Got a couple days? Why not do it all! Raft the Kicking Horse River, experience human flight and get dusty off-road on your own ATV!"
                    reverse={false}
                    price="656"
                    save="42"
                    image="/images/epicsummer.png"
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
                    save="26"
                    image="/images/epicsummer.png"
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
                    price="509"
                    save="30"
                    image="/images/epicsummer.png"
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
                    save="14"
                    image="/images/epicsummer.png"
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
                    price="242"
                    save="14"
                    image="/images/epicsummer.png"
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
                    price="387"
                    save="32"
                    image="/images/epicsummer.png"
                    bullets={[
                        "Includes skydiving and rafting express",
                        "6 hours (approx.)",
                        "Must be 19 years or older",
                    ]}
                />
                <Combo
                    number="07"
                    title="Top of the World"
                    description="A day above the clouds! A jump from an airplane from 10,000 ft above the beautiful town of Golden, then scale the kicking horse mountain to 7,700 ft for panoramic views you can't forget!"
                    reverse={false}
                    price="351"
                    save="15"
                    image="/images/epicsummer.png"
                    bullets={[
                        "Includes skydiving and Kicking Horse gondola",
                        "6 hours (approx.)",
                        "Must be 19 years or older",
                    ]}
                />
                <Combo
                    number="08"
                    title="Stairway to Heaven"
                    description="Test your nerves with a jump from an airplane from 10,000 ft and enjoy the trails, suspension bridges and treetop village of the NEW Golden Skybridge."
                    reverse={true}
                    price="342"
                    save="15"
                    image="/images/epicsummer.png"
                    bullets={[
                        "Includes skydiving and Golden Skybridge",
                        "6 hours (approx.)",
                        "Must be 19 years or older",
                    ]}
                />
                <Combo
                    number="09"
                    title="Don't Tell Mom!"
                    description="Raft the Kicking Horse River and experience nature's highway with white knuckle fun with provided lunch: it's a Golden classic. Then finish the day experiencing human flight and a jump above the clouds at 10,000 ft above the town of Golden."
                    reverse={false}
                    price="445"
                    save="34"
                    image="/images/epicsummer.png"
                    bullets={[
                        "Includes rafting (full day) and skydiving",
                        "Full day",
                        "Must be 19 years or older",
                    ]}
                />
                <Combo
                    number="10"
                    title="Espresso"
                    description="Get wet and scale the clouds. Raft Western Canada's epic Kicking Horse River, exhilarating rapids, river views and a gondola ride to 7,700 ft for panoramic views you won't forget."
                    reverse={true}
                    price="141"
                    save="14"
                    image="/images/epicsummer.png"
                    bullets={[
                        "Includes rafing express and Kicking Horse gondola",
                        "6 hours (approx.)",
                        "Must be 12 years or older",
                    ]}
                />
                <Combo
                    number="11"
                    title="Canyon Fever"
                    description="Raft Western Canada's epic Kicking Horse River, exhilarating rapids, river views and provided lunch. Then head over to the Golden's newest adventure with trails, suspension bridges and a treetop village."
                    reverse={false}
                    price="182"
                    save="14"
                    image="/images/epicsummer.png"
                    bullets={[
                        "Includes rafting (full day) and Golden Skybridge",
                        "6 hours (approx.)",
                        "Must be 12 years or older",
                    ]}
                />
                <Combo
                    number="12"
                    title="The Sights"
                    description="Get epic views from both sides of the valley! Enjoy the trails, suspension bridges and tree-top village of the NEW Golden Skybridge and a gondola ride to 7,700 ft for panoramic views you won't forget. "
                    reverse={true}
                    price="78"
                    save="5"
                    image="/images/epicsummer.png"
                    bullets={[
                        "Includes Golden Skybridge and Kicking Horse gondola",
                        "6 hours (approx.)",
                    ]}
                />
            </ComboSectionStyles>
            <TextSectionStyles>
                <h3>Epic photo & video package</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                </p>
                <Link href="#">
                    <div className="button">
                        <span>More Info</span>
                    </div>
                </Link>
            </TextSectionStyles>
            <ReadyToBookStyles>
                <div>
                    <h4>Ready to book?</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
                <a className="bookNow">Book Now</a>
            </ReadyToBookStyles>
            <FooterDividerStyles>
                <img src="/svg/divider-top2.svg" width="100%" />
            </FooterDividerStyles>
        </>
    )
}

export default Combos

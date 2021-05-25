import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { HeroImageStyles } from "../../components/styles/HeroImageStyles"
import { TestimonialStyles } from "../../components/styles/TestimonialStyles"
import { TopDividerStyles } from "../../components/styles/TopDividerStyles"
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles"
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles"
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles"
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
                <div className="heroText">
                    <h2 className="bg">Kicking Horse Resort.</h2>
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
                            The Golden Eagle Express Gondola takes you on an
                            18-minute climb to a ridge overlooking 3 mountain
                            ranges. During the journey, you’ll spot wildlife and
                            may even get a glimpse of Kicking Horse Mountain
                            Resort’s resident grizzly bear! Once at the summit,
                            you can explore the many ridges and bowls by foot or
                            by bike, each providing stunning views of the
                            surrounding Purcell and Rocky Mountains. Don’t worry
                            about packing a lunch! Soak in the views from the
                            Eagle’s Eye Restaurant, Canada’s Most Elevated
                            Dining Experience. Reservations are recommended.
                        </p>
                        <ul>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet
                            </li>
                            <li>
                                <img src="/svg/checkmark.svg" width="15" />
                                Lorem ipsum dolor sit amet
                            </li>
                        </ul>
                        <div className="priceContainer">
                            <span className="dollarSign">$</span>
                            <span className="amount">99</span>
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

export default Rafting

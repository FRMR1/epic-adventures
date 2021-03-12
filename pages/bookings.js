import Head from "next/head"
import Iframe from "react-iframe"
import { HeroImageStyles } from "../components/styles/HeroImageStyles"
import { SectionStyles } from "../components/styles/SectionStyles"
import { TopDividerStyles } from "../components/styles/TopDividerStyles"
import { BottomDividerStyles } from "../components/styles/BottomDividerStyles"
import { FooterDividerStyles } from "../components/styles/FooterDividerStyles"

const Bookings = () => {
    return (
        <>
            <Head>
                <title>Epic Adventures | Bookings</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroImageStyles>
                <div className="heroText">
                    <h2>Bookings.</h2>
                </div>
                <div className="heroText">
                    <h2 className="bg">Bookings.</h2>
                </div>
            </HeroImageStyles>
            <TopDividerStyles>
                <img src="/svg/divider-top.svg" width="100%" />
            </TopDividerStyles>
            <SectionStyles>
                <h3>Book now</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </SectionStyles>
            <BottomDividerStyles>
                <img src="/svg/divider-bottom.svg" width="100%" />
            </BottomDividerStyles>
            <Iframe
                url={
                    "https://epicadventuregroup.rezdy.com/catalog/427160/tours?iframe=true"
                }
                width="100%"
                height="800px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                styles={{ border: 0 }}
            />
            <FooterDividerStyles>
                <img src="/svg/divider-top2.svg" width="100%" />
            </FooterDividerStyles>
        </>
    )
}

export default Bookings

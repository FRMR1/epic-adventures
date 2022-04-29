import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import GoogleMap from "../../components/GoogleMap";
import SuggestedCombo from "../../components/SuggestedCombo";
import ReadyToBook from "../../components/ReadyToBook";
import { HeroImageStyles } from "../../components/styles/HeroImageStyles";
import { HeroVideoStyles } from "../../components/styles/HeroVideoStyles";
import { TestimonialStyles } from "../../components/styles/TestimonialStyles";
import { TopDividerStyles } from "../../components/styles/TopDividerStyles";
import { CardSectionStyles } from "../../components/styles/CardSectionStyles";
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles";
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles";
import { SuggestedCombosStyles } from "../../components/styles/SuggestedCombosStyles";
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles";
import { AdventureSectionStyles } from "../../components/styles/AdventureSectionStyles";
import { BookAdventureStyles } from "../../components/styles/BookAdventureStyles";
import dynamic from "next/dynamic";
import { MobileVideoStyles } from "../../components/styles/MobileVideoStyles";
import Carousel from "react-multi-carousel";
import Card from "../../components/Card";
import "react-multi-carousel/lib/styles.css";
import { DiningTwoColStyles } from "../../components/styles/DiningTwoColStyles";
import Divider from "../../components/Divider";
import Divider2 from "../../components/Divider2";
import WhyEpic from "../../components/WhyEpic";

const CloudflareVideo = dynamic(
  () => import("../../components/CloudflareVideo"),
  {
    ssr: false,
  }
);

const HeroImageSlider = dynamic(
  () => import("../../components/HeroImageSlider"),
  {
    ssr: false,
  }
);

const ATV = () => {
  // Cloudflare URL for video
  const videoURL = "bc7116cd09666a03c092735de7090e19";

  // Responsive breakpoints
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Head>
        <title>Epic Adventures | ATV Off-Road</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <HeroImageSlider
        title="ATV Off-Road"
        images={["ATV1", "ATV2", "ATV3", "ATV4"]}
      />
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </TopDividerStyles>
      <AdventureHeadingStyles>
        <div className="imageContainer">
          <img src="/images/logos/coa.svg" />
        </div>
        <div className="pContainer">
          <div>
            <h2>ATV Off-Road Tour</h2>
            <p>
              Venture off the beaten path and experience Golden's back country
              up close on your own all-terrain vehicle. Led by a seasoned
              adventure tour guide, you'll come across winding rivers and
              streams, grand expanses of native wildflowers, stunning mountain
              vistas and the chance to spot local wildlife in their natural
              environment. Located 1.5 hours west of the town of Banff along the
              Trans-Canada Highway, this trip is nestled in the Columbia Valley
              and is the closest ATV trip to Banff, Lake Louise and Jasper.
              ATV's are fun, fast and a great way to travel the road less
              travelled. With over ten years operating in the Valley, this
              fantastic tour is a great escape from busy tourist spots.
            </p>
          </div>
        </div>
      </AdventureHeadingStyles>
      <BottomDividerStyles marginTop="4.7rem">
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </BottomDividerStyles>

      <CardSectionStyles>
        <div className="cards">
          <Carousel
            responsive={responsive}
            infinite={true}
            swipeable={true}
            draggable={true}
            containerClass="padding-100-px"
          >
            <Card
              title="ATV"
              description="Drive your own off road machine or be a passenger through the winding back country of the Columbia valley. "
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/bdf4b029-7c13-4887-724a-b0cf7db54700/public"
            />
            <Card
              title="Trails"
              description="Your guide will show you all the best spots and trails tailored to your abilities and comfort levels."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/0ca167e0-0f85-47c0-87b7-4e690a082900/public"
            />
            <Card
              title="Safety"
              description="You will be given everything you need to take on the dirt tracks. Just bring enclosed shoes and appropriate clothes for the weather and off you go."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/9fb95355-619e-4e3d-9e68-13dbb52fea00/public"
            />
            <Card
              title="Views"
              description="Be sure to take in the Epic views of the Columbia valley, with photo stops along the way and a guide to take some shots of you and your team."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/feb3d1df-d22c-4b03-7886-94b8ebd87100/public"
            />
            <Card
              title="Book In Advance"
              description="Slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/a23be2f6-e099-4b17-9355-1db1ccb51800/public"
            />
            <Card
              title="Waiver Forms"
              description="Download and read waiver forms before your trip."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/cee935c4-1697-4a17-2b3e-7ba55cc07200/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Epic Adventures</h3>
        <div className="twoCol">
          <div className="left">
            <div style={{ display: "block" }}>
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/4b5fe1d9-03de-49c7-b5ed-8e901ae9d100/public"
                layout="fill"
                objectFit="contain"
                alt="ATV Off-Road"
              />
            </div>
          </div>
          <div className="right">
            <h3>Half Day ATV Trip (AM)</h3>
            <p>
              This trip takes you through dense forests and up into the
              mountains, passing glacier fed streams and oceans of wildflowers
              mid-season.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />3 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                No experience required
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Two trips per day (10AM-1PM)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Passenger/driver combos
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Drivers 19+, Passengers 6+
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">229</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/443886/off-road-atv-half-day">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>Book Now</span>
                </div>
              </a>
            </Link>
          </div>
        </div>

        <div className="twoCol grey">
          <div className="left">
            <div>
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/96a731da-7931-4e7b-35f2-f7d102c6a500/public"
                layout="fill"
                objectFit="contain"
                alt="ATV Off-Road"
              />
            </div>
          </div>
          <div className="right">
            <h3>Half Day ATV Trip (PM)</h3>
            <p>
              This trip takes you through dense forests and up into the
              mountains, passing glacier fed streams and oceans of wildflowers
              mid-season.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />3 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                No experience required
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                2PM-5PM
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Passenger/driver combos
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Drivers 19+, Passengers 6+
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">229</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/443886/off-road-atv-half-day">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>Book Now</span>
                </div>
              </a>
            </Link>
          </div>
        </div>

        <div className="twoCol">
          <div className="left">
            <div>
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/ca20ab16-0d8c-44c5-fa99-49a07fcf0700/public"
                layout="fill"
                objectFit="contain"
                alt="ATV Off-Road"
              />
            </div>
          </div>
          <div className="right">
            <h3>Combo This Trip</h3>
            <p>Combo and experience more!</p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Save money
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Save time
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Exclusive products
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Live EPIC!
              </li>
            </ul>
            <Link href="/combos">
              <div className="button">
                <span>More Info</span>
              </div>
            </Link>
          </div>
        </div>
      </BookAdventureStyles>
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </TopDividerStyles>
      <TestimonialStyles>
        <p>
          “Had a blast! This trip was so much fun and the views were incredible.
          The guides are excellent and know their stuff and all the places to
          take you for the most memorable day. We will be back!”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Allison P., August 2020</p>
        <p>
          “Awesome tour up the mountain and off-road seeing some waterfalls. Our
          guide Chris was friendly, knowledgeable and fun, thank you for the
          great trip and engaging information. Great job keeping the kids having
          fun and the adults as well. Family fun!”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Tiffany T., August 2019</p>
      </TestimonialStyles>
      <BottomDividerStyles>
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </BottomDividerStyles>
      <WhyEpic style={{ marginTop: "10rem" }} />

      <AdventureSectionStyles>
        <div className="twoCol">
          <div className="left">
            <h3>Additional Details</h3>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Bring appropriate warm clothing and closed toe shoes.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Drivers must be at least 19 years old with valid old drivers
                license. Passengers must be at least six years old.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Instructors will teach you everything you need to know, with no
                experience required.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                <div>
                  Download the{" "}
                  <a href="/atvwaiver.pdf" target="_blank" rel="noreferrer">
                    waiver form
                  </a>{" "}
                  here. View our <a href="cancellations">cancellation policy</a>{" "}
                  here.
                </div>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="imageRotate">
              <Image
                src="/images/atv4.jpg"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="ATV Off-Road"
              />
            </div>
          </div>
        </div>
      </AdventureSectionStyles>
      <GoogleMap location={{ lat: 51.30054, lng: -116.98498 }} zoom={15} />
      <SuggestedCombosStyles>
        <h3>Suggested Combos</h3>
        <div className="cards">
          <SuggestedCombo
            title="Epic Golden Pass"
            description="Rafting Kicking Horse river full day, skydiving, ATV half day."
            image="595ec27a-72a8-45c6-99a4-d7c50fead200"
            url="https://epicadventuregroup.rezdy.com/443894/combo-epic-golden-pass-raft-skydive-atv-multi-day"
          />
          <SuggestedCombo
            title="Golden Ultimate"
            description="Rafting full day Kicking Horse river, skydiving, ATV half-day, via ferrata (Discovery route Kicking Horse)."
            price="TBD"
            image="379df31d-2ab4-495a-21d3-cce6e7585100"
            url="https://epicadventuregroup.rezdy.com/485632/combo-golden-ultimate-raft-skydive-atv-via-ferrata-multi-day"
          />
          <SuggestedCombo
            title="Mud Express"
            description="Half-day ATV trip, rafting Kicking Horse river PM."
            price="TBD"
            image="c20d505c-ac97-4e19-f2d0-12a55afce900"
            url="https://epicadventuregroup.rezdy.com/443893/mud-express-atv-raft-express-combo"
          />
        </div>
      </SuggestedCombosStyles>
      <ReadyToBook />
      <FooterDividerStyles>
        <img
          src="/svg/divider-top2.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </FooterDividerStyles>
    </>
  );
};

export default ATV;

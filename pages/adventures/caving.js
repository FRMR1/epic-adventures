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

const MaligneLake = () => {
  // Cloudflare URL for video
  const videoURL = "225299687d98d673503b19426a2955ef";

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
        <title>Epic Adventures | Caving</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Caving"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e7bb769d-9139-4008-c6a6-0d4b2d659100/public",
        ]}
        cdn={true}
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
        <div className="oneCol">
          <h2>Explore The Wild Things</h2>
          <p>
            With over 25 years in operation this underground sensation is packed
            with a unique adventure. This hands-on experience will take you on
            an intimate guided tour into the depth of a mountain in the Rockies.
            Learn about the deep history of the cave and challenge yourself with
            two great trips of discovery that will expand your mind and
            relationship with the area. Have you got what it takes?
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
              title="Caving"
              description="Caving requires a sense of adventure and is easily accessible to anyone with moderate fitness level."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/66ee2fee-ee8a-4ac0-1454-3ab1da1e7100/public"
            />
            <Card
              title="Rats Nest Cave"
              description="Don't let the name fool you, these caves have cute native mice you may see along the way"
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/c3eff5e5-8bc1-45a6-8ab3-07dfb6cf5800/public"
            />
            <Card
              title="Explore"
              description="This is a truly hands on authentic guided trip with that'll expand your relationship with the area."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/2e18f70b-2470-4f7a-7d66-9eb699337e00/public"
            />
            <Card
              title="Gear"
              description="All safety and personal protective equipment for your epic adventure will be provided."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/f5313a88-4556-4641-04ef-134dfff99b00/public"
            />
            <Card
              title="Guided"
              description="Your experienced guides will help you along the way as you navigate the hiking trails and cave."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/0f7d3af1-e352-4938-f0f8-627b15bb5300/public"
            />
            <Card
              title="Experience"
              description="No experience is required before booking, all you need to bring is your sense of adventure."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/c8f25c26-0af5-4add-63de-d8898512c900/public"
            />
            <Card
              title="Repel"
              description="The “Adventure” tour has a 18m repel deep into the caves, this is one for the books."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/999a0762-a98e-4355-97e3-71d8c6b92500/public"
            />
            <Card
              title="Book In Advance"
              description="Slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/b6c3820c-7ec4-400a-2afa-3752d0d76300/public"
            />
            <Card
              title="Waiver Forms"
              description="Download and read waiver forms before your trip."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/d8c6b690-ab3a-4f2c-3edb-8287e762d200/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Our Adventures</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/d0512068-b49e-4d5a-d895-84f47e50b600/public"
              layout="fill"
              objectFit="contain"
              alt="Caving"
            />
          </div>
          <div className="right">
            <h3>Explorer Cave Tour</h3>
            <p>
              This cave tour is two hours underground exploring the ancient
              bones and cave formations. Full of fun, this tour is the more
              accessible of the two trips.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 4.5 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Year round activity
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Guided tour
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Moderate difficulty
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">135</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/484987/cave-tour-explorer">
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
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/02b4f4b9-38ba-4a92-0723-c319e967dd00/public"
              layout="fill"
              objectFit="contain"
              alt="Caving"
            />
          </div>
          <div className="right">
            <h3>Adventurer Cave Tour</h3>
            <p>
              This trip is a “Canadian Signature Experience” award holder and is
              the longest trip with an 18m repel in the cave.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Signature tour
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 6 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Year round activity
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Guided tour
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Moderate difficulty
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">175</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/484989/cave-tour-adventurer">
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
            <Link href="https://epicadventuregroup.rezdy.com/catalog/427160/combos">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>More Info</span>
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
          “This was an absolute riot! The cave is so raw and beautiful! The tour
          itself was constantly exciting, challenging and unpredictable. It
          offers some chances to push your comfort levels as well - which was
          absolutely worth it.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Steve M., Jan. 2020</p>
        <p>
          “Got this tour for my girlfriend as her birthday present and we both
          loved it. Our guide Brent was fantastic and worked well to accommodate
          different skill and comfort levels in our small group. Would recommend
          this tour to anyone!”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Blair C., Dec. 2021</p>
      </TestimonialStyles>
      <BottomDividerStyles>
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </BottomDividerStyles>
      <WhyEpic />
      <AdventureSectionStyles>
        <div className="twoCol">
          <div className="left">
            <h3>Additional Details</h3>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Bring appropriate clothing for weather/season and closed toe
                shoes. The cave is 5 degrees celcius all year round.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Please bring water and a durable snack to keep your energy
                levels up during the trip (eg.nuts,energybar), camera (pocket
                fit), and medication if required.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                You will be provided a backpack (shared between 2), helmet, head
                lamp, coveralls, kneepads, gloves, harness and safety lanyard.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum age is 12 years old. Maximum weight size is generally
                not an issue but you will need to fit a harness with a waist of
                46” (116cm) and a maximum leg size of 33” (84cm).
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Instructors will teach you everything you need to know with no
                experience required.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                <span>
                  You can download the{" "}
                  <a href="/cavingwaiver.pdf" target="_blank" rel="noreferrer">
                    wiaver form
                  </a>{" "}
                  here, and you can view our{" "}
                  <a href="cancellations" target="_blank" rel="noreferrer">
                    cancellation policy
                  </a>{" "}
                  here.
                </span>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/ade85b67-9e1b-4c66-8ee3-9f47aa0e2900/public"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="Skydiving"
              />
            </div>
          </div>
        </div>
      </AdventureSectionStyles>
      <GoogleMap location={{ lat: 51.077816, lng: -115.320025 }} zoom={15} />
      <SuggestedCombosStyles>
        <h3>Suggested Combos</h3>
        <div className="cards">
          <SuggestedCombo
            title="Banff Epic Adventurer"
            description="Caving (Adventure Route), via ferrata Mt. Noruqay, canyoning (Heart Creek Canyon)."
            price="TBD"
            image="d9d4b234-8f74-41d1-099f-ac5d56ccba00"
            url="https://epicadventuregroup.rezdy.com/485636/combo-banff-epic-adventurer-caving-via-ferrata-canyoning-multi-day"
          />
          <SuggestedCombo
            title="Under and Over"
            description="Caving (Adventure Route), skydiving."
            price="TBD"
            image="77c056a1-9c75-4d03-65a9-64e6f148a700"
            url="https://epicadventuregroup.rezdy.com/485638/combo-under-over-caving-skydive-multi-day"
          />
          <SuggestedCombo
            title="Rockies Explorer"
            description="Rafting Kicking Horse river full day, caving (Adventure Route)."
            price="TBD"
            image="de77175d-b602-4e42-9d06-bdecdbdf1300"
            url="https://epicadventuregroup.rezdy.com/485641/combo-rockies-explorer-raft-caving-multi-day"
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
  );
};

export default MaligneLake;

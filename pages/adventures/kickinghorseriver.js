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

const Skydiving = () => {
  // Cloudflare URL for video
  const videoURL = "ad1d8e9d786654e62cbe2681a546ba6c";

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
        <title>Epic Adventures | Kicking Horse River</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <HeroImageSlider
        title="Kicking Horse River"
        images={["RAFT1", "RAFT2", "RAFT3", "RAFT4"]}
      />
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </TopDividerStyles>
      <AdventureHeadingStyles>
        <div className="imageContainer mobileImage">
          <img src="/images/logos/glacierrafting.svg" />
        </div>
        <div className="pContainer">
          <h2>Kicking Horse River Rafting</h2>
          <p>
            Rafting on the mighty Kicking Horse River, Western Canada's best
            rafting day trip, is an experience you can't miss. This Canadian
            classic will take you down exhilarating rapids through unforgettable
            scenery and gives you the chance to spot local wildlife as you
            travel down the Kicking Horse. Enjoy nature's highway in a raft!
            With rapids like Shotgun Rapids, Roller Coaster & Man Eater, your
            raft guide will teach you everything you need to know to get you and
            your team down the river safely and with all the laughs.
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
              title="The Gear"
              description="Rafts, paddles, helmets, wetsuits, boots, splash tops and personal floatation devices are just some of the gear you will be provided for this adventure."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/5d03b931-b28a-4455-0dba-29307a838b00/public"
            />
            <Card
              title="Safety Talk"
              description="Your guides will give you instructions on how to paddle and help yourself and the team get down the river safely."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/26028181-da20-486d-69f2-19cc46be8100/public"
            />
            <Card
              title="Rafting Basics"
              description="You will get a chance to practice everything you need with the instruction of your experienced guide."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/3043c3f4-7d62-4df4-6d14-d073d797c000/public"
            />
            <Card
              title="Unforgettable Scenery"
              description="Take in the views on mother nature's highway. The Kicking Horse Canyon and beautiful river views is half the fun."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/c61cf00a-32f2-41c0-09fe-b2c742189700/public"
            />
            <Card
              title="White Water Fun"
              description="Taking on the mighty Kicking Horse River, you will navigate through grade 3 and 4 rapids. Soak up the fun!"
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e9382160-5295-46f9-e62a-0921a5dc3800/public"
            />
            <Card
              title="The Team"
              description="Bring your friends or make new ones, rafting is a great team sport and teamwork is essential to conquering this challenge."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/8960e219-ea8a-4832-14de-b2f3eb74c400/public"
            />
            <Card
              title="Book In Advance"
              description="Slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/bc4d965f-26ad-408b-5bdf-92dce473c200/public"
            />
            <Card
              title="Wavier Forms"
              description="Download and read waiver forms before your trip."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/70cceb29-2205-4dd2-6a78-4adaad35d100/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>White Water Discovery</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="/images/rafting3.jpg"
                layout="fill"
                objectFit="contain"
                alt="Kicking Horse River"
              />
            </div>
          </div>
          <div className="right">
            <p>
              The Discovery trip takes you on a full-day journey from the calm
              upper canyon in the morning into big crashing white water in the
              middle canyon.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Lunch included
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                9:15am — 2:00pm
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                No experience required
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Must be at least 12 years old
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Must be at least 90lbs.
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">TBD</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/catalog/433390/atv-off-road">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>Book Now</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <h3>White Water Express (AM)</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/b77fab9d-2c77-4117-15b0-6892a96b8000/public"
                layout="fill"
                objectFit="contain"
                alt="Kicking Horse River"
              />
            </div>
          </div>
          <div className="right">
            <p>
              Skip the easy waters and get right to it with an exhilarating
              half-day of white water rapids.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                11am — 2pm
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Lunch not included
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                No experience required
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Must be at least 12 years old
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Must be at least 90lbs.
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">TBD</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/catalog/433390/atv-off-road">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>Book Now</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <h3>White Water Express (PM)</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/88bb309d-5c4a-4d5e-9c31-d1e72366a600/public"
                layout="fill"
                objectFit="contain"
                alt="Kicking Horse River"
              />
            </div>
          </div>
          <div className="right">
            <p>
              Skip the easy waters and get right to it with an exhilarating
              half-day of white water rapids.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                3:30pm — 6:15pm
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Lunch not included
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                No experience required
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Must be at least 12 years old
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Must be at least 90lbs.
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">TBD</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/catalog/433390/atv-off-road">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>Book Now</span>
                </div>
              </a>
            </Link>
          </div>
        </div>

        <h3>Heli Rafting</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="/images/rafting3.jpg"
                layout="fill"
                objectFit="contain"
                alt="Kicking Horse River"
              />
            </div>
          </div>
          <div className="right">
            <p>
              Take on the “upper” sections of the kicking horse river, then
              experience the epic “lower” section of the river exclusively
              accessible by heli.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Add more epic white water
              </li>
            </ul>

            <Link href="https://epicadventuregroup.rezdy.com/catalog/433390/atv-off-road">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>More Info</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="combo">
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
          “The guides were so knowledgeable and fun. The views were fantastic.
          The whole experience was a blast. Being on the water was thrilling and
          safe. It was one of the highlights of our trip to the Canadian
          Rockies.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Braeden, Aug. 2020</p>
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
                Please bring clothes appropriate for weather, including swimming
                outfit. Cold water gear and rafting kit will be provided.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Instructors will teach you everything you need to know with no
                experience required.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Must be 12 years or older and over 90lbs.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Photos and video of the day of rafting will be available.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                <span>
                  You can view our{" "}
                  <a href="/cancellations" target="_blank" rel="noreferrer">
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
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/dea3f523-7e6d-491b-e6c8-3e6bc9ce0400/public"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="Kicking Horse River"
              />
            </div>
          </div>
        </div>
      </AdventureSectionStyles>
      <GoogleMap location={{ lat: 51.302704, lng: -116.947875 }} zoom={15} />
      <SuggestedCombosStyles>
        <h3>Suggested Combos</h3>
        <div className="cards">
          <SuggestedCombo
            title="Stairway to Heaven"
            description="Test your nerves with a jump from an airplane from 10,000 ft and enjoy the trails, suspension bridges and treetop village of the NEW Golden Skybridge."
            bullets={[
              "Skydiving and Golden Skybridge",
              "6 hours (approx.)",
              "Must be 19 years or older",
            ]}
            image="combo7"
            price="348"
            url="https://epicadventuregroup.rezdy.com/444969/stairway-to-heaven-skydive-golden-skybridge"
          />
          <SuggestedCombo
            title="Top of the World"
            description="A day above the clouds! A jump from an airplane from 10,000 ft above the beautiful town of Golden, then scale the kicking horse mountain to 7,700 ft for panoramic views you can't forget!"
            bullets={[
              "Skydiving and Kicking Horse gondola",
              "6 hours (approx.)",
              "Must be 19 years or older",
            ]}
            price="360"
            image="combo8"
            url="https://epicadventuregroup.rezdy.com/444956/top-of-the-world-skydive-gondola-kicking-horse-resort"
          />
          <SuggestedCombo
            title="Double Trouble"
            description="Skydive for breakfast and raft the express (half day) trip in the afternoon. This day trip is an adrenaline filled memory, showcasing the best Golden has to offer!"
            bullets={[
              "Skydiving and rafting express",
              "6 hours (approx.)",
              "Must be 19 years or older",
            ]}
            price="396"
            image="combo6"
            url="https://epicadventuregroup.rezdy.com/443892/double-trouble-skydive-raft-express-combo"
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

export default Skydiving;

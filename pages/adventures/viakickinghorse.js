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
  const videoURL = "0c0a5707e64775bfb51bc4e5045b3b3c";

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
        <title>Epic Adventures | Via Ferrata Kicking Horse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <HeroImageSlider
        title="Via Ferrata Kicking Horse"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/9e4164c2-7377-4ba7-baaa-60f6ab1e9f00/public",
        ]}
        cdn={true}
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
          <img src="/images/logos/kickinghorse.svg" />
        </div>
        <div className="pContainer">
          <h2>Pure Adventure</h2>
          <p>
            Challenge yourself on the Kicking Horse Resort's via ferrata. With
            three routes on the south side of “Terminator” peak, this guided
            adventure is perfect for the adventurer of all levels. You will get
            a mountaineers view over the beautiful Columbia Valley as you scale
            the peak with your guide and provided via ferrata equipment. This
            experience starts with the Golden Eagle Express Gondola which gives
            you full access to the resort trails and Boo the bear sanctuary.
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
              title="Golden Eagle Express"
              description="Take the gondola to your guided trip at the top of the resort."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/d194cd14-2b58-4cb7-66c8-307816d82d00/public"
            />
            <Card
              title="Safety"
              description="You will be briefed and trained on all the safety procedures to complete this adventure."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/2129e6b9-f521-4856-3a3f-2bcec608eb00/public"
            />
            <Card
              title="Gear"
              description="Via Ferrata requires a climbing kit that will be provided for your trip."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/bc25c0df-002c-4dcd-c182-f657d99d5200/public"
            />
            <Card
              title="Guided"
              description="Your accredited and experienced guides will help you along the way as you navigate the mountain in small intimate groups."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/6546ff53-7d28-48b0-75ba-365bb281cc00/public"
            />
            <Card
              title="Experience"
              description="No experience is required before booking, all you need to bring is your sense of adventure."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/11e9dbeb-b46d-4322-88e9-9172f64a2800/public"
            />
            <Card
              title="Suspension Bridge"
              description="Cross the Via Ferrata suspension bridge to start your climb."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/443f909a-e095-43cf-7606-7793b2b89500/public"
            />
            <Card
              title="Ladders"
              description="Most of the climbing is supported by steel rung ladders engineered into the mountain."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/dc42d95e-1263-43dd-d80f-53ed0f5b4700/public"
            />
            <Card
              title="Views"
              description="Epic views await as you ascend the mountain peak."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/ae25c995-22c0-4ef2-d4df-603fdc52d000/public"
            />
            <Card
              title="Book in Advance"
              description="Slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/acae9bf7-72c8-4831-1000-a9d70f170600/public"
            />
            <Card
              title="Waiver Forms"
              description="Download and read waiver forms before your trip."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/8cbe9a4d-2fb7-4fce-7434-4f039eb60500/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Pioneer Route</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/856b75fc-a6f2-4b94-e8b7-38c62a457a00/public"
                layout="fill"
                objectFit="contain"
                alt="Via Ferrata"
              />
            </div>
          </div>
          <div className="right">
            <p>
              The most accessible route for those who aren't sure about via
              ferrata and want to give it a try.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 1 hour (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Full resort access
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                All gear supplied
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Includes orientation and guide
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
        <h3>Discovery Route</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/00f6c486-26b8-456b-e10f-b30570c12d00/public"
                layout="fill"
                objectFit="contain"
                alt="Via Ferrata"
              />
            </div>
          </div>
          <div className="right">
            <p>
              The most accessible route for those who aren't sure about via
              ferrata and want to give it a try.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 2 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Full resort access and bike pass
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                All gear supplied
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Includes orientation and guide
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
        <h3>Ascension Route</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e708634e-4a38-48ae-2faf-261a4bc82100/public"
                layout="fill"
                objectFit="contain"
                alt="Via Ferrata"
              />
            </div>
          </div>
          <div className="right">
            <p>
              One of the most technical sections in North America this is host
              to some serious views at 465 meters this is bliss at the top of
              the Terminator Peak.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 3 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Full resort access and bike pass
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                All gear supplied
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Includes orientation and guide
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
        <p>“Fantastic mountain climbing. Must do activity.”</p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">David M., July 2016</p>
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
                Please bring ppropriate clothing and footwear for the weather.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Instructors will teach you everything you need to know with no
                experience required.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Please bring a small backpack, bug spray, sunscreen, camera,
                water, snacks.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Must be at least 12 years old, and between 110 lbs. and 285 lbs.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                The trip will run during most weather events, but KHR reserves
                the right to reschedule or cancel if weather is not permitting.
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/4f452c2e-c08a-4077-50ac-5b958570c100/public"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="Via Ferrata Kicking Horse"
              />
            </div>
          </div>
        </div>
      </AdventureSectionStyles>
      <GoogleMap location={{ lat: 51.297568, lng: -117.048252 }} zoom={15} />
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

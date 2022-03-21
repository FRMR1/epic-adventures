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
        <title>Epic Adventures | Skydiving</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <HeroImageSlider
        title="Skydiving"
        images={["SKY1", "SKY2", "SKY3", "SKY4"]}
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
          <img src="/images/logos/scenicflights.svg" />
        </div>
        <div className="pContainer">
          <h2>Kicking Horse Aviation Scenic Flights</h2>
          <p>
            Welcome to an all-Canadian immersive experience. Fly over untouched
            glaciers and the majestic backcountry of the Canadian Rockies.
            Kicking Horse Aviation boasts the most unique flying experience in
            Glacier and Jasper National Park to give you some incredible views
            of Columbia icefields, Bugaboo and Purcell Mountain ranges, just to
            name a few. Your captain, a highly skilled bush pilot who will share
            all his knowledge and stories of the area as you navigate the skies.
            We highly recommend a flight with Kicking Horse aviation. It's Epic.
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
              title="Aeroplane"
              description="These helis can take a maximum of five adults for an intimate flight above the mountains."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/6d03be15-a37c-41aa-6b27-ed4989180800/public"
            />
            <Card
              title="Pilots"
              description="The highly skilled alpine pilot will navigate the sky and share some of the local secrets and history."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/8ad35e92-37bc-4a6a-7c92-862ff6b21000/public"
            />
            <Card
              title="Canadian"
              description="This Canadian Rockies bush flying experience is as authentic as it gets with a personal touch. 100% owner operated."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/a4a9e8be-65f3-4823-608d-400d342c5400/public"
            />
            <Card
              title="Views"
              description="Once you leave the ground and ascend into the air you get the best views with little effort, so you can relax and take it in."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e3be2b9b-00f6-48b3-7c3f-61f632f2a200/public"
            />
            <Card
              title="Explore"
              description="There is no better way to get a real sense of the Canadian Rockies and how magnificent they really are."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/1af4688e-b8ae-45ab-70bc-0a4973086400/public"
            />
            <Card
              title="Safety"
              description="Customer experience and safety is the number one priority. With high industry standards, you can have confidence with your journey into the sky."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/9479b83a-35bf-406c-b021-28b3ac6a4e00/public"
            />
            <Card
              title="Book In Advance"
              description="Slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/34dc96ab-3f25-4217-0e7e-83b6aca52400/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Columbia Icefield Tour</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="/images/skydiving6.jpg"
                layout="fill"
                objectFit="contain"
                alt="Scenic Flights"
              />
            </div>
          </div>
          <div className="right">
            <p>
              On the Columbia Icefields flight-seeing tour, you will find
              yourself looking over majestic valleys, and vast icefields in this
              unforgettable tour.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 1 hour
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Maximum four passengers
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">300</span>
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
        <h3>The Bugaboos Tour</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="/images/skydiving6.jpg"
                layout="fill"
                objectFit="contain"
                alt="Scenic Flights"
              />
            </div>
          </div>
          <div className="right">
            <p>
              The Bugaboos are a mountain range in the Purcell Mountains, with a
              famed group of granite spires popular by mountaineers and rock
              climbers. This flight takes you shoulder to shoulder alongside the
              Bugaboo Spire and other surrounding spectacular spires.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 45 min.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Maximum four passengers
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">250</span>
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
        <h3>Sir Donald Tour</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="/images/skydiving6.jpg"
                layout="fill"
                objectFit="contain"
                alt="Scenic Flights"
              />
            </div>
          </div>
          <div className="right">
            <p>
              Embark on an impressive flight tour to Glacier National Park to
              take on spectacular views of Mount Sir Donald with its classic
              Matterhorn shape. Mount Sir Donald is a mountain summit located in
              the Rogers Pass area within the Selkirk Mountain Range.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 45 min.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Maximum four passengers
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">250</span>
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
      {/* <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </TopDividerStyles>
      <TestimonialStyles>
        <p>
          “I had an incredible time skydiving! I reccommend this to anyone
          looking to skydive for the first time! It was one of the best life
          experiences! The staff were very knowledgeable and knew what they were
          doing! Made us all feel safe.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Juan G., July 2020</p>
        <p>
          “Amazing views, amazing weather, amazing staff. Everybody there went
          out of their way to make our experience memorable. Couldn't say enough
          good things. 5 stars”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Mikey O., August 2020</p>
      </TestimonialStyles>
      <BottomDividerStyles>
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </BottomDividerStyles> */}
      <AdventureSectionStyles>
        <div className="whyEpic">
          <h3>Why Epic?</h3>
          <div className="container">
            <div className="item">
              <div className="icon">
                <img src="/svg/checkmark.svg" width="25" />
              </div>
              <div className="desc">
                <h4>Highest Standards</h4>
                <p>
                  All of our operators have the years of experience required to
                  give you the best quality trip and highest industry standards.
                  They know their stuff.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/svg/checkmark.svg" width="25" />
              </div>
              <div className="desc">
                <h4>Hype Deals</h4>
                <p>
                  With every purchase you get access to local deals and offers
                  on partnered hotels, restaurants and activities to save you
                  money and connect you with local legends.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/svg/checkmark.svg" width="25" />
              </div>
              <div className="desc">
                <h4>Authentically Canadian</h4>
                <p>
                  All of our adventures are operated and owned by local people
                  and families. Your money stays local and that matters.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/svg/checkmark.svg" width="25" />
              </div>
              <div className="desc">
                <h4>Best Value</h4>
                <p>
                  We hand pick the best value trips to save you time and
                  research. Chosen by internationally experienced guides.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/svg/checkmark.svg" width="25" />
              </div>
              <div className="desc">
                <h4>Experience More</h4>
                <p>
                  Our exclusive combos and adventures will save you money, time
                  and research and let you experience more on your trip through
                  the Rockies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="twoCol">
          <div className="left">
            <h3>Additional Details</h3>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                It is the pilot's discretion to cancel anytime for flying in
                unfavourable weather.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Please arrive 15 minutes prior of departure time.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Dress comfortably for weather on the day, sunglasses are
                recommended.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                This tour runs all year round but has temperature requirements
                for flying.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                <span>
                  You can view our{" "}
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
                src="/images/skydiving5.jpg"
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
      <GoogleMap location={{ lat: 51.30054, lng: -116.98498 }} zoom={15} />
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

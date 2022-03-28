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
        <title>Epic Adventures | Columbia Icefield</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Columbia Icefield"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/750135c1-ba48-4d12-0ff4-4f86ae521900/public",
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
        <div className="imageContainer mobileImage">
          <img src="/images/logos/columbiaicefield.svg" />
        </div>
        <div className="pContainer">
          <h2>Explore The Power Of Nature</h2>
          <p>
            Discover the “Columbia Icefield Adventure”, the must-do experience
            for any resident or visitor in the Canadian Rockies. At the heart of
            the incredible Icefields Parkway is one of the largest non-polar ice
            fields in the world. Here, you'll travel on a massive Ice Explorer
            to a place where you can walk on, feel and drink from the Athabasca
            Glacier. It's the adventure of a lifetime at the Columbia Icefield.
            Ancient stories, astounding scenery and a deep sense of wonder are
            at the heart of this unforgettable experience. Then, take a
            jaw-dropping walk along the glass-floored Skywalk at the cliff's
            edge. Columbia Icefield Adventure includes Ice Explorer Tour on the
            Athabasca Glacier, admission to the Skywalk, and return
            transportation from the Glacier Discovery Centre.
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
              title="Ice Explorer"
              description="Explore the glaciers on the heavy duty 4x4 Ice Explorer."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/34a9b175-de9e-401a-91e4-a0bd3eac5a00/public"
            />
            <Card
              title="Guided"
              description="Relax and take in the informative guided ride to your destination in English and French (audio app)."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/342b71d5-3049-4f33-fab4-871d472ce100/public"
            />
            <Card
              title="Glacier"
              description="The ancient Athabasca Glacier will leave you speechless as you discover glaciology while exploring the ice."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/8fa339c1-cb8a-4bc4-73ea-079efb790000/public"
            />
            <Card
              title="Water"
              description="Drink the crystal-clear waters of the glacier."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/fa64638f-b0bb-44de-ff6d-0f78364a6900/public"
            />
            <Card
              title="Jasper National Park"
              description="Located on the edge of the Jasper National Park—a UNESCO World Heritage site."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/a3578256-6668-49cb-25e5-1da9cb910100/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Columbia Icefield Adventure</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/fbcb54ee-b19e-43c1-26c2-426d0936b900/public"
              layout="fill"
              objectFit="contain"
              alt="Columbia Icefield"
            />
          </div>
          <div className="right">
            <p>Explore the Athabasca Glacier in your guided 4x4 experience.</p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Guided tour
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Skywalk included
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
        <p>
          “Amazing time we had. These glaciers will be gone before we know it
          and this is a must do experience. Colby was our guide and he was the
          best. Very informative about history of the glaciers and was hilarious
          the whole time. Shout out to Colby who made our trip worth every
          penny.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Josh B., Aug. 2021</p>
        <p>
          “The beauty of the Rockies are amazing on the trip to the Icefields.
          The fun and uniqueness of the Glaciers and the stunning views and
          experiences on the Skywalk - don't miss it. Awesome!”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Remi C., Oct. 2021</p>
      </TestimonialStyles>
      <BottomDividerStyles>
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </BottomDividerStyles>
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
                Make sure to bring appropriate clothing and footwear for the
                weather.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Ages 5 and under ride for free but require a ticket. Prices are
                subject to change at any time.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Tours start at the Columbia Icefields discovery centre.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Tours start at the Columbia Icefields discovery centre.
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
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/618f9700-79c5-4ac1-4066-68e7edc33d00/public"
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
      <GoogleMap location={{ lat: 52.865406, lng: -118.092578 }} zoom={15} />
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

export default MaligneLake;

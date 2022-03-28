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
  const videoURL = "f98cbb39f8de0b25973dd6f3436caad0";

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
        <title>Epic Adventures | Valley Zipline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <HeroImageSlider
        title="Valley Zipline"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/f7b6ead9-f3ba-4012-1681-3903c61db700/public",
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
          {/* <img src="/images/logos/extremeyeti.png" /> */}
        </div>
        <div className="pContainer">
          <h2>The Valley's Zipline and Adventure Park</h2>
          <p>
            Hidden in the beautiful Columbia Valley, Valley Zipline Adventures
            offer a hands-on eco-tourism experience. With a course consisting of
            7 different ziplines, aerial course, climbing wall and jump tower
            this family friendly adventure park is a perfect addition to your
            trip through the Rockies. Challenge yourself on the guided zipline
            course, zig-zagging through the trees with no experience required
            you will be taught everything you need to know. Awarded the “best
            family activity” in Radium you can't go wrong with a visit to Valley
            Zipline Adventures.
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
              title="Family Adventure"
              description="Voted best family adventure in Radium."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/45182d45-f499-421b-61f2-2de00b27c300/public"
            />
            <Card
              title="Ziplines"
              description="The course offers 7 ziplines and will take about 1.5 hours to complete."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/5ff01d26-9fc5-45db-2666-d35fb29b3600/public"
            />
            <Card
              title="Gear"
              description="You will be provided with all necessary safety equipment to complete your adventures."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/a8e001a0-0918-4fba-251d-01626dcecf00/public"
            />
            <Card
              title="Guides"
              description="The accredited and experienced guides will teach you everything you need to know and help you along the way."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/96d2d24c-a773-46b9-921f-f1052f483800/public"
            />
            <Card
              title="Location"
              description="With the course up in the trees and located just outside Radium Hot Springs, this is a beautiful location with epic mountain valley views."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/ac7427ae-cfaa-43c6-2a41-885cb7256700/public"
            />
            <Card
              title="Jump Tower and Climbing Wall"
              description="Thirty-five foot climbing wall and jump tower can be reserved on the day, no booking required."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/f5b242c2-68cd-4273-e1d9-df81a18a3e00/public"
            />
            <Card
              title="Book in Advance"
              description="Zipline slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/0fb9d521-b9f5-4118-36f9-488ff0b37e00/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Zipline Tour</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/1c9fd6b9-977f-4f61-f36b-b5c76a854200/public"
                layout="fill"
                objectFit="contain"
                alt="Valley Zipline"
              />
            </div>
          </div>
          <div className="right">
            <p>Take the challenge and fly through the trees.</p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 1.5 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Gear included
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Guided trip
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Seven different ziplines
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
        <h3>Aerial Park</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/dd342860-1249-471b-3858-e44fbd5ca500/public"
                layout="fill"
                objectFit="contain"
                alt="Zipline"
              />
            </div>
          </div>
          <div className="right">
            <p>New aerial course coming soon.</p>
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
          “Great time. Everyone enjoyed themselves. We had a wide range of ages
          in our party and a great time was had by all. Our tour guides Riley
          and Caden were great.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Elizabeth S., Aug. 2021</p>
        <p>
          “Cass and Scott - best guides ever! Had so much fun. Thanks for such a
          great experience, laughter and rescues! PS Have a great season Cass!”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Lisa M., August 2021</p>
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
                Jump tower weight 45 lbs to 265 lbs. Climbing wall weight 22 lbs
                to 330 lbs. Zipline course weight 65 lbs to 250 lbs.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Please bring appropriate clothing for weather.
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/40026ce8-d74c-40ea-8519-f4cacfc1ac00/public"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="Valley Zipline"
              />
            </div>
          </div>
        </div>
      </AdventureSectionStyles>
      <GoogleMap location={{ lat: 50.585094, lng: -116.042102 }} zoom={15} />
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

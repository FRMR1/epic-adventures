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
        <title>Epic Adventures | Banff Gondola</title>
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
          <img src="/images/logos/extremeyeti.png" />
        </div>
        {/* <div className="mobileVideo">
                    <MobileVideoStyles>
                        <CloudflareVideo source={videoURL} />
                    </MobileVideoStyles>
                </div> */}
        <div className="pContainer">
          <h2>Pure Nature</h2>
          <p>
            Experience a world of beauty at the top of Sulphur Mountain. With
            alpine views of the lively town of Banff and the Bow Valley, this
            all-season operation will give you some of Banff's most iconic
            views. With mountain boardwalks to explore the top of the world
            there's photo opportunities everywhere you turn. With an impressive
            restaurant and interpretive centre, it's a great place to spend time
            with family and friends as you witness the magic of Banff National
            Park.
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
              title="Banff Gondola"
              description="Take a ride in the gondola to ascend into the alpine mountain views."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/30b55fde-9b36-4963-d480-803a2ee90900/public"
            />
            <Card
              title="All Season"
              description="Summer, winter, fall and spring: the Banff Gondola is operating daily."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/bfea3aae-07a5-4583-e162-460b30a03300/public"
            />
            <Card
              title="Mountain Boardwalk"
              description="Boardwalks are paved over the mountain ridges to gain access to different lookouts. "
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/f9e93463-ee8e-4e91-9806-9187265d2d00/public"
            />
            <Card
              title="Cafe and Restaurant"
              description="The top of the gondola houses a beautiful restaurant and café to grab some food or enjoy a latte."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/f298163c-f1c7-4eda-087c-575ef898d100/public"
            />
            <Card
              title="Alpine Views"
              description="Take in the beautiful mountain views and air as you look over the lively town of Banff and Bow Valley."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/74817fd2-f4b0-4516-2d10-02cbc21bfe00/public"
            />
            <Card
              title="Book In Advance"
              description="Slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/19a805ab-d036-41fb-5eb7-acd6483dbb00/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Tandem Skydive</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="/images/skydiving6.jpg"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="Skydiving"
              />
            </div>
          </div>
          <div className="right">
            <p>
              After a 20-minute scenic flight to altitude, you’ll nudge towards
              the edge of the plane and make the jump with an experienced tandem
              instructor. Keep your head up, smile at your personal hand cam and
              take in the stunning surroundings. After an exhilarating freefall,
              the five-minute canopy ride to earth will give you indescribable
              360° views of glacier-capped mountain ranges and intersecting
              rivers.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 2 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                9AM, 11AM, 1PM, 3PM, 5PM
              </li>
            </ul>
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
                Must be at least 19 Years old and under 230 lbs.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Skydiving is a very weather dependent activity and cancellations
                due to unsuitable weather conditions may occur. Full refunds
                will be provided if your time slot cannot be rescheduled.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                <span>
                  Schueduled closures of the Trans-Canada Highway are planned
                  through the late spring. Visit{" "}
                  <a href="https://drivebc.ca" target="_blank" rel="noreferrer">
                    drivebc.ca
                  </a>{" "}
                  for more information and for the latest road reports and
                  conditions.
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

export default MaligneLake;

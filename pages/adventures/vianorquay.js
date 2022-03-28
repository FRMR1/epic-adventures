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
  const videoURL = "93bba7585e8e74907ffcf32b9b19d1fb";

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
        <title>Epic Adventures | Via Ferrata Mt. Norquay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <HeroImageSlider
        title="Via Ferrata Mt. Norquay"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/74b8fec9-35db-4abf-8e6b-1dbc6317b500/public",
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
          <img src="/images/logos/norquay.svg" />
        </div>
        <div className="pContainer">
          <h2>Pure Adventure</h2>
          <p>
            Adventure lover: this is the one for you! Get active and enjoy the
            great outdoors of Banff National Park with this via ferrata
            adventure. Feel on top of the world, exhilarate your senses,
            experience views of Banff rarely seen. Italian for “iron road”, ia
            ferrata is an assisted climbing experience along four breathtaking
            routes on the cliffs above Mt. Norquay. Climb ladders, cross
            suspension bridges and marvel at the grandeur of the mountain vistas
            that surround you.
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
              title="Safety"
              description="You will be briefed and trained on all the safety procedures to complete this adventure."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/10cdb194-a500-46c3-1eea-19c7822f8300/public"
            />
            <Card
              title="Gear"
              description="Via Ferrata requires a climbing kit that will be provided for your trip."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/26bfeabb-45bb-4aed-f802-f0c9f8dd7800/public"
            />
            <Card
              title="Guided"
              description="Your accredited and experienced guides will help you along the way as you navigate the mountain in small intimate groups."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/d5ea2ab6-30c2-48e8-008e-67831573ee00/public"
            />
            <Card
              title="Experience"
              description="No experience is required before booking, all you need to bring is your sense of adventure."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/5f985615-8325-4f2a-0bee-b2c24db39100/public"
            />
            <Card
              title="Suspension Bridge"
              description="Cross the Via Ferrata suspension bridge."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/4aa2eeb4-6935-4501-e148-266b9469ce00/public"
            />
            <Card
              title="Ladders"
              description="Most of the climbing is supported by steel rung ladders engineered into the mountain."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/bbaedfc2-7609-42c2-91c4-576112534400/public"
            />
            <Card
              title="Views"
              description="Epic views await as you ascend the mountain peak."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/4b009846-f3cf-4c1f-e795-896e5c2b1000/public"
            />
            <Card
              title="Book in Advance"
              description="Slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/114514bb-bc22-4cca-80a7-2975ec447d00/public"
            />
            <Card
              title="Waiver Forms"
              description="Download and read waiver forms before your trip."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/d648d658-5fee-4497-853f-4cc8732bc800/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Explorer Route</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/d5b72e9c-91b3-4347-a88e-964a2bfc0b00/public"
              layout="fill"
              objectFit="contain"
              alt="Via Ferrata Mt. Norquay"
            />
          </div>
          <div className="right">
            <p>
              Spend some time with your guide, get introduced to the equipment,
              head up a few pitches and cross the suspension bridge. This is a
              great choice for those who are slightly limited on time or looking
              for an introduction to Via Ferrata.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 2.5 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum 12 years old
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum 88 lbs.
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
        <h3>Ridgewalker Route</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/190b5385-0e65-4643-0c33-f28268a74a00/public"
              layout="fill"
              objectFit="contain"
              alt="Via Ferrata Mt. Norquay"
            />
          </div>
          <div className="right">
            <p>
              To get a greater feel for heights, exposure and the full Via
              Ferrata experience, become a Ridgewalker! This half-day excursion
              takes you high up on the Norquay cliffs, climbing the Memorial,
              Sunrise and Vista buttresses – and of course, traversing the
              suspension bridge.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 4 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum 12 years old
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum 88 lbs.
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
        <h3>Alpinist Route</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/bd21a095-fdcd-4fa0-29da-d309dd221800/public"
              layout="fill"
              objectFit="contain"
              alt="Via Ferrata Mt. Norquay"
            />
          </div>
          <div className="right">
            <p>
              Alpinists are continuously on the move. This 4-4.5 hr via ferrata
              tour takes in all that the popular Ridgewalker tour offers but
              continues out, and along the ridge to the epic Norquay
              “Panoramadome”, then follows the scenic narrow crest of the
              mountain for 600m. Expect continuous moderate to strenuous
              exertion on this itinerary, with brief breaks.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 4 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum 14 years old
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum 88 lbs.
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
        <h3>Skyline Route</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/6ee0a19b-23a0-4ca4-7c35-99d957833000/public"
              layout="fill"
              objectFit="contain"
              alt="Via Ferrata Mt. Norquay"
            />
          </div>
          <div className="right">
            <p>
              The Skyline includes an exciting high traverse on a sheer rock
              wall and crosses an “airy” 55m suspension bridge. Your effort is
              amply rewarded at the top, with outstanding panoramic views where
              the Rocky Mountains stretch out in every direction. With Banff as
              a backdrop over 1000 metres below, enjoy the uber-scenic
              ridge-crest descent as it leads you back to the Cliffhouse Bistro
              to celebrate your mountaineering accomplishments.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 5 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum 14 years old
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum 88 lbs.
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
        <h3>Summiteer Route</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/b7110615-8a9f-462c-da83-089ec30db900/public"
              layout="fill"
              objectFit="contain"
              alt="Via Ferrata Mt. Norquay"
            />
          </div>
          <div className="right">
            <p>
              The Summiteer tops out at the highest point of Norquay's via
              ferrata. A continuation of the Skyline route, this 6-hour
              adventure traverses the alpine ridge and crosses an additional
              three-wire suspension bridge over an impressive couloir. Be awed
              by the breathtaking 360-degree views of the Canadian Rockies as
              you enjoy a well-earned (and included) lunch on the East Summit of
              Mt Norquay. After your tour, unwind and share in the stoke at the
              Cliffhouse Bistro with a beverage and appetizers—also included in
              your tour.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 6 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum 14 years old
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum 88 lbs.
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
        <h3>Mountaineer Route</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e765c780-3e87-47bf-e989-37e9e6707a00/public"
              layout="fill"
              objectFit="contain"
              alt="Via Ferrata Mt. Norquay"
            />
          </div>
          <div className="right">
            <p>
              Mountaineers spend up to 8 hours on the via ferrata covering over
              3km's of distance and nearly 500m of vertical gain, exploring the
              entire length of the mountain crest between the SE and NE summits.
              The longest tour, it includes all of Norquay's via ferrata routes
              into one big day! Be prepared for moderate exertion all day with
              picturesque rest stops and an included lunch up on the mountain.
              Finish your tour with a well-deserved (included) beverage and
              après at the Cliffhouse Bistro.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 8 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum 14 years old
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Minimum 88 lbs.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Includes packed lunch
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
          “Fantastic day, exhilarating, challenging and safe. Great staff. Our
          guide, AJ, engaging, knowledgeable, outgoing and help our group really
          enjoy the day and each other. Great way to see Mt Norquay, challenge
          yourself, and enjoy a day in Banff.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Lawrence C., Sept. 2019</p>
        <p>
          “My husband and I did this in our first day in Banff. The weather was
          beautiful, the guide was knowledgeable and personable. It can be
          physically challenging and not for those if you're afraid of heights
          at all. The views are wonderful. We had a great time. There is a
          restaurant that you can also get a beer at afterwards. There are
          several different levels to do the activity.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">January P., August 2020</p>
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
                Appropriate clothing for weather and sturdy closed toe shoes
                will be required. Free rentals are available but not all sizes
                are guaranteed.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Thirty minute check in prior to departure.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Instructors will teach you everything you need to know with no
                experience required.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                The trip will run during most weather conditions.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Groups sizes are 1-8 per guide.
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/83a759ea-9c39-44f4-1bf3-bd15192b7a00/public"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="Via Ferrata Mt. Norquay"
              />
            </div>
          </div>
        </div>
      </AdventureSectionStyles>
      <GoogleMap location={{ lat: 51.20291, lng: -115.597805 }} zoom={15} />
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

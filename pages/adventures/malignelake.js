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
        <title>Epic Adventures | Maligne Lake</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Maligne Lake"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/a80c6354-76d9-453c-e9a2-6be0cf362300/public",
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
          <img src="/images/logos/malignelake.svg" />
        </div>
        <div className="pContainer">
          <h2>Maligne Lake</h2>
          <p>
            Declared the “Best Boat Cruise in Canada” by 8 million Reader’s
            Digest subscribers, the Maligne Lake Cruise is an experience like no
            other. Join us on a panoramic tour across the crystal waters of
            magical Maligne Lake, fed by the glaciers of Jasper National Park.
            Glide past the jagged mountain peaks as we cruise to Spirit Island,
            a world-famous destination only accessible by boat. The Maligne Lake
            Cruise has been providing visitors with the opportunity to discover
            the world-famous Spirit Island for over 60 years through
            interpretive boat cruises in Jasper National Park. Visitors can
            explore the lake from the comfort of glass-enclosed and heated
            cruise boats while a knowledgeable guide retells Maligne’s history
            and explains its geology, wildlife, weather, flora and fauna.
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
              title="Cruise"
              description="Relax and take in the informative guided ride across the crystal-clear waters of Maligne Lake."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/c20cd904-9f5d-41fd-5b55-47895cf87b00/public"
            />
            <Card
              title="Boat"
              description="The classic lake cruiser will glide across the waters to your destinations."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/1adbc0df-cf4c-4ecb-75f3-44b52f92e600/public"
            />
            <Card
              title="Spirit Island"
              description="Stop at Spirit Island and enjoy a shirt nature trail to a viewing platform."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/dcb96afe-677e-41fe-51d7-dbfedee39300/public"
            />
            <Card
              title="Restaurants"
              description="Cafes and restaurants available. The View restaurant and the Lakehouse café."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e990de8f-d68e-44c8-3dbb-aaa0f23b1400/public"
            />
            <Card
              title="Jasper National Park"
              description="Located in Jasper National Park a UNESCO World Heritage site."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/4463856d-ee9d-4d46-b4f7-52dc7cfcd300/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Classic Cruise</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/bc37d0dd-0f43-4f24-150d-d48e6d520100/public"
                layout="fill"
                objectFit="contain"
                alt="Maligne Lake"
              />
            </div>
          </div>
          <div className="right">
            <p>Cruise across the Maligne lake and spirit island.</p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 1.5 hours (approx.)
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
          “AMAZING boat cruise of the most gorgeous lake!! Fabulous crew. They
          LOVE their job and it's contagious. Some of the most gorgeous scenery
          I have ever seen!! And perfectly accessed by this boat.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Marcia E., Jan. 2022</p>
        <p>
          “Our cruise was the last of the season and our guides went out of
          their way to make it incredible! Their friendly banter and knowledge
          of the area kept us entertained the entire cruise! The kids loved
          learning from captain Meghan and Emily! Thanks again for an amazing
          excursion!”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Giordanofam, Oct. 2022</p>
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
                Please bring appropriate clothing and footwear for the weather.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Must be 18+ years old with government ID for beer cruise.
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
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/def27038-f1ee-4ed6-0e78-d2b710568100/public"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="Maligne Lake"
              />
            </div>
          </div>
        </div>
      </AdventureSectionStyles>
      <GoogleMap location={{ lat: 52.870853, lng: -117.8125 }} zoom={15} />
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

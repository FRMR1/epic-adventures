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
        <title>Epic Adventures | Paragliding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Paragliding"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/c7133c02-7b94-45d2-d590-323950a0d500/public",
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
          <h2>Paragliding Over The Canadian Rockies</h2>
          <p>
            Take your sense of adventure to new heights and soar like an eagle
            over the Canadian Rockies. This once in a lifetime experience is a
            can't be missed opportunity while visiting Golden or surrounding
            areas. With your experienced tandem paragliding pilot, you will
            navigate the open skies over the beautiful Columbia Valley and the
            town of Golden in British Columbia. This unique experience is
            accessible to anyone with a sense of adventure and is the only
            paragliding location in the area that offers tandem paragliding
            experiences.
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
              title="Flight"
              description="Take off from the top of Mount 7, a world-renowned paragliding launching site."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/0b0fa6d5-1a82-4129-e8d4-560f1d0e2700/public"
            />
            <Card
              title="Views"
              description="Experience the breath-taking views while you and you pilot navigate the blue skies."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/03a6ff5d-0a50-495d-a175-2859b3613300/public"
            />
            <Card
              title="Adventure"
              description="Truly a magical adventure and a one-of-a-kind experience in the Canadian Rockies."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/9dc6939d-9595-44b5-83a2-14ecc75f2d00/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles>
        <h3>Our Epic Adventures</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/ae6d4f86-3be4-4e41-cbd6-6e6566c2bc00/public"
                layout="fill"
                objectFit="contain"
                alt="Paragliding"
              />
            </div>
          </div>
          <div className="right">
            <h3>Tandem Paraglide</h3>
            <p>
              Take off from the top of Mount 7 and fly over the beautiful
              Columbia Valley and experience the Canadian Rockies like never
              before.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                No experience required
              </li>
            </ul>
            <Link href="https://altitudeadventures.ca">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>More Info</span>
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
                alt="Combo"
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
      <WhyEpic style={{ marginTop: "10rem" }} />

      <GoogleMap location={{ lat: 51.24284, lng: -116.9227 }} zoom={15} />
      <SuggestedCombosStyles>
        <h3>Suggested Adventures</h3>
        <div className="cards">
          <SuggestedCombo
            title="Skydiving"
            description="Feel the wind under your wings as you take on the Rockies from above the clouds at 120MPH."
            image="a45c1c16-675c-4e13-a3a5-5cee310af300"
            url="/adventures/skydiving"
            internal={true}
          />
          <SuggestedCombo
            title="Heli Flight"
            description="Get the best seat above the mountains, take a helicopter over the Three Sisters mountain tops and experience the Rockies in style."
            image="c5ed939e-308e-4c19-58a7-cb8e744d6b00"
            url="/adventures/heliflight"
            internal={true}
          />
          <SuggestedCombo
            title="Canyoning"
            description="Repel waterfalls, swim the canyon waters and explore the mountains a little differently, this is a trip of a lifetime."
            image="b38ca2d9-dbd2-4f6e-95ca-49b634538f00"
            url="/adventures/canyoning"
            internal={true}
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

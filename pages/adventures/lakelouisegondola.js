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
        <title>Epic Adventures | Lake Louise Gondola</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Lake Louise Gondola"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/27651aeb-f49b-44ca-d6c1-8e69b8673b00/public",
        ]}
        cdn={true}
        needsVideo={true}
      />
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </TopDividerStyles>
      <AdventureHeadingStyles>
        <div className="oneCol">
          <h2>Coming soon.</h2>
          <p>
            Check back soon, as we are always adding new adventures, combos and
            information to make your trip to the Canadian Rockies epic!
          </p>
        </div>
      </AdventureHeadingStyles>
      <BottomDividerStyles marginTop="4.7rem">
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </BottomDividerStyles>
      <SuggestedCombosStyles>
        <h3>Suggested Adventures</h3>
        <div className="cards">
          <SuggestedCombo
            title="Golden Gondola"
            description="Take the Golden Eagle Express Gondola to the top of the resort to get those mountain views and access hiking trails."
            image="545e27e2-072f-4e13-253f-40898912f800"
            url="/adventures/goldengondola"
            internal={true}
          />
          <SuggestedCombo
            title="Via Ferrata Kicking Horse"
            description="Challenge yourself on this guided trip on the side of the mountain peaks. With unforgettable views this outdoor adventure you won't forget."
            image="11e9dbeb-b46d-4322-88e9-9172f64a2800"
            url="/adventures/viakickinghorse"
            internal={true}
          />
          <SuggestedCombo
            title="Rafting Kicking Horse River"
            description="Take on the world famous Kicking Horse River. With rapids like Man Eater and Shot Gun, this river is an experience that can't be missed."
            image="c61cf00a-32f2-41c0-09fe-b2c742189700"
            url="/adventures/kickinghorseriver"
            internal={true}
          />
        </div>
      </SuggestedCombosStyles>
      <ReadyToBook />
      <FooterDividerStyles>
        <img
          src="/svg/divider-top2.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </FooterDividerStyles>
    </>
  );
};

export default Skydiving;

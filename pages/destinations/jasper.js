import Head from "next/head";
import SuggestedCombo from "../../components/SuggestedCombo";
import ReadyToBook from "../../components/ReadyToBook";
import ActivityTile from "../../components/ActivityTile";
import { TestimonialStyles } from "../../components/styles/TestimonialStyles";
import { TopDividerStyles } from "../../components/styles/TopDividerStyles";
import { CardSectionStyles } from "../../components/styles/CardSectionStyles";
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles";
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles";
import { SuggestedCombosStyles } from "../../components/styles/SuggestedCombosStyles";
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles";
import { AdventureSectionStyles } from "../../components/styles/AdventureSectionStyles";
import { BookAdventureStyles } from "../../components/styles/BookAdventureStyles";
import { ActivityTilesStyles } from "../../components/styles/ActivityTilesStyles";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";
import Divider from "../../components/Divider";
import Divider2 from "../../components/Divider2";
import { DiningTwoColStyles } from "../../components/styles/DiningTwoColStyles";
import Carousel from "react-multi-carousel";
import Card from "../../components/Card";
import Link from "next/link";
import Image from "next/image";
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

const Jasper = () => {
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
        <title>Epic Adventures | Jasper National Park</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Jasper National Park"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/28304fd2-499a-4b2d-3021-86790e04ac00/public",
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
          <h2>Where The Wild Roam</h2>
          <p>
            Jasper National Park is full of wildlife and adventures you would
            expect on a trip through the wild west. With access to the Columbia
            Icefield and wild canyons, this park is a treat for the adventurer
            with hiking, biking, and climbing throughout the park. Whether it's
            a road trip or a boat cruise on the pristine Maligne lake,
            everywhere you look will take your breath away. Jasper is a must
            visit national park in the heart of the Canadian Rockies.
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

      <ActivityTilesStyles>
        <h2>Things To Do In Jasper</h2>
        <div className="tiles">
          <ActivityTile
            location="Jasper"
            title="Columbia Icefield"
            desc="An unforgettable tour onto the glaciers with this epic off road bus."
            img="34a9b175-de9e-401a-91e4-a0bd3eac5a00"
            url="/adventures/columbiaicefield"
          />
          <ActivityTile
            location="Jasper"
            title="Skywalk"
            desc="Take a glass floored experience over the edge and see the epic views of the glaciers."
            img="e0b73138-6d65-4b1e-fc92-6f2c9631f800"
            url="/adventures/skywalk"
          />
          <ActivityTile
            location="Jasper"
            title="Maligne Lake Cruise"
            desc="A boutique cruise over the pristine lake and untouched scenery."
            img="c20cd904-9f5d-41fd-5b55-47895cf87b00"
            url="/adventures/malignelake"
          />
          <ActivityTile
            location="Jasper"
            title="Skytram"
            desc="See the park from above and witness to the pure magnitude of the Rockies."
            img="3fd3e00c-5d89-478c-a4be-26ec8fd99b00"
            url="/adventures/skytram"
          />
          <ActivityTile
            location="Jasper"
            title="Summer Combos"
            desc="Experience more and save with these exclusive combos."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
          <ActivityTile
            location="Jasper"
            title="Winter Adventures"
            desc="Stay tuned as we work on delivering you the best winter experiences for upcoming season."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
          <ActivityTile
            location="Jasper"
            title="Winter Combos"
            desc="Stay tuned as we work on delivering you the best winter experiences for upcoming season."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
          <ActivityTile
            location="Jasper"
            title="Dine In Jasper"
            desc="Check out our local picks for the best dining in Jasper."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/eat/jasper"
          />
          <ActivityTile
            location="Jasper"
            title="Stay In Jasper"
            desc="Check out our local picks for the best hotel and hostels in Jasper."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/stay/jasper"
          />
          <div className="hidden-flex-item" />
        </div>
      </ActivityTilesStyles>

      <WhyEpic />

      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </TopDividerStyles>
      <TestimonialStyles></TestimonialStyles>
      <BottomDividerStyles>
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </BottomDividerStyles>
      <CardSectionStyles>
        <h3>Other Destinations</h3>
        <div className="cards">
          <Carousel
            responsive={responsive}
            infinite={true}
            swipeable={true}
            draggable={true}
            containerClass="padding-100-px"
          >
            <Card
              title="Golden"
              description="This rugged mountain town is home to some of the most unique and adventurous activities in the Rockies."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/aa51019f-fff9-4f19-e298-a8762e747700/public"
              a="/destinations/golden"
            />
            <Card
              title="Lake Louise"
              description="Take in the views on mother nature's highway. The Kicking Horse Canyon and beautiful river views is half the fun."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/0943d0b7-a35f-45aa-ed5c-4256bc999e00/public"
              a="/destinations/lakelouise"
            />
            <Card
              title="Canmore"
              description="You will get a chance to practice everything you need with the instruction of your experienced guide."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/8be23e5e-7053-455f-9aad-446ed873f200/public"
              a="/destinations/canmore"
            />
            <Card
              title="Banff"
              description="Canada's premier and most historic national park, full of wildlife and mountain scapes, this place must be experienced."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/50e00f0d-f030-4c8c-ef45-389cb524e900/public"
              a="/destinations/banffnationalpark"
            />
          </Carousel>
        </div>
      </CardSectionStyles>
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

export default Jasper;

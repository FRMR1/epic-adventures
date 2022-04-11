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

const LakeLouise = () => {
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
        <title>Epic Adventures | Lake Louise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Lake Louise"
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
          style={{ marginLeft: "-.1rem" }}
        />
      </TopDividerStyles>
      <AdventureHeadingStyles>
        <div className="oneCol">
          <h2>Purely Canadian</h2>
          <p>
            With the beautiful Chateau overlooking the pristine waters of Lake
            Louise, this mountain village within Banff National Park is a great
            spot for a photo shoot, hike or take the Lake Louise Resort gondola
            above the mountains to get the epic views. With Moraine Lake close
            by, this is a fantastic stop over or stay.
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
        <h2>Things To Do In Lake Louise</h2>
        <div className="tiles">
          <ActivityTile
            location="Lake Louise"
            title="Lake Louise Gondola"
            desc="Take a higher perspective at Lake Louise Resorts Gondola to gain access to unreal views of the valley, Lake and access to hiking trails."
            img="4b009846-f3cf-4c1f-e795-896e5c2b1000"
            url="/adventures/lakelouisegondola"
          />
          <ActivityTile
            location="Lake Louise"
            title="Summer Combos"
            desc="Experience more and save with these exclusive combos."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
          <ActivityTile
            location="Lake Louise"
            title="Winter Adventures"
            desc="Stay tuned as we work on delivering you the best winter experiences for upcoming season."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
          <ActivityTile
            location="Lake Louise"
            title="Winter Combos"
            desc="Stay tuned as we work on delivering you the best winter experiences for upcoming season."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
          <ActivityTile
            location="Lake Louise"
            title="Dine In Lake Louise"
            desc="Check out our local picks for the best dining in Lake Louise."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/eat/lakelouise"
          />
          <ActivityTile
            location="Lake Louise"
            title="Stay In Lake Louise"
            desc="Check out our local picks for the best hotel and hostels in Lake Louise."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/stay/lakelouise"
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
              title="Jasper"
              description="At the heart of the Canadian Rockies, Jasper National Park is the ultimate mountain escape."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/2d3202e9-d19a-4c57-ad70-68dec4fcd600/public"
              a="/destinations/jasper"
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

export default LakeLouise;

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

const BanffNationalPark = () => {
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
        <title>Epic Adventures | Banff National Park</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Banff National Park"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/4b4cb29d-5c20-4ca4-150b-aff0254d7600/public",
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
          <h2>A Canadian Icon</h2>
          <p>
            Banff National Park is one of the most beautiful places you will
            ever visit. Filled with some of Canada's most famous postcard views.
            The park and town of Banff is a must visit destination for world and
            domestic travellers alike. The park is filled with famous mountain
            peaks and a history that shaped a country. In the town of Banff you
            will find world class restaurants and hotels and is your gateway to
            some unique tours through the park. The Banff Gondola will give you
            access to views of the town and the Bow Valley.
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
        <h2>Things To Do In Banff</h2>
        <div className="tiles">
          <ActivityTile
            location="Banff"
            title="Via Ferrata Mt. Norquay"
            desc="Take on Mount Norquay and get the best views of the town of
                Banff and the bow valley, challenge yourself."
            img="4b009846-f3cf-4c1f-e795-896e5c2b1000"
            url="/adventures/vianorquay"
          />
          <ActivityTile
            location="Banff"
            title="Caving"
            desc="Explore underground in this unique experience inside the Bow Valley mountains. This trip will expand your relationship with the mountains and local habitat."
            img="66ee2fee-ee8a-4ac0-1454-3ab1da1e7100"
            url="/adventures/caving"
          />
          <ActivityTile
            location="Banff"
            title="Banff Gondola"
            desc="Above the clouds and town of Banff, the gondola will give access to a bird's eye view as you breathe in the fresh mountain air, this is a must do while on your visit."
            img="f9e93463-ee8e-4e91-9806-9187265d2d00"
            url="/adventures/banffgondola"
          />
          <ActivityTile
            location="Banff"
            title="Lake Minnewanka"
            desc="Take a trip on the pristine waters of the lake on this boat tour nestled in the mountains just outside of the town of Banff."
            img="1adbc0df-cf4c-4ecb-75f3-44b52f92e600"
            url="/adventures/lakeminnewanka"
          />
          <ActivityTile
            location="Banff"
            title="Heli Flight"
            desc="Get the best seat above the mountains, take a helicopter over the Three Sisters mountain tops and experience the Rockies in style."
            img="c5ed939e-308e-4c19-58a7-cb8e744d6b00"
            url="/adventures/heliflight"
          />
          <ActivityTile
            location="Banff"
            title="Summer Combos"
            desc="Experience more and save with these exclusive combos."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
          <ActivityTile
            location="Banff"
            title="Winter Adventures"
            desc="Stay tuned as we work on delivering you the best winter experiences for upcoming season."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
          <ActivityTile
            location="Banff"
            title="Winter Combos"
            desc="Stay tuned as we work on delivering you the best winter experiences for upcoming season."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
          <ActivityTile
            location="Banff"
            title="Dine In Banff"
            desc="Check out our local picks for the best dining in Banff."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/eat/banff"
          />
          <ActivityTile
            location="Banff"
            title="Stay In Banff"
            desc="Check out our local picks for the best hotel and hostels in Banff."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/stay/golden"
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
              title="Lake Louise"
              description="Take in the views on mother nature's highway. The Kicking Horse Canyon and beautiful river views is half the fun."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/0943d0b7-a35f-45aa-ed5c-4256bc999e00/public"
              a="/destinations/lakelouise"
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

export default BanffNationalPark;

import Head from "next/head";
import ReadyToBook from "../../components/ReadyToBook";
import ActivityTile from "../../components/ActivityTile";
import { TestimonialStyles } from "../../components/styles/TestimonialStyles";
import { TopDividerStyles } from "../../components/styles/TopDividerStyles";
import { CardSectionStyles } from "../../components/styles/CardSectionStyles";
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles";
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles";
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles";
import { ActivityTilesStyles } from "../../components/styles/ActivityTilesStyles";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Card from "../../components/Card";
import WhyEpic from "../../components/WhyEpic";

const HeroImageSlider = dynamic(
  () => import("../../components/HeroImageSlider"),
  {
    ssr: false,
  }
);

const Canmore = () => {
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
        <title>Epic Adventures | Canmore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Canmore"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/9864fb75-30de-4bab-d676-8a77fcf3ad00/public",
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
          <h2>A Mountain Getaway to Adventure</h2>
          <p>
            Canmore is a metropolis within the Rockies and a gateway to many
            adventures you can't do within a national park. Surrounded by
            magical mountain peaks, this town is home to many Bow Valley locals
            and wildlife. Here you can set up camp to experience the very
            eastern stretch of the Rockies and Bow Valley. Take a heli-tour or
            explore the caves, Canmore is an outdoors mecca bringing in rock
            climbers, mountaineers, and hikers from all over the world. The town
            is also host to large selection of boutique brewers and
            restaurateurs.
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
        <h2>Things To Do In Canmore</h2>
        <div className="tiles">
          <ActivityTile
            location="Canmore"
            title="Canyoning"
            desc="Repel waterfalls, swim the canyon waters and explore the mountains a little differently, this is a trip of a lifetime."
            img="b38ca2d9-dbd2-4f6e-95ca-49b634538f00"
            url="/adventures/canyoning"
          />
          <ActivityTile
            location="Canmore"
            title="Caving"
            desc="Take yourself underground in this unique experience inside the bow valley mountains. This trip will expand your relationship with the mountains and local habitat."
            img="c3eff5e5-8bc1-45a6-8ab3-07dfb6cf5800"
            url="/adventures/caving"
          />
          <ActivityTile
            location="Canmore"
            title="Heli Flight"
            desc="Get the best seat above the mountains, take a helicopter over the Three Sisters mountain tops and experience the Rockies in style."
            img="c5ed939e-308e-4c19-58a7-cb8e744d6b00"
            url="/adventures/heliflight"
          />
          <ActivityTile
            location="Canmore"
            title="Rafting Kananaskis River"
            desc="A classic rafting trip through the foot hills of the Rockies, blast the fun white-water and surf some waves."
            img="e7aad868-4c83-40b4-7998-1dd443781f00"
            url="/adventures/kananaskisriver"
          />
          <ActivityTile
            location="Canmore"
            title="Summer Combos"
            desc="Experience more and save with these exclusive combos."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
          <ActivityTile
            location="Canmore"
            title="Winter Adventures"
            desc="Stay tuned as we work on delivering you the best winter experiences for upcoming season."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
          <ActivityTile
            location="Canmore"
            title="Winter Combos"
            desc="Stay tuned as we work on delivering you the best winter experiences for upcoming season."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
          <ActivityTile
            location="Canmore"
            title="Dine In Canmore"
            desc="Check out our local picks for the best dining in Canmore."
            img="6b848b34-823e-42a1-4144-13d5cd5fae00"
            url="/eat/canmore"
          />
          <ActivityTile
            location="Canmore"
            title="Stay In Canmore"
            desc="Check out our local picks for the best hotel and hostels in Canmore."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/stay/canmore"
          />
          {/* <div className="hidden-flex-item" /> */}
        </div>
      </ActivityTilesStyles>

      <WhyEpic style={{ marginTop: "10rem" }} />

      {/* <TopDividerStyles>
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
      </BottomDividerStyles> */}
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
              title="Lake Louise"
              description="Take in the views on mother nature's highway. The Kicking Horse Canyon and beautiful river views is half the fun."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/0943d0b7-a35f-45aa-ed5c-4256bc999e00/public"
              a="/destinations/lakelouise"
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

export default Canmore;

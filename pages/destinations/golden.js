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

const Golden = () => {
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
        <title>Epic Adventures | Golden</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Golden"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/3a5cd7e2-a98f-480e-03c4-f34d6bb65100/public",
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
          <h2>The Adventure Capital</h2>
          <p>
            Located in the beautiful Columbia Valley in British Columbia, this
            rugged mountain town is an adventure hub. On the outside, its
            industrial rail and logging history carves its streets, but home to
            the Kicking Horse River and some of Canada's most notorious mountain
            peaks, this place has it all within a 20 minute drive. From
            skydiving over the Rockies, taking on Canada's highest suspension
            bridge and giant swing, to the world-famous epic white water of the
            Kicking Horse River. A hidden gem within the Canadian Rockies!
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
        <h2>Things To Do In Golden</h2>
        <div className="tiles">
          <ActivityTile
            location="Golden"
            title="Rafting Kicking Horse River"
            desc="Take on the world famous Kicking Horse River. With rapids like Man Eater and Shot Gun, this river is an experience that can't be missed."
            img="c61cf00a-32f2-41c0-09fe-b2c742189700"
            url="/adventures/kickinghorseriver"
          />
          <ActivityTile
            location="Golden"
            title="Skydiving"
            desc="Feel the wind under your wings as you take on the Rockies from above the clouds at 120MPH."
            img="a45c1c16-675c-4e13-a3a5-5cee310af300"
            url="/adventures/skydiving"
          />
          <ActivityTile
            location="Golden"
            title="ATV Off-Road"
            desc="Take on the Backcountry of the Columbia Valley on your own ATV and take the road less travelled."
            img="bdf4b029-7c13-4887-724a-b0cf7db54700"
            url="/adventures/atv"
          />
          <ActivityTile
            location="Golden"
            title="Paragliding"
            desc="Take off from the top of Mount 7 and soar like an eagle over the beautiful Columbia Valley and experience the Rockies like never before."
            img="ae6d4f86-3be4-4e41-cbd6-6e6566c2bc00"
            url="/adventures/paragliding"
          />
          <ActivityTile
            location="Golden"
            title="Valley Zipline"
            desc="As you navigate the course with your adventure guide this zipline course will take you through the tree tops at high speeds."
            img="ac7427ae-cfaa-43c6-2a41-885cb7256700"
            url="/adventures/zipline"
          />
          <ActivityTile
            location="Golden"
            title="Mountain Biking"
            desc="Mountain biking at the Kicking Horse resort is an epic day on world-class trails, maintain and constructed by the trail crew of the resort."
            img="69256104-8b47-41b1-48a2-d88cee247100"
            url="/adventures/biking"
          />
          <ActivityTile
            location="Golden"
            title="Via Ferrata Kicking Horse"
            desc="Challenge yourself on this guided trip on the side of the mountain peaks. With unforgettable views this outdoor adventure you won't forget."
            img="11e9dbeb-b46d-4322-88e9-9172f64a2800"
            url="/adventures/viakickinghorse"
          />
          <ActivityTile
            location="Golden"
            title="Golden Gondola"
            desc="Take the Golden Eagle Express Gondola to the top of the resort to get those mountain views and access hiking trails."
            img="545e27e2-072f-4e13-253f-40898912f800"
            url="/adventures/goldengondola"
          />
          <ActivityTile
            location="Golden"
            title="Golden Skybridge"
            desc="The new Golden Skybridge, home to Canada's highest suspension bridges, zipline, giant swing and treetop adventure park."
            img="e4f24150-dfa8-4425-9ece-b3c0878e1a00"
            url="/adventures/skybridge"
          />
          <ActivityTile
            location="Golden"
            title="Scenic Flight"
            desc="Charter your own plane to glaciers and above the mountains for some serious views of the wild back country."
            img="e3be2b9b-00f6-48b3-7c3f-61f632f2a200"
            url="/adventures/scenicflight"
          />
          <ActivityTile
            location="Golden"
            title="Summer Combos"
            desc="Experience more and save with these exclusive combos."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
          <ActivityTile
            location="Golden"
            title="Winter Adventures"
            desc="Stay tuned as we work on delivering you the best winter experiences for upcoming season."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
          <ActivityTile
            location="Golden"
            title="Winter Combos"
            desc="Stay tuned as we work on delivering you the best winter experiences for upcoming season."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
          <ActivityTile
            location="Golden"
            title="Dine In Golden"
            desc="Check out our local picks for the best dining in Golden."
            img="6b848b34-823e-42a1-4144-13d5cd5fae00"
            url="/eat/golden"
          />
          <ActivityTile
            location="Golden"
            title="Stay In Golden"
            desc="Check out our local picks for the best hotel and hostels in Golden."
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/stay/golden"
          />
          <div className="hidden-flex-item" />
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
              title="Canmore"
              description="You will get a chance to practice everything you need with the instruction of your experienced guide."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/8be23e5e-7053-455f-9aad-446ed873f200/public"
              a="/destinations/canmore"
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

export default Golden;

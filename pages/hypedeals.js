import Head from "next/head";
import ReadyToBook from "../components/ReadyToBook";
import { TopDividerStyles } from "../components/styles/TopDividerStyles";
import { BottomDividerStyles } from "../components/styles/BottomDividerStyles";
import { FooterDividerStyles } from "../components/styles/FooterDividerStyles";
import { AdventureHeadingStyles } from "../components/styles/AdventureHeadingStyles";
import dynamic from "next/dynamic";
import { AboutSectionStyles } from "../components/styles/AboutSectionStyles";
import "react-multi-carousel/lib/styles.css";
import WhyEpic from "../components/WhyEpic";
import { ActivityTilesStyles } from "../components/styles/ActivityTilesStyles";
import ActivityTile from "../components/ActivityTile";

const CloudflareVideo = dynamic(() => import("../components/CloudflareVideo"), {
  ssr: false,
});

const HeroImageSlider = dynamic(() => import("../components/HeroImageSlider"), {
  ssr: false,
});

const CanadianRockies = () => {
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
        <title>Epic Rockies | Hype Deals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Hype Deals"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/0da08f7d-74c3-440a-e480-806ec1f2a300/public",
        ]}
        needsVideo={true}
        cdn={true}
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
          <h2>Hype Deals With Local Legends</h2>
          <p>
            We teamed up with some fantastic businesses to give you local deals!
            With any purchase of our epic adventures or combos we will also give
            you access on offers for hotels, restaurants and activities
            throughout the Rockies. How Epic is that!
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

      <AboutSectionStyles>
        <div className="logos">
          <h3 className="center" style={{ marginTop: "0" }}>
            Our Hype Team
          </h3>
          <div className="grid grid2">
            <img src="/images/logos/rockwater.svg" />
            <img src="/images/logos/pursuit.svg" />
            <img src="/images/logos/papabears.svg" />
            <img src="/images/logos/mels.svg" />
            <img src="/images/logos/kickinghorse-dark.svg" />
            <img src="/images/logos/eddieburger.svg" />
            <img src="/images/logos/dreamcatcher.svg" />
            <img src="/images/logos/block.svg" />
            <img src="/images/logos/banffave.png" />
            <img src="/images/logos/blake.svg" />
            <img src="/images/logos/island.gif" />
            <img src="/images/logos/basecamp.svg" />
          </div>
        </div>
      </AboutSectionStyles>

      <ActivityTilesStyles>
        <h2>Book Now</h2>
        <div className="tiles" style={{ marginBottom: "15rem" }}>
          <ActivityTile
            location="Canadian Rockies"
            title="Summer Adventures"
            desc="Check out our summer adventures!"
            img="a45c1c16-675c-4e13-a3a5-5cee310af300"
            url="/adventures"
          />
          <ActivityTile
            location="Canadian Rockies"
            title="Winter Adventures"
            desc="Check out our winter adventures!"
            img="bfea3aae-07a5-4583-e162-460b30a03300"
            url="/adventures"
          />
          <ActivityTile
            location="Canadian Rockies"
            title="Summer Combos"
            desc="Check out our summber combos!"
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
          <ActivityTile
            location="Canadian Rockies"
            title="Winter Combos"
            desc="Check out our winter combos!"
            img="ea465914-9570-4ebe-60d1-50dd6fda7d00"
            url="/combos"
          />
        </div>
      </ActivityTilesStyles>

      <WhyEpic style={{ marginBottom: "0" }} />
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

export default CanadianRockies;

import Head from "next/head";
import { TopListStyles } from "../../components/styles/TopListStyles";
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles";
import ReadyToBook from "../../components/ReadyToBook";
import { HeroImageStyles } from "../../components/styles/HeroImageStyles";
import { TopDividerStyles } from "../../components/styles/TopDividerStyles";
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles";
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles";
import Link from "next/link";
import HeroImageSlider from "../../components/HeroImageSlider";

const ListPage = () => {
  return (
    <>
      <Head>
        <title>Epic Adventures | Top Ten Things To Do In Golden</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Top Ten Things To Do In Golden, BC"
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
          style={{ marginLeft: "-.2rem" }}
        />
      </TopDividerStyles>
      <AdventureHeadingStyles>
        <div className="oneCol">
          <p style={{ fontSize: "2rem" }}>
            Golden, British Columbia, is a hidden gem of outdoor adventure and
            stunning natural beauty. Whether you're an adrenaline junkie or
            simply looking for a peaceful escape, Golden has something to offer
            everyone. Here are the top ten things to do in Golden and why
            they're worth checking out.
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
      <TopListStyles>
        <div className="list">
          <ul>
            <li>
              Skydiving - Golden is known for its breathtaking views, and
              there's no better way to experience them than from 10,000 feet in
              the air. Skydiving with Extreme Yeti is an unforgettable adventure
              that will leave you with memories to last a lifetime.
            </li>
            <li>
              Rafting on the Kicking Horse River - The Kicking Horse River is
              one of the best places in Canada to go whitewater rafting. The
              river offers a range of rapids suitable for both beginners and
              experienced rafters, and the scenery along the way is simply
              stunning.
            </li>
            <li>
              ATV tours - Take a guided tour through the beautiful forests and
              mountains surrounding Golden on an ATV. With Golden ATV
              Adventures, you'll have the opportunity to explore some of the
              most remote and picturesque areas of the region.
            </li>
            <li>
              The Golden Skybridge - This incredible suspension bridge spans 130
              meters across a deep canyon, offering breathtaking views of the
              surrounding mountains and valleys.
            </li>
            <li>
              The Canyon Swing at the Golden Skybridge - For the ultimate
              thrill-seeker, the Canyon Swing at the Golden Skybridge is a
              must-do. This adrenaline-pumping experience sends you soaring
              across the canyon at speeds of up to 140 km/h.
            </li>
            <li>
              Zipline - Soar through the treetops and over the rushing waters of
              the Kicking Horse River on a zipline adventure. With multiple
              ziplines to choose from, this is an activity the whole family can
              enjoy.
            </li>
            <li>
              Family rafting on the Kicking Horse - If you're looking for a more
              family-friendly rafting experience, the Kicking Horse River has
              plenty of options. Glacier Rafting Company offers guided tours
              suitable for children as young as 5, making this an activity the
              whole family can enjoy together.
            </li>
            <li>
              Coffee at Papa Bears - After all of that adventure, you'll need a
              good cup of coffee. Papa Bears Caffe is a cozy and welcoming
              coffee shop in the heart of Golden, serving up delicious coffee,
              tea, and treats.
            </li>
            <li>
              Scenic flight - Get a bird's-eye view of the stunning mountains
              and glaciers surrounding Golden on a scenic flight. With Kicking
              horse Aviation, you'll have the opportunity to see the region from
              a whole new perspective.
            </li>
            <li>
              Hiking - With so much natural beauty surrounding Golden, hiking is
              a must-do activity. Whether you're a seasoned hiker or just
              looking for a leisurely stroll, there are plenty of trails to
              choose from, each offering its own unique views and experiences.
            </li>
          </ul>
        </div>
      </TopListStyles>
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

export default ListPage;

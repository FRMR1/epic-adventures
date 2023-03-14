import Head from "next/head";
import { TopListStyles } from "../../components/styles/TopListStyles";
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles";
import ReadyToBook from "../../components/ReadyToBook";
import { HeroImageStyles } from "../../components/styles/HeroImageStyles";
import { TopDividerStyles } from "../../components/styles/TopDividerStyles";
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles";
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles";
import HeroImageSlider from "../../components/HeroImageSlider";
import { HeroVideoStyles } from "../../components/styles/HeroVideoStyles";
import CloudflareVideo from "../../components/CloudflareVideo";

const ListPage = () => {
  const videoURL = "ad1d8e9d786654e62cbe2681a546ba6c";

  return (
    <>
      <Head>
        <title>Epic Adventures | Rafting on the Kicking Horse River</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <HeroImageSlider
        title="Rafting on the Kicking Horse River"
        images={["RAFT1", "RAFT2", "RAFT3", "RAFT4"]}
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
            Rafting on the Kicking Horse River in British Columbia is an
            adventure that should not be missed. The river offers a unique
            combination of adrenaline-pumping rapids, breathtaking scenery, and
            an unforgettable experience. Whether you are a seasoned rafter or a
            first-timer, the Kicking Horse River offers an experience that is
            perfect for all adventure enthusiasts.
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
              Adrenaline-Pumping Rapids: The Kicking Horse River is known for
              its thrilling rapids. The river is classified as a class IV+
              river, which means that it is not for the faint-hearted. The
              rapids on the river are challenging and require skill and
              experience to navigate. If you are looking for an adrenaline rush,
              the Kicking Horse River is the perfect destination.
            </li>
            <li>
              Stunning Scenery: The Kicking Horse River is located in the heart
              of the Canadian Rockies, which means that the scenery is
              breathtaking. As you raft down the river, you will be surrounded
              by towering mountains, dense forests, and crystal-clear water. The
              scenery alone is worth the trip.
            </li>
            <li>
              Experienced Guides: The Kicking Horse River is known for its
              experienced guides. The guides are knowledgeable about the river
              and are trained to ensure that you have a safe and enjoyable
              experience. They will provide you with all the necessary equipment
              and will guide you through the rapids.
            </li>
            <li>
              Perfect for All Skill Levels: The Kicking Horse River offers an
              experience that is perfect for all skill levels. Whether you are a
              beginner or an experienced rafter, the river has something for
              everyone. The guides will tailor the experience to your skill
              level to ensure that you have a safe and enjoyable time.
            </li>
            <li>
              Unforgettable Experience: Rafting on the Kicking Horse River is an
              unforgettable experience. The combination of adrenaline-pumping
              rapids and stunning scenery makes for a truly unique experience.
              Whether you are with friends or family, rafting on the Kicking
              Horse River is an adventure that you will never forget.
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

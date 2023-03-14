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
  const videoURL = "bc7116cd09666a03c092735de7090e19";

  return (
    <>
      <Head>
        <title>Epic Adventures | ATV Tours in Golden</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <HeroImageSlider
        title="ATV Off-Road"
        images={["ATV1", "ATV2", "ATV3", "ATV4"]}
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
            Golden, British Columbia is home to some of the most beautiful
            backcountry landscapes in Canada, and the best way to explore it is
            on an ATV. Canadian Offroad Tours offers a variety of guided ATV
            tours that will take you through the rugged terrain, with
            experienced guides leading the way.
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
        <h3>Why Choose Canadian Offroad Tours?</h3>
        <p>
          Canadian Offroad Tours offers an experience that you won't forget. The
          company prides itself on providing a safe, yet thrilling adventure for
          riders of all levels. With over 20 years of experience in the
          industry, the guides are knowledgeable, friendly, and professional,
          ensuring that your experience is nothing short of amazing.
        </p>
        <p>
          The ATVs used in the tours are top-of-the-line, and Canadian Offroad
          Tours takes great care to ensure that they are maintained and serviced
          to the highest standards, ensuring that your ride is smooth and
          enjoyable. Helmets, goggles, and gloves are provided, so all you need
          to bring is your sense of adventure.
        </p>
        <h3>Explore the Wilderness</h3>
        <p>
          With Canadian Offroad Tours, you can explore the backcountry
          wilderness of Golden, British Columbia like never before. The tours
          take you through the mountains, across rivers, and through forests,
          giving you a chance to see wildlife, such as deer and elk, up close
          and personal. The guides will point out landmarks and tell you stories
          about the area's history and wildlife, making for a fun and
          educational experience.
        </p>
        <h3>Family Fun</h3>
        <p>
          Canadian Offroad Tours welcomes riders of all levels, including
          families with children over six years old. The guides will ensure that
          everyone is comfortable on their ATVs, and will provide training and
          safety instructions before the tour begins. Family-friendly tours are
          available, and Canadian Offroad Tours will work with you to create a
          customized tour that meets your needs and interests.
        </p>
        <h3>Experience the Thrill</h3>
        <p>
          If you're looking for an adrenaline rush, Canadian Offroad Tours has
          you covered. The ATV tours take you through some of the most rugged
          terrain in British Columbia, with steep hills, sharp turns, and
          challenging obstacles. You'll feel the wind in your face and the rush
          of excitement as you power through the backcountry trails.
        </p>
        <h3>Book Your ATV Adventure Today</h3>
        <p>
          Don't miss out on the adventure of a lifetime. Book your ATV tour with
          Canadian Offroad Tours today and experience the beauty and excitement
          of Golden, British Columbia. Whether you're a seasoned rider or a
          first-timer, Canadian Offroad Tours has the perfect tour for you.
        </p>
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

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
        <title>Epic Adventures | Golden Skybridge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Golden Skybridge"
        images={["SKYBRIDGE1", "SKYBRIDGE2", "SKYBRIDGE3", "SKYBRIDGE4"]}
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
            The Golden Skybridge in Golden, British Columbia is an iconic
            attraction that has been drawing tourists from all over the world.
            This breathtaking structure is a must-see for anyone visiting the
            area, and it offers an incredible range of activities and family fun
            that will keep you entertained for hours. Here are some of the top
            things you can do at the Golden Skybridge.
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
              Walk Across the Skybridge One of the main attractions of the
              Golden Skybridge is the chance to walk across this awe-inspiring
              structure. With a length of 130 meters and a height of 80 meters,
              this is one of the longest and highest suspension bridges in North
              America. The view from the bridge is absolutely stunning, with
              panoramic views of the surrounding mountains and valleys.
            </li>
            <li>
              Ride the Zip Line If you're looking for a thrill, the Golden
              Skybridge also features a zip line that takes you across the
              canyon at high speeds. This is an adrenaline-pumping activity that
              is sure to get your heart racing and your blood pumping.
            </li>
            <li>
              Try the Canyon Swing For those who really want to push their
              limits, the Golden Skybridge also offers a canyon swing that sends
              you hurtling through the air at high speeds. This is an experience
              that is not for the faint of heart, but it's an incredible rush
              that you'll never forget.
            </li>
            <li>
              Check Out the Wildlife The Golden Skybridge is located in a
              beautiful natural setting that is home to a wide range of
              wildlife. Keep your eyes peeled for birds of prey, mountain goats,
              and other animals that call this area home.
            </li>
            <li>
              Bring the Kids The Golden Skybridge is a great place to bring the
              whole family, with a range of activities that are suitable for all
              ages. Kids will love exploring the suspension bridges and checking
              out the wildlife, while older children and adults will enjoy the
              thrill of the zip line and canyon swing.
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

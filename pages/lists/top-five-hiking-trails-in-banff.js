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
        <title>Epic Adventures | Top Five Hiking Trails in Banff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Top Five Hiking Trails in Banff National Park"
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
          style={{ marginLeft: "-.2rem" }}
        />
      </TopDividerStyles>
      <AdventureHeadingStyles>
        <div className="oneCol">
          <p style={{ fontSize: "2rem" }}>
            Banff National Park is home to some of the most beautiful natural
            scenery in Canada. With its crystal clear lakes, towering peaks, and
            stunning wildlife, it's no surprise that Banff is a popular
            destination for hikers from around the world. Whether you're a
            seasoned hiker or a beginner, Banff has a hike for everyone. Here
            are the top five hiking trips in Banff National Park that you
            shouldn't miss:
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
              Plain of Six Glaciers Trail: The Plain of Six Glaciers Trail is
              one of the most popular hikes in Banff. The trail is 11.6
              kilometers long and offers stunning views of Lake Louise, Victoria
              Glacier, and six glaciers. The hike takes about 4-5 hours to
              complete and is rated as moderate difficulty.
            </li>
            <li>
              Sentinel Pass Trail: The Sentinel Pass Trail is a 12.5-kilometer
              hike that takes you through breathtaking alpine scenery. The trail
              offers stunning views of Larch Valley, Moraine Lake, and Paradise
              Valley. The hike takes about 6-8 hours to complete and is rated as
              difficult.
            </li>
            <li>
              Johnston Canyon Trail: The Johnston Canyon Trail is a
              family-friendly hike that offers stunning views of waterfalls and
              deep canyons. The trail is 5.8 kilometers long and takes about 2-3
              hours to complete. It is rated as an easy hike and is suitable for
              all skill levels.
            </li>
            <li>
              Sulphur Mountain Trail: The Sulphur Mountain Trail is a
              10-kilometer hike that takes you to the top of Sulphur Mountain.
              The trail offers stunning views of Banff and the surrounding
              mountains. The hike takes about 5-6 hours to complete and is rated
              as moderate difficulty.
            </li>
            <li>
              Parker Ridge Trail: The Parker Ridge Trail is a 5.2-kilometer hike
              that offers stunning views of the Saskatchewan Glacier. The trail
              is rated as an easy hike and takes about 2-3 hours to complete.
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

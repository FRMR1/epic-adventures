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
        <title>Epic Adventures | Top Five Hiking Trails in Jasper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Top Five Hiking Trails in Jasper National Park"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/28304fd2-499a-4b2d-3021-86790e04ac00/public",
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
            Jasper National Park is a hiker's paradise, with over 1,200
            kilometers of hiking trails to explore. From stunning vistas to
            breathtaking alpine scenery, there's something for everyone in this
            rugged wilderness. Here are the top 5 hiking trails in Jasper
            National Park:
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
              Sulphur Skyline Trail - This popular trail offers some of the most
              stunning views in the park. Hikers can climb over 700 meters in
              just 8 kilometers, and are rewarded with panoramic views of the
              surrounding peaks and valleys.
            </li>
            <li>
              Valley of the Five Lakes Trail - This easy, family-friendly trail
              takes hikers past five stunning alpine lakes, each with its own
              unique color and character. It's a great option for those looking
              for a leisurely hike with plenty of photo opportunities.
            </li>
            <li>
              Cavell Meadows Trail - This moderate hike takes hikers up into the
              alpine meadows of Mount Edith Cavell, where they'll be treated to
              incredible views of the Angel Glacier and the surrounding peaks.
              The trail is only open during the summer months, so plan
              accordingly.
            </li>
            <li>
              Maligne Canyon Trail - This easy hike takes hikers along the edge
              of the Maligne River Canyon, where they'll be treated to stunning
              views of waterfalls, rapids, and rock formations. It's a great
              option for families or those looking for a less strenuous hike.
            </li>
            <li>
              Wilcox Pass Trail - This challenging hike takes hikers up to a
              high alpine meadow, where they'll be rewarded with stunning views
              of the Athabasca Glacier and the surrounding peaks. The trail is
              steep and rocky, but the views make it well worth the effort.
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

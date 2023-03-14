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
        <title>Epic Adventures | Best Hiking Trails in Golden</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Best Hiking Trails in Golden"
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
            Golden, BC is known for its stunning natural beauty and outdoor
            activities, and hiking is one of the best ways to explore the area.
            With so many trails to choose from, it can be overwhelming to decide
            where to start. That's why we've put together a list of the top 5
            hiking trails in Golden, BC that you won't want to miss.
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
              Mount 7 Mount 7 is one of the most popular hiking trails in
              Golden, BC, and for good reason. The trail is challenging, with
              steep elevation gains, but the panoramic views of the surrounding
              mountains and valleys are breathtaking. Be sure to bring plenty of
              water and snacks for this 6.5 km hike that takes about 5 hours to
              complete.
            </li>
            <li>
              Kicking Horse Trail The Kicking Horse Trail is a scenic trail that
              follows the Kicking Horse River, offering stunning views of the
              river and the surrounding mountains. The trail is relatively easy,
              making it a great option for families or those looking for a
              leisurely hike. The trail is about 10 km long and takes around 3-4
              hours to complete.
            </li>
            <li>
              Cedar Lake Trail The Cedar Lake Trail is a short, easy hike that
              takes you to the picturesque Cedar Lake. The trail is just over 3
              km long and takes about 1-2 hours to complete. Along the way,
              you'll see beautiful wildflowers, old-growth cedars, and stunning
              views of the surrounding mountains.
            </li>
            <li>
              Gorman Lake Trail The Gorman Lake Trail is a challenging hike that
              rewards you with stunning views of Gorman Lake and the surrounding
              peaks. The trail is about 12 km long and takes around 6-7 hours to
              complete. Be prepared for steep elevation gains and rocky terrain.
            </li>
            <li>
              Dogtooth Ridge Trail The Dogtooth Ridge Trail is a challenging but
              rewarding hike that takes you to the top of Dogtooth Mountain. The
              trail is about 9 km long and takes around 6-7 hours to complete.
              The views from the top are well worth the effort, with panoramic
              views of the surrounding mountains and valleys.
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

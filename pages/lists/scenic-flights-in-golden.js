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
  return (
    <>
      <Head>
        <title>Epic Adventures | Scenic Flights in Golden</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Scenic Flights in Golden"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/eb89cc4a-ce37-4d50-3282-3811c0d83b00/public",
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
            If you're looking for an unforgettable experience in Golden, British
            Columbia, a scenic flight with Kicking Horse Aviation is a must-try
            activity. With breathtaking views of the Rocky Mountains and the
            surrounding wilderness, you'll get to see the stunning landscapes of
            the area from a whole new perspective.
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
        <p>
          Kicking Horse Aviation offers a variety of scenic flights to choose
          from, each with its own unique features and views. One of the most
          popular flights is the 30-minute tour of the Columbia Valley, which
          takes you over the Purcell and Rocky Mountains, the Columbia River and
          Lake, and the Kicking Horse Pass. You'll get to see glaciers,
          waterfalls, and even wildlife from above.
        </p>
        <p>
          For those who want a longer experience, Kicking Horse Aviation also
          offers hour-long flights that cover even more of the stunning scenery
          in the area. You can choose from a variety of routes, including
          flights over the Yoho National Park and the Mount Assiniboine
          Provincial Park.
        </p>
        <p>
          No matter which flight you choose, Kicking Horse Aviation ensures a
          comfortable and safe experience. The aircraft used for the scenic
          flights are modern, well-maintained, and equipped with the latest
          safety features. The pilots are experienced and knowledgeable,
          providing interesting and informative commentary throughout the
          flight.
        </p>
        <p>
          A scenic flight with Kicking Horse Aviation is a perfect activity for
          those looking for a unique way to explore the natural beauty of
          Golden, British Columbia. Whether you're a local or a tourist, you
          won't want to miss this opportunity to see the mountains and
          wilderness like never before. Book your flight today and prepare for
          an adventure you'll never forget.
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

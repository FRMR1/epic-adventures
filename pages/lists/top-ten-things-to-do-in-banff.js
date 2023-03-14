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
        <title>Epic Adventures | Top Ten Things To Do In Banff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Top Ten Things To Do In Banff National Park"
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
            Banff National Park is one of Canada's most popular tourist
            destinations, attracting millions of visitors every year. With
            stunning natural landscapes and a variety of outdoor activities to
            enjoy, there is no shortage of things to do in Banff. Here are the
            top ten things to do in Banff National Park and why they're worth
            your time.
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
              Soak in the Hot Springs - One of Banff's most iconic attractions,
              the Banff Hot Springs, is a natural hot spring that has been a
              popular destination for over 100 years. The warm mineral water is
              believed to have healing properties and offers stunning views of
              the surrounding mountains.
            </li>
            <li>
              Hike to Johnston Canyon - Johnston Canyon is a beautiful hiking
              trail that leads to a series of waterfalls and natural pools. The
              trail is well-maintained and suitable for all ages and abilities.
            </li>
            <li>
              Take a Gondola Ride to Sulphur Mountain - A gondola ride to the
              top of Sulphur Mountain offers stunning views of Banff National
              Park and the surrounding mountain ranges. Once at the top,
              visitors can enjoy a variety of activities, including hiking and
              dining.
            </li>
            <li>
              Visit Lake Louise - Lake Louise is one of Banff's most iconic
              natural landmarks. The turquoise waters are surrounded by majestic
              mountain ranges and offer a variety of activities, including
              hiking, canoeing, and snowshoeing.
            </li>
            <li>
              Explore the Columbia Icefield - The Columbia Icefield is one of
              the largest icefields in North America and offers stunning views
              of glaciers and mountain peaks. Visitors can take a guided tour or
              explore on their own.
            </li>
            <li>
              Go Wildlife Spotting - Banff National Park is home to a variety of
              wildlife, including bears, elk, and moose. Visitors can take a
              guided wildlife tour or explore on their own, but it's important
              to always keep a safe distance from the animals.
            </li>
            <li>
              Ski or Snowboard at Banff Ski Resorts - Banff National Park is
              home to several world-class ski resorts, including Banff Ski
              Resort and Lake Louise Ski Resort. With a variety of slopes for
              all skill levels, skiing and snowboarding in Banff is an
              experience not to be missed.
            </li>
            <li>
              Take a Helicopter Tour - A helicopter tour of Banff National Park
              offers a unique perspective of the park's stunning landscapes.
              Visitors can choose from a variety of tours, including mountain
              tours and glacier tours.
            </li>
            <li>
              Go Dog Sledding - Dog sledding is a popular activity in Banff
              National Park, offering a unique way to explore the park's winter
              wonderland. Visitors can take a guided tour or learn to mush their
              own team of dogs.
            </li>
            <li>
              Explore Banff Townsite - Banff Townsite is a charming mountain
              town that offers a variety of shops, restaurants, and galleries to
              explore. Visitors can stroll the streets, take in the local
              culture, and learn about the history of Banff National Park.
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

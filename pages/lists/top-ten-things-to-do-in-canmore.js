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
        <title>Epic Adventures | Top Ten Things To Do In Canmore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Top Ten Things To Do In Canmore"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/9864fb75-30de-4bab-d676-8a77fcf3ad00/public",
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
            Canmore is a small town located just outside Banff National Park and
            offers plenty of outdoor activities and stunning views of the
            surrounding mountains. Here are the top ten things to do in Canmore.
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
              Hiking - Canmore is known for its incredible hiking trails,
              ranging from easy walks to challenging treks. Trails like Grassi
              Lakes and Ha Ling Peak offer breathtaking views of the town and
              the surrounding mountains.
            </li>
            <li>
              Rock climbing - Canmore has become a popular destination for rock
              climbers, with a variety of climbing areas available for all skill
              levels. The most popular climbing spot is the Grassi Lakes area.
            </li>
            <li>
              Biking - Canmore has over 100 kilometers of bike trails, including
              the popular Legacy Trail that connects Banff and Canmore. Bike
              rentals are available in town.
            </li>
            <li>
              Golfing - Canmore has three world-class golf courses with
              spectacular mountain views. The Canmore Golf and Curling Club,
              Silvertip Golf Course, and Stewart Creek Golf and Country Club are
              all popular choices.
            </li>
            <li>
              White-water rafting - The Bow River and Kananaskis River offer
              exciting white-water rafting experiences for all levels. Many
              local companies offer guided rafting tours.
            </li>
            <li>
              Cross-country skiing - Canmore has over 70 kilometers of groomed
              cross-country skiing trails, including the Canmore Nordic Centre.
              Ski rentals are available in town.
            </li>
            <li>
              Snowshoeing - For those who prefer to stay on foot, snowshoeing is
              a popular winter activity in Canmore. Many of the hiking trails
              are accessible by snowshoe.
            </li>
            <li>
              Wildlife watching - Canmore is home to a variety of wildlife,
              including elk, deer, bighorn sheep, and even bears. The best
              places to spot wildlife are along the Bow Valley Parkway and on
              the slopes of Mount Lady Macdonald.
            </li>
            <li>
              Canmore Cave Tours - For an underground adventure, Canmore Cave
              Tours offers guided tours of the Rat's Nest Cave, one of the
              longest caves in Canada. The tour includes crawling through narrow
              passages, rappelling down waterfalls, and exploring underground
              chambers.
            </li>
            <li>
              Relax at the spa - After a long day of outdoor activities, unwind
              at one of Canmore's many spas. Many of them offer hot tubs and
              saunas with stunning mountain views.
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

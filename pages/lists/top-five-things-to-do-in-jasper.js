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
        <title>Epic Adventures | Top Five Things To Do In Jasper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Top Five Things To Do In Jasper National Park"
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
            Jasper National Park is a vast wilderness in western Canada that
            draws millions of visitors each year. It is the largest national
            park in the Canadian Rockies, and is known for its spectacular
            natural beauty. Here are the top five things to do in Jasper
            National Park.
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
              Hiking - Jasper National Park is a hiker's paradise. There are
              over 1,000 km of trails that wind through the mountains, forests,
              and valleys. Hiking is the perfect way to explore the park's
              natural beauty and get some exercise. The trails range from easy
              to difficult, so there is something for everyone.
            </li>
            <li>
              Wildlife Viewing - Jasper National Park is home to an abundance of
              wildlife. Visitors have the opportunity to see elk, moose, deer,
              bighorn sheep, wolves, bears, and many other animals in their
              natural habitat. The best time for wildlife viewing is early in
              the morning or late in the evening, when the animals are most
              active.
            </li>
            <li>
              Scenic Drives - Jasper National Park has some of the most scenic
              drives in the world. The Icefields Parkway is a 230 km stretch of
              road that connects Jasper to Banff National Park. The drive takes
              visitors through some of the most stunning scenery in the Rockies,
              including glaciers, mountains, and lakes.
            </li>
            <li>
              Camping - Jasper National Park has a variety of camping options,
              from backcountry camping to RV sites. There are over 1,800
              campsites in the park, and they are located in some of the most
              beautiful areas. Camping is a great way to experience the park's
              natural beauty and spend time with family and friends.
            </li>
            <li>
              Skiing - Jasper National Park is a popular destination for skiing
              and snowboarding. Marmot Basin is the park's premier ski resort,
              and it offers over 1,700 acres of skiing terrain. The resort has a
              variety of runs for all skill levels, and the views of the
              surrounding mountains are breathtaking.
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

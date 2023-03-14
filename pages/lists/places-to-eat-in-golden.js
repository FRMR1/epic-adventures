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
        <title>Epic Adventures | Best Places To Eat In Golden</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Best Places To Eat In Golden"
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
            Golden, BC is known for its stunning scenery, outdoor activities,
            and delicious food. Whether you're looking for a quick bite or a
            fancy meal, Golden has a range of dining options to suit all tastes
            and budgets. Here are some of the best places to eat in Golden:
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
              The Island Restaurant: The Island Restaurant is a popular spot for
              breakfast, lunch, and dinner. They serve up hearty portions of
              classic diner fare, such as eggs benedict, burgers, and poutine.
              The atmosphere is laid-back and cozy, and the prices are
              reasonable.
            </li>
            <li>
              Whitetooth Mountain Bistro: If you're looking for a more upscale
              dining experience, head to the Whitetooth Mountain Bistro. This
              restaurant offers a range of dishes made with locally-sourced
              ingredients, such as the pork chop with apple butter and the
              mushroom risotto. The bistro also has an extensive wine list and
              craft beer selection.
            </li>
            <li>
              The Golden Taps Pub: The Golden Taps Pub is a great place to grab
              a beer and a bite after a long day of hiking or skiing. They have
              a wide selection of local and imported beers, as well as pub
              favorites like fish and chips and wings.
            </li>
            <li>
              Eleven22 Restaurant & Lounge: Eleven22 Restaurant & Lounge is a
              contemporary restaurant with a diverse menu. They serve everything
              from sushi to pasta to steak, all prepared with high-quality
              ingredients. The restaurant also has a cozy lounge area where you
              can enjoy a cocktail or glass of wine.
            </li>
            <li>
              Cedar House Restaurant & Chalets: The Cedar House Restaurant &
              Chalets is a must-visit for anyone looking for a unique dining
              experience. The restaurant is located in a beautiful cedar house
              and offers stunning views of the surrounding mountains. They serve
              a range of dishes made with fresh, local ingredients, such as the
              cedar plank salmon and the elk burger.
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

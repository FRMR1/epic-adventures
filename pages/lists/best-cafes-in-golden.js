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
        <title>Epic Adventures | Best Cafes In Golden</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Best Cafes In Golden"
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
            Golden, British Columbia, is a charming mountain town that offers
            visitors a wide range of dining options. From casual cafes to fine
            dining establishments, there is something for everyone. If you're a
            coffee lover or looking for a cozy place to grab a bite, then you'll
            love the top five cafes in Golden, BC.
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
              Papa Bear's Kitchen is a rustic and cozy cafe that serves up
              delicious breakfast, lunch, and brunch. Their menu is extensive,
              with a range of options, including classic breakfast items,
              sandwiches, wraps, and homemade soups. They also offer vegetarian
              and gluten-free options, making it a great choice for all dietary
              needs.
            </li>
            <li>
              Ethos is a trendy and modern cafe that serves up delicious coffee
              and light bites. They offer a variety of coffee drinks, including
              pour-overs, lattes, and cappuccinos. Their menu features a
              selection of sweet and savory crepes, paninis, and salads. The
              atmosphere is cozy, and the decor is modern, making it a great
              spot to work or catch up with friends.
            </li>
            <li>
              Bacchus Books & Cafe is a unique and cozy spot that combines a
              bookstore with a cafe. They offer a variety of coffee drinks,
              baked goods, and light bites. The cafe's atmosphere is relaxed and
              comfortable, with plenty of seating options, making it an
              excellent spot to unwind with a book.
            </li>
            <li>
              Wondering Fern Cafe is a charming and cozy spot that serves up
              delicious coffee and homemade baked goods. Their menu includes a
              range of coffee drinks, sandwiches, and baked goods. The cafe's
              atmosphere is warm and inviting, with a rustic decor that makes
              you feel right at home.
            </li>
            <li>
              Blue Bird Cafe is a cozy and intimate cafe that serves up
              delicious coffee and homemade baked goods. Their menu features a
              range of coffee drinks, breakfast sandwiches, and baked goods. The
              cafe's atmosphere is intimate and charming, with a rustic decor
              that makes it a great spot to relax and unwind.
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

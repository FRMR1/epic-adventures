import Head from "next/head";
import { TopListStyles } from "../../components/styles/TopListStyles";
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles";
import ReadyToBook from "../../components/ReadyToBook";
import { HeroImageStyles } from "../../components/styles/HeroImageStyles";
import { TopDividerStyles } from "../../components/styles/TopDividerStyles";
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles";
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles";
import Link from "next/link";
import { HeroVideoStyles } from "../../components/styles/HeroVideoStyles";
import CloudflareVideo from "../../components/CloudflareVideo";

const TopLists = () => {
  const videoURL = "420f3ea24aca650b853b0706b06724ae";
  return (
    <>
      <Head>
        <title>Epic Adventures | Top Lists</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </TopDividerStyles>
      <AdventureHeadingStyles>
        <div className="oneCol">
          <h2 style={{ color: "#fff" }}>Top Lists</h2>
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
        <ul>
          <li>
            <Link href="/lists/top-ten-things-to-do-in-golden">
              Top Ten Things To Do In Golden, British Columbia
            </Link>
          </li>
          <li>
            <Link href="/lists/top-five-things-to-do-in-jasper">
              Top Five Things To Do In Jasper National Park
            </Link>
          </li>
          <li>
            <Link href="/lists/top-ten-things-to-do-in-banff">
              Top Ten Things To Do In Banff National Park
            </Link>
          </li>
          <li>
            <Link href="/lists/top-ten-things-to-do-in-canmore">
              Top Ten Things To Do In Canmore
            </Link>
          </li>
          <li>
            <Link href="/lists/skydiving-in-golden">
              Skydiving in Golden, BC: Experience the Thrill of Link Lifetime
            </Link>
          </li>
          <li>
            <Link href="/lists/rafting-kicking-horse">
              Rafting on the Kicking Horse River in British Columbia: A
              Thrilling Adventure
            </Link>
          </li>
          <li>
            <Link href="/lists/golden-skybridge">
              The Golden Skybridge: Adventure and Family Fun in One
            </Link>
          </li>
          <li>
            <Link href="/lists/atv-tours-in-golden">
              ATV Tours in Golden, British Columbia
            </Link>
          </li>
          <li>
            <Link href="/lists/scenic-flights-in-golden">
              Scenic Flights in Golden
            </Link>
          </li>
          <li>
            <Link href="/lists/top-five-hiking-trails-in-banff">
              Top Five Hiking Trails in Banff National Park
            </Link>
          </li>
          <li>
            <Link href="/lists/top-five-hiking-trails-in-jasper">
              Top Five Hiking Trails in Jasper National Park
            </Link>
          </li>
          <li>
            <Link href="/lists/best-hiking-trails-in-golden">
              Best Hiking Trails in Golden, BC
            </Link>
          </li>
          <li>
            <Link href="/lists/places-to-eat-in-golden">
              Places To Eat in Golden
            </Link>
          </li>
          <li>
            <Link href="/lists/best-cafes-in-golden">
              Best Cafes in Golden, BC
            </Link>
          </li>
        </ul>
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

export default TopLists;

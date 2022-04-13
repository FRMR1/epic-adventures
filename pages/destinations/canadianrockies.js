import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import GoogleMap from "../../components/GoogleMap";
import SuggestedCombo from "../../components/SuggestedCombo";
import ReadyToBook from "../../components/ReadyToBook";
import { HeroImageStyles } from "../../components/styles/HeroImageStyles";
import { HeroVideoStyles } from "../../components/styles/HeroVideoStyles";
import { TestimonialStyles } from "../../components/styles/TestimonialStyles";
import { TopDividerStyles } from "../../components/styles/TopDividerStyles";
import { CardSectionStyles } from "../../components/styles/CardSectionStyles";
import { BottomDividerStyles } from "../../components/styles/BottomDividerStyles";
import { FooterDividerStyles } from "../../components/styles/FooterDividerStyles";
import { SuggestedCombosStyles } from "../../components/styles/SuggestedCombosStyles";
import { AdventureHeadingStyles } from "../../components/styles/AdventureHeadingStyles";
import { AdventureSectionStyles } from "../../components/styles/AdventureSectionStyles";
import { BookAdventureStyles } from "../../components/styles/BookAdventureStyles";
import dynamic from "next/dynamic";
import { MobileVideoStyles } from "../../components/styles/MobileVideoStyles";
import Carousel from "react-multi-carousel";
import Card from "../../components/Card";
import "react-multi-carousel/lib/styles.css";

const CloudflareVideo = dynamic(
  () => import("../../components/CloudflareVideo"),
  {
    ssr: false,
  }
);

const HeroImageSlider = dynamic(
  () => import("../../components/HeroImageSlider"),
  {
    ssr: false,
  }
);

const CanadianRockies = () => {
  // Cloudflare URL for video
  const videoURL = "ad1d8e9d786654e62cbe2681a546ba6c";

  // Responsive breakpoints
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Head>
        <title>Epic Rockies | Canadian Rockies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Canadian Rockies"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/29b5dcff-9f6a-46a6-f4c0-a31946425000/public",
        ]}
        cdn={true}
        needsVideo={true}
      />
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </TopDividerStyles>
      <AdventureHeadingStyles>
        <div className="oneCol">
          <h2>Explore Our Playground</h2>
          <p>
            A destination you will never forget, full of unique and immersive
            experiences. The Canadian Rockies has it all for all four seasons,
            frozen lakes to warm golden sunsets and everything in between. Let
            us take you on the adventures that will change your life in Canada's
            wild west. From Canmore, Alberta to Golden, British Columbia through
            Banff and Jasper national park: come explore with us.
          </p>
        </div>
      </AdventureHeadingStyles>
      <BottomDividerStyles marginTop="4.7rem">
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </BottomDividerStyles>

      <BookAdventureStyles>
        <h3>Our Epic Adventures</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/7dfc0999-1493-44a7-9613-2e23d9555c00/public"
                layout="fill"
                objectFit="contain"
                alt="Summer"
              />
            </div>
          </div>
          <div className="right">
            <h4>Summer Adventures</h4>
            <p>
              Jump from a plane, raft wild rivers, explore the caves and
              canyons, or drive your ATV through the rugged mountains. Explore
              the Canadian Rockies and challenge yourself. We have partnered up
              with the most authentic and quality tour operators to offer you
              the best experiences through Banff, Jasper, Lake Louise, Canmore
              and Golden.
            </p>
            <Link href="/adventures">
              <div className="button">
                <span>More Info</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="twoCol grey">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/5ad57caa-ebfa-4cce-df9e-402062476a00/public"
                layout="fill"
                objectFit="contain"
                alt="Sightseeing"
              />
            </div>
          </div>
          <div className="right">
            <h4>Sightseeing</h4>
            <p>
              Experience the Columbia Icefield, Lake Minnewanka and Maligne Lake
              cruises, gondola rides and other iconic tours through Banff,
              Jasper National park. Enjoy the parks your way with these awe
              inspiring activities you cant miss.
            </p>
            <Link href="/adventures">
              <div className="button">
                <span>More Info</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/61e19ff1-7325-4d5c-0fee-275899612f00/public"
                layout="fill"
                objectFit="contain"
                alt="Winter"
              />
            </div>
          </div>
          <div className="right">
            <h4>Winter Adventures</h4>
            <p>
              Stay tuned as we work on delivering you the best winter
              experiences for 2022/2023 season.
            </p>
          </div>
        </div>

        <div className="twoCol grey">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/ca20ab16-0d8c-44c5-fa99-49a07fcf0700/public"
                layout="fill"
                objectFit="contain"
                alt="Kananaskis River"
              />
            </div>
          </div>
          <div className="right">
            <h4>Combos</h4>
            <p>
              We are Epic and we work hard to give you a seamless outdoor
              experience in the Canadian Rockies. We have put together some
              unique combo packages to save you time and money while you make
              Epic memories. Challenge yourself and take on mother nature like
              it was intended with combos like “Don't Tell Mom”, “Double
              Trouble” and more.
            </p>
            <Link href="/combos">
              <div className="button">
                <span>More Info</span>
              </div>
            </Link>
          </div>
        </div>
      </BookAdventureStyles>

      <BookAdventureStyles>
        <h3>Our Epic Destinations</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/d3a4485a-92b3-4ee5-e4a1-88a643bbe200/public"
                layout="fill"
                objectFit="contain"
                alt="Banff National Park"
              />
            </div>
          </div>
          <div className="right">
            <h4>Banff National Park, Ab</h4>
            <p>
              Canada's premier and historic national park, with a bustling town
              offering world class restaurants and views, you will never take
              for granted. Full of wildlife and mountain scapes, this place must
              be experienced. If you're looking for things to do in Banff, we
              have you covered from the Banff Gondola, Lake Miniwanka Cruise and
              more.
            </p>
            <Link href="/destinations/banffnationalpark">
              <div className="button">
                <span>More Info</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="twoCol grey">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/51ceaae5-19a4-49ba-345e-7fcca6c35d00/public"
                layout="fill"
                objectFit="contain"
                alt="Lake Louise"
              />
            </div>
          </div>
          <div className="right">
            <h4>Lake Louise, Ab</h4>
            <p>
              An iconic stop or stay. With the beautiful chateau overlooking the
              pristine waters of Lake Louise, this mountain village within Banff
              National Park is a great spot for a photo shoot, hike or take the
              Lake Louise Resort gondola above the mountains to get the epic
              views. With Moraine Lake close by, this is a fantastic stop over
              or stay.
            </p>
            <Link href="/destinations/lakelouise">
              <div className="button">
                <span>More Info</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/18da37d9-0358-473d-358c-f4cf56fe1200/public"
                layout="fill"
                objectFit="contain"
                alt="Jasper"
              />
            </div>
          </div>
          <div className="right">
            <h4>Jasper National Park, Ab</h4>
            <p>
              At the heart of the Canadian Rockies, Jasper National Park is the
              ultimate mountain escape. With unique canyons, wild mountain
              views, pristine lakes and home of the Columbia Icefield
              adventures. A wild authentic Canadian experience with wildlife
              roaming throughout the park. Here you can walk the icefields,
              repel the canyon waterfalls and cruise Maligne Lake in style.
            </p>
            <Link href="/destinations/jasper">
              <div className="button">
                <span>More Info</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="twoCol grey">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/7bfd9115-317e-4d7c-18b1-b21030c16b00/public"
                layout="fill"
                objectFit="contain"
                alt="Canmore"
              />
            </div>
          </div>
          <div className="right">
            <h4>Canmore, Ab</h4>
            <p>
              A metropolitan mountain town in the Rockies. Just outside the
              Banff National Park boundary is access to cave and dog sled tours,
              heli tours with views of Banff National Park, Three Sisters
              mountain peaks and the stunning Bow Valley. If you're heading west
              from Calgary this is your first major stop in your itinerary you
              can't miss.
            </p>
            <Link href="/destinations/canmore">
              <div className="button">
                <span>More Info</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/71fbd85a-461f-43c5-6119-a012e9ab0c00/public"
                layout="fill"
                objectFit="contain"
                alt="Golden"
              />
            </div>
          </div>
          <div className="right">
            <h4>Golden, BC</h4>
            <p>
              At the beginning of the Columbia River and end of the Kicking
              Horse River, this rugged mountain town is home to some of the most
              unique adventures in the Rockies. From skydiving above the clouds,
              rafting the mighty Kicking Horse river, experiencing the new
              Golden Skybridge or cruising the back country trails on your own
              ATV. This has become a must stop gem nestled in the middle of the
              Columbia Valley.
            </p>
            <Link href="/destinations/golden">
              <div className="button">
                <span>More Info</span>
              </div>
            </Link>
          </div>
        </div>
      </BookAdventureStyles>
      <ReadyToBook />
      <FooterDividerStyles>
        <img
          src="/svg/divider-top2.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </FooterDividerStyles>
    </>
  );
};

export default CanadianRockies;

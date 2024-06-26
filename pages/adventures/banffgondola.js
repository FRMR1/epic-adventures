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
import WhyEpic from "../../components/WhyEpic";

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

const MaligneLake = () => {
  // Cloudflare URL for video
  const videoURL = "225299687d98d673503b19426a2955ef";

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
        <title>Epic Adventures | Banff Gondola</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Banff Gondola"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/a553efde-1ce7-4b3d-7e22-55cd64102100/public",
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e7968c06-7694-467f-4394-35ae61e94f00/public",
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
        <div className="imageContainer mobileImage">
          <img src="/images/logos/banffgondola.svg" />
        </div>
        <div className="pContainer">
          <h2>Pure Nature</h2>
          <p>
            Experience a world of beauty at the top of Sulphur Mountain. With
            alpine views of the lively town of Banff and the Bow Valley, this
            all-season operation will give you some of Banff's most iconic
            views. With mountain boardwalks to explore the top of the world
            there's photo opportunities everywhere you turn. With an impressive
            restaurant and interpretive centre, it's a great place to spend time
            with family and friends as you witness the magic of Banff National
            Park.
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

      <CardSectionStyles>
        <div className="cards">
          <Carousel
            responsive={responsive}
            infinite={true}
            swipeable={true}
            draggable={true}
            containerClass="padding-100-px"
          >
            <Card
              title="Banff Gondola"
              description="Take a ride in the gondola to ascend into the alpine mountain views."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/30b55fde-9b36-4963-d480-803a2ee90900/public"
            />
            <Card
              title="All Season"
              description="Summer, winter, fall and spring: the Banff Gondola is operating daily."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/bfea3aae-07a5-4583-e162-460b30a03300/public"
            />
            <Card
              title="Mountain Boardwalk"
              description="Boardwalks are paved over the mountain ridges to gain access to different lookouts. "
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/f9e93463-ee8e-4e91-9806-9187265d2d00/public"
            />
            <Card
              title="Cafe and Restaurant"
              description="The top of the gondola houses a beautiful restaurant and café to grab some food or enjoy a latte."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/f298163c-f1c7-4eda-087c-575ef898d100/public"
            />
            <Card
              title="Alpine Views"
              description="Take in the beautiful mountain views and air as you look over the lively town of Banff and Bow Valley."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/74817fd2-f4b0-4516-2d10-02cbc21bfe00/public"
            />
            <Card
              title="Book In Advance"
              description="Slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/19a805ab-d036-41fb-5eb7-acd6483dbb00/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles>
        <h3>Epic Adventures</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/9ec520a4-ee6b-49b3-b501-f3fbbef8c000/public"
              layout="fill"
              objectFit="contain"
              alt="Banff Gondola"
            />
          </div>
          <div className="right">
            <h3>Banff Gondola</h3>
            <p>Book your ticket to Banff's iconic mountain views.</p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Includes life ticket
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Book your spot ahead of time
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">60</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://bookings.banffjaspercollection.com/RKY/activities/1?WebLink=oNjpzZVGJKSAPMd24YCUsQ%3d%3d&agencyNumber=5007167&wlid=914">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>Book Now</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="twoCol grey">
          <div className="left">
            <div>
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/ca20ab16-0d8c-44c5-fa99-49a07fcf0700/public"
                layout="fill"
                objectFit="contain"
                alt="ATV Off-Road"
              />
            </div>
          </div>
          <div className="right">
            <h3>Combo This Trip</h3>
            <p>Combo and experience more!</p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Save money
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Save time
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Exclusive products
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Live EPIC!
              </li>
            </ul>
            <Link href="/combos">
              <div className="button">
                <span>More Info</span>
              </div>
            </Link>
          </div>
        </div>
      </BookAdventureStyles>
      {/* <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </TopDividerStyles>
      <TestimonialStyles>
        <p>
          “I had an incredible time skydiving! I reccommend this to anyone
          looking to skydive for the first time! It was one of the best life
          experiences! The staff were very knowledgeable and knew what they were
          doing! Made us all feel safe.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Juan G., July 2020</p>
        <p>
          “Amazing views, amazing weather, amazing staff. Everybody there went
          out of their way to make our experience memorable. Couldn't say enough
          good things. 5 stars”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Mikey O., August 2020</p>
      </TestimonialStyles>
      <BottomDividerStyles>
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.2rem" }}
        />
      </BottomDividerStyles> */}
      <WhyEpic style={{ marginTop: "10rem" }} />

      <AdventureSectionStyles>
        <div className="twoCol">
          <div className="left">
            <h3>Additional Details</h3>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                This is an accessible gondola. Family, child and senior pricing
                available.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                <div>
                  Please book ahead, slots fill up fast. See our{" "}
                  <a href="cancellations">cancellation policy</a> here.
                </div>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/76628660-9a59-49c8-899f-32a347e42e00/public"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="Skydiving"
              />
            </div>
          </div>
        </div>
      </AdventureSectionStyles>
      <GoogleMap location={{ lat: 51.149651, lng: -115.559192 }} zoom={15} />
      <SuggestedCombosStyles>
        <h3>Suggested Adventures</h3>
        <div className="cards">
          <SuggestedCombo
            title="Lake Minnewanka"
            description="Take a trip on the pristine waters of the lake on this boat tour nestled in the mountains just outside of the town of Banff."
            image="1adbc0df-cf4c-4ecb-75f3-44b52f92e600"
            url="/adventures/lakeminnewanka"
            internal={true}
          />
          <SuggestedCombo
            title="Heli Flight"
            description="Get the best seat above the mountains, take a helicopter over the Three Sisters mountain tops and experience the Rockies in style."
            image="c5ed939e-308e-4c19-58a7-cb8e744d6b00"
            url="/adventures/heliflight"
            internal={true}
          />
          <SuggestedCombo
            title="Caving"
            description="Explore underground in this unique experience inside the Bow Valley mountains. This trip will expand your relationship with the mountains and local habitat."
            image="66ee2fee-ee8a-4ac0-1454-3ab1da1e7100"
            url="/adventures/caving"
            internal={true}
          />
        </div>
      </SuggestedCombosStyles>
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

export default MaligneLake;

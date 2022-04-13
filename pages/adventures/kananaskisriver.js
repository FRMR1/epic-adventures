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

const Skydiving = () => {
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
        <title>Epic Adventures | Kananaskis River</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Kananaskis River"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e78000d6-1752-4ebc-7ad4-edb48de20300/public",
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
        <div className="imageContainer mobileImage">
          <img src="/images/logos/chinookrafting.svg" />
        </div>
        <div className="pContainer">
          <h2>Kananaskis River White Water Rafting</h2>
          <p>
            With over 30 years of operating rafting trips on the Kananaskis
            River, this trip is a great introduction to white water rafting. A
            family friendly trip that will take you through grade 2 and 3 rapids
            that will get everyone wet and experience a classic rafting trip in
            the Canadian Rockies. With a focus on safety and experience, Chinook
            Rafting has an exceptional safety record and are industry leaders in
            rafting on the Kananaskis and take pride in what they do. This trip
            is great for families, groups or anyone unsure about what white
            water rafting is all about.
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
              title="The Gear"
              description="Rafts, paddles, helmets, wetsuits, boots, splash tops and personal floatation devices are just some of the gear you will be provided for this adventure."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/5d03b931-b28a-4455-0dba-29307a838b00/public"
            />
            <Card
              title="Safety Talk"
              description="Your guides will give you instructions on how to paddle and help yourself and the team get down the river safely."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/a4cfbc05-2c1a-49c9-1a67-78c17fffd100/public"
            />
            <Card
              title="Rafting Basics"
              description="You will get a chance to practice everything you need with the instruction of your experienced guide."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/a5858326-9b96-495f-2dc4-62b11ec4e200/public"
            />
            <Card
              title="Unforgettable Scenery"
              description="Take in the views on mother nature's highway. The Kicking Horse Canyon and beautiful river views is half the fun."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e7aad868-4c83-40b4-7998-1dd443781f00/public"
            />
            <Card
              title="White Water Fun"
              description="Taking on the mighty Kicking Horse River, you will navigate through grade 3 and 4 rapids. Soak up the fun!"
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/7878755f-332e-43ad-8e9b-98eeaf160100/public"
            />
            <Card
              title="Book In Advance"
              description="Slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/bd0ce2cc-f344-409d-4dbd-5d0d89a34e00/public"
            />
            <Card
              title="Wavier Forms"
              description="Download and read waiver forms before your trip."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/e6c81e94-c4d6-4af9-5e6e-5c6c0e4ce900/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Our Epic Adventures</h3>
        <div className="twoCol">
          <div className="left">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/470cb5d7-cf2d-460c-36ff-9c119dbaa400/public"
                layout="fill"
                objectFit="contain"
                alt="Kananaskis River"
              />
            </div>
          </div>
          <div className="right">
            <h3>Kananaskis River Rafting</h3>
            <p>
              A great introduction into white water rafting and an awesome
              experience for the family and friends on the Kananaskis River.
            </p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />4 hours+ (1:30pm -
                5:30pm)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                No experience required
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Must be at least 5 years old
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Children pricing available
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">110</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/catalog/433390/atv-off-road">
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
                alt="Combo"
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
            <Link href="https://epicadventuregroup.rezdy.com/catalog/427160/combos">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>More Info</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </BookAdventureStyles>
      <TopDividerStyles>
        <img
          src="/svg/divider-top.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </TopDividerStyles>
      <TestimonialStyles>
        <div className="">
          <CloudflareVideo source={"c86a97b2a0541d4e01cc67acd85a15ce"} />
        </div>
      </TestimonialStyles>
      <BottomDividerStyles>
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </BottomDividerStyles>
      <WhyEpic style={{ marginTop: "10rem" }} />

      <AdventureSectionStyles>
        <div className="twoCol">
          <div className="left">
            <h3>Additional Details</h3>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Please bring clothes appropriate for weather, including swimming
                outfit. Cold water gear and rafting kit will be provided.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Instructors will teach you everything you need to know with no
                experience required.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Must be at least five years old.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Photos and video of the day of rafting will be available.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                <span>
                  You can view our{" "}
                  <a href="/cancellations" target="_blank" rel="noreferrer">
                    cancellation policy
                  </a>{" "}
                  here.
                </span>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/dea3f523-7e6d-491b-e6c8-3e6bc9ce0400/public"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="Kicking Horse River"
              />
            </div>
          </div>
        </div>
      </AdventureSectionStyles>
      <GoogleMap location={{ lat: 51.147928, lng: -114.843176 }} zoom={15} />
      <SuggestedCombosStyles>
        <h3>Suggested Adventures</h3>
        <div className="cards">
          <SuggestedCombo
            title="Heli Rafting"
            description="Get the best seat above the mountains, take a helicopter over the Three Sisters mountain tops and experience the Rockies in style."
            image="c5ed939e-308e-4c19-58a7-cb8e744d6b00"
            url="/adventures/helirafting"
            internal={true}
          />
          <SuggestedCombo
            title="Kicking Horse River"
            description="Take on the world famous Kicking Horse River. With rapids like Man Eater and Shot Gun, this river is an experience that can't be missed."
            image="c61cf00a-32f2-41c0-09fe-b2c742189700"
            url="/adventures/kickinghorseriver"
            internal={true}
          />
          <SuggestedCombo
            title="Caving"
            description="Take yourself underground in this unique experience inside the bow valley mountains. This trip will expand your relationship with the mountains and local habitat."
            image="c3eff5e5-8bc1-45a6-8ab3-07dfb6cf5800"
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
          style={{ marginLeft: "-.1rem" }}
        />
      </FooterDividerStyles>
    </>
  );
};

export default Skydiving;

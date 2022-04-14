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
        <title>Epic Adventures | Jasper Skytram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImageSlider
        title="Jasper Skytram"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/32ec5ba7-db00-4a8b-6e9c-d9eda4952800/public",
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
          <img src="/images/logos/jasperskytram.svg" />
        </div>
        <div className="pContainer">
          <h2>Jasper Skytram Above All Else</h2>
          <p>
            The Skytram is the longest and highest guided aerial tramway in
            Canada that gives you a unique perspective of the majestic UNESCO
            World Heritage-listed Jasper National Park. Soar above the park's
            sub-alpine vegetation, watching for wildlife below, as you gently
            climb towards the upper station located at 2,263 metres (7,425 feet)
            above sea level. Stroll along the accessible, interpretive boardwalk
            or try hiking the 1.4 km trail to the summit of Whistlers Mountain
            at 2,463 metres (8,081 feet). This family-friendly ride on the
            Jasper Skytram is the perfect experience for guests of all ages.
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
              title="Skytram"
              description="Take a ride in the unique Skytram to ascend into the alpine mountain views."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/3fd3e00c-5d89-478c-a4be-26ec8fd99b00/public"
            />
            <Card
              title="Wildlife"
              description="See the beautiful wildlife of Jasper National Park in their natural habitat."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/2160e5a2-58ed-4456-34c2-c4422f768000/public"
            />
            <Card
              title="Mountain Hikes"
              description="Hike the mountain ridges to gain access to different lookouts and experience the beauty."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/57881971-cde9-4ad8-bbc9-efcd77c5d500/public"
            />
            <Card
              title="Summit Cafe"
              description="The top of the Skytram houses a beautiful café to grab some food or enjoy a coffee."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/5db08ad8-c73e-41f3-f3b5-23679730a200/public"
            />
            <Card
              title="Alpine Views"
              description="Take in the beautiful mountain views and air as you look over the town of Jasper and Jasper National Park."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/67bf40d8-3070-43b5-77d7-0ca52340d100/public"
            />
            <Card
              title="Book In Advance"
              description="Slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/b898aaac-9ad9-4a01-a45f-868deb361400/public"
            />
          </Carousel>
        </div>
      </CardSectionStyles>

      <BookAdventureStyles marginBottom={true}>
        <h3>Our Epic Adventures</h3>
        <div className="twoCol">
          <div className="left">
            <Image
              src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/9991ee88-5ea9-4cbc-1234-7c3d2f4c8700/public"
              layout="fill"
              objectFit="contain"
              alt="Jasper Skytram"
            />
          </div>
          <div className="right">
            <h3>Jasper Skytram Ticket</h3>
            <p>Ascend 7,400ft. above sea level in the unique Jasper Skytram.</p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Listed price for one adult
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Family and child prices available
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">TBD</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/485236/jasper-skytram">
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
            <Link href="/combos">
              <div className="button">
                <span>More Info</span>
              </div>
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
        <p>
          “Excellent service and friendly staff. This is a must do in Jasper! Be
          prepared and make the effort to the summit, you will be rewarded!”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Summer, Aug. 2021</p>
        <p>
          “Mind-blowing views in all directions on a clear day. Very smooth
          ride. Definitely worth hiking up toward the summit from the top of the
          tram. The tram is shared but ventilation is abundant with the windows
          open and riders are masked.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">OttawaPhil, Sept. 2021</p>
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
                Arrive 20 minutes before your departure time. Allow 1-2 Hours
                for activity.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Children 6 and under are free.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                <span>
                  You can view our{" "}
                  <a href="cancellations" target="_blank" rel="noreferrer">
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
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/d4b26156-1dc5-44d9-90ee-52620df5d300/public"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="Jasper Skytram"
              />
            </div>
          </div>
        </div>
      </AdventureSectionStyles>
      <GoogleMap location={{ lat: 52.855237, lng: -118.103437 }} zoom={15} />
      <SuggestedCombosStyles>
        <h3>Suggested Adventures</h3>
        <div className="cards">
          <SuggestedCombo
            title="Maligne Lake Cruise"
            description="A boutique cruise over the pristine lake and untouched scenery."
            image="c20cd904-9f5d-41fd-5b55-47895cf87b00"
            url="/adventures/malignelake"
            internal={true}
          />
          <SuggestedCombo
            title="Skywalk"
            description="Take a glass floored experience over the edge and see the epic views of the glaciers."
            image="e0b73138-6d65-4b1e-fc92-6f2c9631f800"
            url="/adventures/skywalk"
            internal={true}
          />
          <SuggestedCombo
            title="Columbia Icefield"
            description="An unforgettable tour onto the glaciers with this epic off road bus."
            image="34a9b175-de9e-401a-91e4-a0bd3eac5a00"
            url="/adventures/columbiaicefield"
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

export default MaligneLake;

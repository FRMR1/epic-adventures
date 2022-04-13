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
  const videoURL = "f98cbb39f8de0b25973dd6f3436caad0";

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
        <title>Epic Adventures | Valley Zipline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heroVideo">
        <HeroVideoStyles>
          <CloudflareVideo source={videoURL} />
        </HeroVideoStyles>
      </div>
      <HeroImageSlider
        title="Valley Zipline"
        images={[
          "https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/f7b6ead9-f3ba-4012-1681-3903c61db700/public",
        ]}
        cdn={true}
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
          <h2>The Valley's Zipline and Adventure Park</h2>
          <p>
            Hidden in the beautiful Columbia Valley, Valley Zipline Adventures
            offer a hands-on eco-tourism experience. With a course consisting of
            7 different ziplines, aerial course, climbing wall and jump tower
            this family friendly adventure park is a perfect addition to your
            trip through the Rockies. Challenge yourself on the guided zipline
            course, zig-zagging through the trees with no experience required
            you will be taught everything you need to know. Awarded the “best
            family activity” in Radium you can't go wrong with a visit to Valley
            Zipline Adventures.
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
              title="Family Adventure"
              description="Voted best family adventure in Radium."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/45182d45-f499-421b-61f2-2de00b27c300/public"
            />
            <Card
              title="Ziplines"
              description="The course offers 7 ziplines and will take about 1.5 hours to complete."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/5ff01d26-9fc5-45db-2666-d35fb29b3600/public"
            />
            <Card
              title="Gear"
              description="You will be provided with all necessary safety equipment to complete your adventures."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/a8e001a0-0918-4fba-251d-01626dcecf00/public"
            />
            <Card
              title="Guides"
              description="The accredited and experienced guides will teach you everything you need to know and help you along the way."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/96d2d24c-a773-46b9-921f-f1052f483800/public"
            />
            <Card
              title="Location"
              description="With the course up in the trees and located just outside Radium Hot Springs, this is a beautiful location with epic mountain valley views."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/ac7427ae-cfaa-43c6-2a41-885cb7256700/public"
            />
            <Card
              title="Jump Tower and Climbing Wall"
              description="Thirty-five foot climbing wall and jump tower can be reserved on the day, no booking required."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/f5b242c2-68cd-4273-e1d9-df81a18a3e00/public"
            />
            <Card
              title="Book in Advance"
              description="Zipline slots fill fast as this experience is extremely popular, be sure to get your spot."
              imageUrl="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/0fb9d521-b9f5-4118-36f9-488ff0b37e00/public"
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
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/6a4178d3-9848-4836-855f-addf3c734400/public"
                layout="fill"
                objectFit="contain"
                alt="Valley Zipline"
              />
            </div>
          </div>
          <div className="right">
            <h3>Zipline Tour</h3>
            <p>Take the challenge and fly through the trees.</p>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Duration: 1.5 hours (approx.)
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Gear included
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Guided trip
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Seven different ziplines
              </li>
            </ul>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">TBD</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/485202/valley-zipline-zipline-tour">
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
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/f9ebfc52-96d8-480d-7ebd-871a83139200/public"
                layout="fill"
                objectFit="contain"
                alt="Zipline"
              />
            </div>
          </div>
          <div className="right">
            <h3>Aerial Park</h3>
            <p>New aerial course coming soon.</p>
            <div className="priceContainer">
              <span className="dollarSign">$</span>
              <span className="amount">TBD</span>
              <span className="currency">CAD</span>
            </div>
            <Link href="https://epicadventuregroup.rezdy.com/485202/valley-zipline-zipline-tour">
              <a target="_blank" rel="noreferrer">
                <div className="button">
                  <span>Book Now</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="twoCol">
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
        <p>
          “Great time. Everyone enjoyed themselves. We had a wide range of ages
          in our party and a great time was had by all. Our tour guides Riley
          and Caden were great.”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Elizabeth S., Aug. 2021</p>
        <p>
          “Cass and Scott - best guides ever! Had so much fun. Thanks for such a
          great experience, laughter and rescues! PS Have a great season Cass!”
        </p>
        <div className="faceContainer">
          <img src="/svg/face.svg" width="30px" />
        </div>
        <p className="customerName">Lisa M., August 2021</p>
      </TestimonialStyles>
      <BottomDividerStyles>
        <img
          src="/svg/divider-bottom.svg"
          width="101%"
          style={{ marginLeft: "-.1rem" }}
        />
      </BottomDividerStyles>
      <WhyEpic />
      <AdventureSectionStyles>
        <div className="twoCol">
          <div className="left">
            <h3>Additional Details</h3>
            <ul>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Jump tower weight 45 lbs to 265 lbs. Climbing wall weight 22 lbs
                to 330 lbs. Zipline course weight 65 lbs to 250 lbs.
              </li>
              <li>
                <img src="/svg/checkmark.svg" width="15" />
                Please bring appropriate clothing for weather.
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="imageRotate">
              <Image
                src="https://imagedelivery.net/cGGu211iAYkGzG2QT0_3cQ/40026ce8-d74c-40ea-8519-f4cacfc1ac00/public"
                layout="responsive"
                width="100%"
                height="auto"
                objectFit="contain"
                alt="Valley Zipline"
              />
            </div>
          </div>
        </div>
      </AdventureSectionStyles>
      <GoogleMap location={{ lat: 50.585094, lng: -116.042102 }} zoom={15} />
      <SuggestedCombosStyles>
        <h3>Suggested Adventures</h3>
        <div className="cards">
          <SuggestedCombo
            title="Golden Gondola"
            description="Take the Golden Eagle Express Gondola to the top of the resort to get those mountain views and access hiking trails."
            image="545e27e2-072f-4e13-253f-40898912f800"
            url="/adventures/goldengondola"
            internal={true}
          />
          <SuggestedCombo
            title="Via Ferrata Kicking Horse"
            description="Challenge yourself on this guided trip on the side of the mountain peaks. With unforgettable views this outdoor adventure you won't forget."
            image="11e9dbeb-b46d-4322-88e9-9172f64a2800"
            url="/adventures/viakickinghorse"
            internal={true}
          />
          <SuggestedCombo
            title="Rafting Kicking Horse River"
            description="Take on the world famous Kicking Horse River. With rapids like Man Eater and Shot Gun, this river is an experience that can't be missed."
            image="c61cf00a-32f2-41c0-09fe-b2c742189700"
            url="/adventures/kickinghorseriver"
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
